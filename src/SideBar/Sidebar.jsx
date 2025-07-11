import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { BarChart3, Users, Settings, LogOut, Bell, History, Menu } from 'lucide-react';
import Topbar from '../Topbar/Topbar'; // Ajusta si es necesario
import './Sidebar.css';

function SidebarLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <- para detectar la ruta actual

  const menuItems = [
    { label: 'Dashboard', icon: <BarChart3 size={20} />, path: '/dashboard' },
    { label: 'Perfil', icon: <Users size={20} />, path: '/perfil' },
    { label: 'Historial', icon: <History size={20} />, path: '/historial' },
    { label: 'Notificaciones', icon: <Bell size={20} />, path: '/notifications' },
    { label: 'Configuración', icon: <Settings size={20} />, path: '/ajustes' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Topbar />
      <div className="main-layout">
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
          <div className="top-bar">
            <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
              <Menu size={24} />
            </button>
          </div>

          <div className="menu-section">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <div
                  key={index}
                  className={`menu-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavigate(item.path)}
                  title={collapsed ? item.label : undefined}
                >
                  {item.icon}
                  {!collapsed && <span>{item.label}</span>}
                </div>
              );
            })}
          </div>

          <div className="logout-section">
            <div
              className="menu-item"
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
            >
              <LogOut size={20} />
              {!collapsed && <span>Salir</span>}
            </div>
          </div>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default SidebarLayout;
