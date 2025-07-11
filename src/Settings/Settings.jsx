import React, { useState } from 'react';
import {
  BarChart3, Users, History, Bell, Settings, CreditCard,
  Mail, LogOut, User, Shield, Palette, Save, Check,
  Sun, Moon, Monitor
} from 'lucide-react';
import "./Settings.css";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    theme: 'dark',
    language: 'es',
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: false,
    marketingEmails: false,
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30'
  });

  const [saved, setSaved] = useState(false);

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon">
                <img src="/logo.svg" alt="Logo" style={{ width: '24px', height: '24px' }} />
              </div>
              <span className="logo-text">IonSpark</span>
            </div>
          </div>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="menu-section">
              <div className="menu-item">
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </div>
              <div className="menu-item active">
                <Users size={20} />
                <span>Profile</span>
              </div>
              <div className="menu-item">
                <History size={20} />
                <span>Historial</span>
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
                <CreditCard size={20} />
                <span>Plans</span>
              </div>
              <div className="menu-item">
                <Mail size={20} />
                <span>Contact</span>
              </div>
            </div>

            <div className="logout-section">
              <div className="menu-item" onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/';
              }}>
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Contenido principal: Settings */}
        <main className="main-content">
          <div className="page-header">
            <div className="settings-header">
              <h1 className="page-title">Configuración</h1>
              <button
                className={`save-btn ${saved ? 'saved' : ''}`}
                onClick={handleSave}
              >
                {saved ? <Check size={18} /> : <Save size={18} />}
                {saved ? 'Guardado' : 'Guardar Cambios'}
              </button>
            </div>
          </div>

          <div className="settings-sections">
            {/* SECCIÓN CUENTA */}
            <div className="settings-section">
              <div className="section-header">
                <User size={20} />
                <h2 className="card-title">Cuenta</h2>
              </div>
              <div className="settings-grid">
                {['firstName', 'lastName', 'email', 'phone'].map((field, i) => (
                  <div className="setting-group" key={i}>
                    <label className="setting-label">
                      {field === 'firstName' ? 'Nombre' :
                        field === 'lastName' ? 'Apellido' :
                          field === 'email' ? 'Email' : 'Teléfono'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={settings[field]}
                      onChange={(e) => handleSettingChange(field, e.target.value)}
                      className="setting-input"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN APARIENCIA */}
            <div className="settings-section">
              <div className="section-header">
                <Palette size={20} />
                <h2 className="card-title">Apariencia</h2>
              </div>
              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <label className="setting-label">Tema</label>
                    <span className="stat-description">Elige tu tema preferido</span>
                  </div>
                  <div className="theme-selector">
                    {['light', 'dark', 'auto'].map((theme, i) => (
                      <button
                        key={i}
                        className={`theme-btn ${settings.theme === theme ? 'active' : ''}`}
                        onClick={() => handleSettingChange('theme', theme)}
                      >
                        {theme === 'light' ? <Sun size={16} /> :
                          theme === 'dark' ? <Moon size={16} /> : <Monitor size={16} />}
                        {theme === 'light' ? 'Claro' : theme === 'dark' ? 'Oscuro' : 'Auto'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label className="setting-label">Idioma</label>
                    <span className="stat-description">Selecciona tu idioma preferido</span>
                  </div>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                    className="setting-select"
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
            </div>

            {/* NOTIFICACIONES */}
            <div className="settings-section">
              <div className="section-header">
                <Bell size={20} />
                <h2 className="card-title">Notificaciones</h2>
              </div>
              <div className="settings-list">
                {['emailNotifications', 'pushNotifications', 'weeklyReports', 'marketingEmails'].map((item, i) => (
                  <div className="setting-item" key={i}>
                    <div className="setting-info">
                      <label className="setting-label">
                        {item === 'emailNotifications' ? 'Notificaciones por email' :
                          item === 'pushNotifications' ? 'Notificaciones push' :
                            item === 'weeklyReports' ? 'Reportes semanales' : 'Emails de marketing'}
                      </label>
                      <span className="stat-description">
                        {item === 'emailNotifications' ? 'Recibe actualizaciones en tu email' :
                          item === 'pushNotifications' ? 'Recibe notificaciones en tiempo real' :
                            item === 'weeklyReports' ? 'Resumen semanal de actividad' :
                              'Recibe ofertas y promociones'}
                      </span>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={settings[item]}
                        onChange={(e) => handleSettingChange(item, e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* SEGURIDAD */}
            <div className="settings-section">
              <div className="section-header">
                <Shield size={20} />
                <h2 className="card-title">Seguridad</h2>
              </div>
              <div className="settings-list">
                {['twoFactorAuth', 'loginAlerts'].map((item, i) => (
                  <div className="setting-item" key={i}>
                    <div className="setting-info">
                      <label className="setting-label">
                        {item === 'twoFactorAuth' ? 'Autenticación de dos factores' : 'Alertas de inicio de sesión'}
                      </label>
                      <span className="stat-description">
                        {item === 'twoFactorAuth'
                          ? 'Añade una capa extra de seguridad'
                          : 'Recibe notificaciones de nuevos accesos'}
                      </span>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={settings[item]}
                        onChange={(e) => handleSettingChange(item, e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                ))}

                <div className="setting-item">
                  <div className="setting-info">
                    <label className="setting-label">Tiempo de sesión</label>
                    <span className="stat-description">Cierra sesión automáticamente por seguridad</span>
                  </div>
                  <select
                    value={settings.sessionTimeout}
                    onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                    className="setting-select"
                  >
                    <option value="15">15 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="60">1 hora</option>
                    <option value="120">2 horas</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
