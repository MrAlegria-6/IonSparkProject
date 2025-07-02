import React from 'react';
import {
  BarChart3, Users, Shield, Settings, HelpCircle, LogOut, Bell, Globe
} from 'lucide-react';
import '../UserDashboard/Dashboard.css';
import './Notis.css'

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      title: 'Programme that pushes boundaries',
      description: 'Personalised medicine initiative by Sarrah.',
      image: 'https://i.pravatar.cc/150?img=10',
    },
    {
      id: 2,
      title: 'Focus group on genetic tests',
      description: 'Discussion group led by Mariem.',
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 3,
      title: 'New opportunities in e-health',
      description: 'Michelangelo shares new trends in health tech.',
      image: 'https://i.pravatar.cc/150?img=14',
    },
    {
      id: 4,
      title: 'How patients perceive NGS',
      description: 'Insights gathered by Raffaello.',
      image: 'https://i.pravatar.cc/150?img=16',
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

              {cards.map((card) => (
              <div key={card.id} className="notis-card">
                <img src={card.image} alt="avatar" className="notis-avatar" />
                <div className="notis-card-content">
                  <h3 className="notis-title">{card.title}</h3>
                  <p className="notis-description">{card.description}</p>
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

export default Dashboard;
