import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas públicas
import Page from './LandingPage/Page';
import LoginRegister from './login/login.jsx';

// Páginas internas
import Dashboard from './UserDashboard/Dashboard';
import Notis from './Notifications/Notis.jsx';
import Historial from './Historial/Historial.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';
import SettingsPage from './Settings/Settings.jsx';
import Results from './results/Results.jsx'; // <-- Importa Results aquí

// Layout que incluye Sidebar y Topbar
import SidebarLayout from './SideBar/Sidebar.jsx';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas sin Sidebar ni Topbar */}
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<LoginRegister />} />

        {/* Rutas protegidas con Sidebar + Topbar */}
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/notifications" element={<Notis />} />
          <Route path="/ajustes" element={<SettingsPage />} />
          <Route path="/results" element={<Results />} />  {/* <-- Agrega la ruta aquí */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
