// src/components/Topbar.jsx
import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-content">
        <img src="/logo.svg" alt="IonSpark Logo" className="topbar-logo" />
        <span className="topbar-title">IonSpark</span>
      </div>
    </div>
  );
};

export default Topbar;
