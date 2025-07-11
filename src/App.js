import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './LandingPage/Page';
import LoginRegister from './login/login.jsx';
import Dashboard from './UserDashboard/Dashboard';
import Notifications from './Notifications/Notis.jsx';
import Historial from './Historial/Historial.jsx';
import UserProfile from './UserProfile/UserProfile';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
