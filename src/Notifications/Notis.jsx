import React from 'react';
import {
  BarChart3, Users, Shield, Settings, HelpCircle, LogOut, Bell, Globe, Sun, Wind, Thermometer
} from 'lucide-react';  // Agregar íconos relacionados con energías renovables
import '../UserDashboard/Dashboard.css';
import './Notis.css';

const Notis = () => {
  const notificaciones = [
    {
      id: 1,
      title: 'Análisis de terreno completado',
      description: 'El análisis del terreno en San Juan opico ha concluido. Se recomienda la integración de energía solar.',
      image: 'logo.svg',
      icon: <Sun size={24} color="#FFEB3B" />  // Icono de energía solar
    },
    {
      id: 2,
      title: 'Potencial para energía eólica',
      description: 'El terreno en Colonia Tecpan presenta condiciones favorables para instalar un parque eólico.',
      image: 'logo.svg',
      icon: <Wind size={24} color="#4CAF50" />  // Icono de energía eólica
    },
    {
      id: 3,
      title: 'Recomendación: Instalación geotérmica',
      description: 'El análisis geotérmico sugiere que se puede integrar energía geotérmica en el área de [Ubicación].',
      image: 'logo.svg',
      icon: <Thermometer size={24} color="#FF7043" />  // Icono de energía geotérmica
    },
    {
      id: 4,
      title: 'Verificación de viabilidad',
      description: 'El terreno en colonia Villa Tzuchi ha sido verificado como apto para la integración de energía renovable.',
      image: 'logo.svg',
      icon: <Sun size={24} color="#FFEB3B" />  // Otro ícono de energía solar para coherencia
    },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon">
                <Globe size={20} />
              </div>
              <span className="logo-text">IonSpark</span>
            </div>
          </div>
          <div className="header-right">
            <nav className="nav">
              <a href="#" className="nav-link active">Home</a>
              <a href="#" className="nav-link">Dashboard</a>
              <a href="#" className="nav-link">Results</a>
              <a href="#" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="menu-section">
              <div className="menu-item active">
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </div>
              <div className="menu-item">
                <Users size={20} />
                <span>Profile</span>
              </div>
              <div className="menu-item">
                <Shield size={20} />
                <span>Network</span>
              </div>
              <div className="menu-item">
                <Bell size={20} />
                <span>Notifications</span>
              </div>
              <div className="menu-item">
                <Settings size={20} />
                <span>Settings</span>
              </div>
            </div>

            <div className="help-section">
              <h3 className="section-title">Help & Support</h3>
              <div className="menu-item">
                <HelpCircle size={20} />
                <span>Help</span>
              </div>
              <div className="menu-item">
                <Settings size={20} />
                <span>Services</span>
              </div>
            </div>

            <div className="logout-section">
              <div className="menu-item">
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="main-content">
          <div className="placeholder">
            <div className="card-list" style={{ padding: '20px' }}>
              {notificaciones.map((notificacion) => (
                <div key={notificacion.id} className="notis-card">
                  <img src={notificacion.image} alt="avatar" className="notis-avatar" />
                  <div className="notis-card-content">
                    <div className="notis-icon">
                      {notificacion.icon}  {/* Agregar el ícono correspondiente */}
                    </div>
                    <h3 className="notis-title">{notificacion.title}</h3>
                    <p className="notis-description">{notificacion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notis;
