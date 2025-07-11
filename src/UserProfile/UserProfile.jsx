// src/UserDashboard/UserProfile.jsx
import React from 'react';
import { BarChart3, Users, History, Bell, Settings, CreditCard, LogOut, Globe } from 'lucide-react';
import './UserProfile.css';
import '../UserDashboard/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon"><Globe size={20} /></div>
              <span className="logo-text">IonSpark</span>
            </div>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="menu-section">
              <div className="menu-item">
                <BarChart3 size={20} />
                <span onClick={() => navigate("/dashboard")}>Dashboard</span>
              </div>
              <div className="menu-item active">
                <Users size={20} />
                <span>Profile</span>
              </div>
              <div className="menu-item">
                <History size={20} />
                <span onClick={() => navigate("/historial")}>Historial</span>
              </div>
              <div className="menu-item">
                <Bell size={20} />
                <span onClick={() => navigate("/notifications")}>Notifications</span>
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
                <Settings size={20} />
                <span>Services</span>
              </div>
            </div>

            <div className="logout-section">
              <div className="menu-item" onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}>
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <div className="profile-container">
            <h2 className="profile-title">My Profile</h2>

            <div className="profile-card">
              <div className="profile-info">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Profile"
                  className="profile-image"
                />
                <div className="profile-details">
                  <h3>Christian Alfaro</h3>
                  <p><strong>Email:</strong> christian@email.com</p>
                  <p><strong>User Type:</strong> Estudiante</p>
                  <p><strong>Location:</strong> San Salvador, El Salvador</p>
                  <p><strong>Member since:</strong> Jan 2025</p>
                </div>
              </div>
              <div className="edit-button-container">
                <button className="edit-button">Edit</button>
              </div>
            </div>

            <div className="energy-status-card">
              <h3>Energy Recommendation</h3>
              <p><strong>Type:</strong> Solar & Wind</p>
              <p><strong>Last Scan:</strong> June 18, 2025 (Green Valley)</p>
              <p><strong>Estimated Monthly Savings:</strong> $42.50</p>
              <button className="action-button">View Analysis</button>
            </div>

            <div className="quick-actions">
              <button className="action-button">Request New Scan</button>
              <button className="action-button">View Reports</button>
              <button className="logout-button" onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}>Log Out</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
