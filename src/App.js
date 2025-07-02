// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './LandingPage/Page';                 // <- Tu landing completa
import LoginRegister from './login/login.jsx';         // <- Página de Login
import Dashboard from './UserDashboard/Dashboard';     // <- Página protegida (después del login)
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />           {/* Landing Page completa */}
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
