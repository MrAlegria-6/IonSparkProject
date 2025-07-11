import React from 'react';
import { Globe } from 'lucide-react';
import './Contact.css';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
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
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <section className="contact-section">
                    {/* Imagen circular */}
                    <div className="image-wrapper">
                        <img src="/Drone.jpg" className="Contacto-visual" alt="Drone visual" />
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

                {/* Footer */}
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
    );
};

export default Contact;
