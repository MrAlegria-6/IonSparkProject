import React, { useState } from 'react';
import './login.css';

const LoginRegister = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering
      ? 'http://localhost:3000/register'
      : 'http://localhost:3000/login';

    const payload = isRegistering
      ? { nombre, correo, contraseña }
      : { correo, contraseña };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = isRegistering
          ? '/InnVate/SuccessPage/SuccessPage.html'
          : '/RolesPage/Roles.html';
      } else {
        alert(data.message || 'Error en la autenticación');
      }
    } catch (err) {
      alert('Error de conexión con el servidor');
      console.error(err);
    }
  };

  return (
    <div className="container-form">
      {/* Panel izquierdo */}
      <div className="information">
        <div className="info-childs">
          <img src="/HomePage/Img/LogoInnVateBg.png" alt="Logo" />
          <h2>IonSpark</h2>
          <p>
            {isRegistering
              ? 'Bienvenido a IonSpark, crea una cuenta para empezar'
              : 'Bienvenido a IonSpark, inicia sesión para empezar'}
          </p>
          <input
            type="button"
            value={isRegistering ? 'Inicia Sesión' : 'Regístrate'}
            onClick={() => setIsRegistering(!isRegistering)}
          />
        </div>
      </div>

      {/* Panel derecho */}
      <div className="form-information">
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
  );
};

export default LoginRegister;
