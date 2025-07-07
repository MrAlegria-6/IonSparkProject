// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './LandingPage/Page';                 // <- Tu landing completa
import LoginRegister from './login/login.jsx';         // <- Página de Login
import Dashboard from './UserDashboard/Dashboard';
import Notifications from './Notifications/Notis.jsx'     // <- Página protegida (después del login)
import Historial from './Historial/Historial.jsx'
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />           {/* Landing Page completa */}
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/historial" element={<Historial/>} />
      </Routes>
    </Router>
  );
}

export default App;
