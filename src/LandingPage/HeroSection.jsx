import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../LandingPage/Herosection.css';
import logo from '../LandingPage/Landingassets/logo.svg';

const HeroSection = () => {
  const navigate = useNavigate();

  const goToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo-with-text">
          <img src={logo} alt="IonSpark logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">IonSpark</span>
            <span className="logo-sub">renewable energies</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="/login" onClick={goToLogin}>Sign In</a>
          <a href="/login" onClick={goToLogin}>Sign Up</a>
        </nav>
      </header>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Drones that <br />
            detect the power <br />
            of the planet:
          </h1>
          <div className="caption-row">
            <p className="hero-caption">
              In countries with high renewable energy potential like El Salvador, our drone inspections help
              reduce the carbon footprint by up to 20% annually per system.
            </p>
            <button className="cta-button" onClick={goToLogin}>Get inspection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
