import React from 'react';
import { BarChart3, Users, Shield, Settings, HelpCircle, LogOut, Bell, Globe } from 'lucide-react';
import '../UserDashboard/Dashboard';
import './Contact.css';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

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
                <main>
                    {/* Aquí puedes insertar lo que quieras más adelante */} {

                        <section className="contact-section">
                            {/* Imagen circular */}
                            <div className="image-wrapper">
                                <img src="/Drone.jpg" className="Contacto-visual" />
                            </div>

                            {/* Formulario de contacto */}
                            <form className="contact-form">
                                <h2>Contact Us</h2>

                                <input type="text" placeholder="Name" required />
                                <input type="text" placeholder="Phone Number" required />
                                <input type="email" placeholder="Gmail" required />
                                <input type="text" placeholder="Company" />
                                <textarea placeholder="Message" rows="4"></textarea>

                                <button type="submit">Send Message</button>
                            </form>
                        </section>
                    }
                    <footer className="ionspark-section">
                        <div className="ionspark-horizontal">

                            {/* Logo y nombre */}
                            <div className="brand-block">
                                <img src="/Logo.svg" alt="IonSpark logo" className="logo" />
                                <div className="brand-text">
                                    <h1>IonSpark</h1>
                                    <p className="subtitle">renewable energies</p>
                                </div>
                            </div>

                            {/* Redes sociales */}
                            <div className="social-links">
                                <div className="social-row"><FaInstagram /> <span>@ion_spark</span></div>
                                <div className="social-row"><FaFacebookF /> <span>/IonSparkEnergy</span></div>
                                <div className="social-row"><FaEnvelope /> <span>ion.spark12@gmail.com</span></div>
                            </div>

                            {/* Menú en dos columnas */}
                            <div className="middle-block">
                                <ul className="nav-links">
                                    <li>Contact us</li>
                                    <li>Quote price</li>
                                    <li>Companies supplying</li>
                                </ul>
                                <ul className="nav-links">
                                    <li>Services</li>
                                    <li>About us</li>
                                    <li>Energies</li>
                                </ul>
                            </div>

                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
