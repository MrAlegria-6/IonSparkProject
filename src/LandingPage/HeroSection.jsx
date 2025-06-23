// src/components/HeroSection.jsx
import React from 'react';
import '../LandingPage/Herosection.css';
import logo from '../LandingPage/Landingassets/logo.svg'; // Asegúrate de que la imagen se llame así y esté en la ruta correcta

const HeroSection = () => {
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
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
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
  <button className="cta-button">Get inspection</button>
</div>

<p className="hero-subtitle">
   In countries with high renewable energy potential like El Salvador, our drone inspections help
  reduce the carbon footprint by up to 20% annually per system.
</p>


        </div>
      </div>
    </div>
  );
};

export default HeroSection;
