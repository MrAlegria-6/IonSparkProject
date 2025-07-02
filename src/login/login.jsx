import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [animationClass, setAnimationClass] = useState('fade-in');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering
      ? 'http://127.0.0.1:8000/register/'
      : 'http://127.0.0.1:8000/api/login/';

    const payload = {
      username: correo,
      password: contraseña,
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        if (!isRegistering) {
          localStorage.setItem('token', data.token);
          navigate('/dashboard');
        } else {
          alert('Usuario registrado. Por favor inicia sesión.');
          setIsRegistering(false);
        }
      } else {
        alert(data.error || data.message || 'Error en la operación');
      }
    } catch (error) {
      alert('Error de conexión con el servidor');
      console.error(error);
    }
  };

  const handleToggleForm = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setIsRegistering(!isRegistering);
      setAnimationClass('fade-in');
    }, 500);
  };

  return (
    <div className="login-wrapper">
      <div className={`container-form ${animationClass}`}>
        <div className={`information ${animationClass}`}>
          <div className="info-childs">
            <img src="/logo.svg" alt="Logo IonSpark" />
            <h2>IonSpark</h2>
            <p>
              {isRegistering
                ? 'Bienvenido a IonSpark, crea una cuenta para empezar'
                : 'Bienvenido a IonSpark, inicia sesión para empezar'}
            </p>
            <input
              type="button"
              value={isRegistering ? 'Inicia Sesión' : 'Regístrate'}
              onClick={handleToggleForm}
            />
          </div>
        </div>

        <div className={`form-information ${animationClass}`}>
          <div className="form-information-childs">
            <h2>{isRegistering ? 'Crea tu Cuenta Ahora' : 'Iniciar Sesión'}</h2>
            <p>{isRegistering ? 'Utiliza un email para registrarte' : 'Inicia sesión con una cuenta'}</p>

            <form onSubmit={handleSubmit} className="form">
              {isRegistering && (
                <label>
                  <i className="bx bx-user"></i>
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </label>
              )}
              <label>
                <i className="bx bx-envelope"></i>
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </label>
              <label>
                <i className="bx bx-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  required
                />
              </label>
              <button type="submit">
                {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
              </button>
            </form>

            <div className="icons">
              <i className="bx bxl-microsoft"></i>
              <i className="bx bxl-google"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
