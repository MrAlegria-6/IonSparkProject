// src/components/Hero.js
import React from "react";
import "../Styles/Landipage/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-mask"></div> {/* Crea la máscara SVG para el efecto */}
      <div className="hero-content">
        <h1 className="hero-title">Drones that detect the power of the planet:</h1>
        <p className="hero-subtitle">
          We specialize in aerial inspections to improve the efficiency and sustainability of renewable energy systems
        </p>
        <h5 className= "hero-description">In countries with high renewable energy potential like El Salvador, our drone inspections help reduce the carbon footprint by up to 20% annually 
          per system, maximizing energy efficiency and eliminating the use of polluting transportation.</h5>
        <button class="cta-button">Get inspection</button>
      </div>
    </section>
  );
};

export default Hero;
