import React from 'react';
import { BarChart3, Users, Shield, Settings, HelpCircle, LogOut, Bell, Globe } from 'lucide-react';
import '../UserDashboard/Dashboard.css';

const Dashboard = () => {
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

        {/* Content placeholder */}
        <main className="main-content">
          <div className="placeholder">
            {/* Aquí puedes insertar lo que quieras más adelante */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
