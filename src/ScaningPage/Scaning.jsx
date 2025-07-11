import React from 'react';
import { BarChart3, Users, Shield, Settings, HelpCircle, LogOut, Bell, Search, Globe } from 'lucide-react';
import './Scaning.css';

const Scaning = () => {
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

            <div className="stat-card">
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
                                <span>Administrator</span>
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
                                <Globe size={20} />
                                <span>Historial</span>
                            </div>
                            <div className="menu-item">
                                <Search size={20} />
                                <span>Scaning</span>
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

                <iframe
                    src="https://screenmirroring.app/receiver#google_vignette"
                    width="1000"
                    height="600"
                ></iframe>

            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">
                                <Globe size={16} />
                            </div>
                            <span>IonSpark</span>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div>Contact Us</div>
                        <div>About us</div>
                        <div>Privacy Policy</div>
                        <div>About us</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Scaning;