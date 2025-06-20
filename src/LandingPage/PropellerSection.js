// src/components/PropellerSection.js
import React from "react";
import "../Styles/Landipage/propellerSection.css";
const PropellerSection = () => {
  return (
    <section className="propeller-section">
      {/* Fondo de partículas en la sección */}
      {/* Contenedor de la card de información */}
      <div className="card-container">
        <div className="text-card">
          <h4 classname="mini-title">Main initiative</h4>
          <h2 className="section-heading">“Our Goal is To Change The Modern World Become Nature Friendly”</h2>
          <p className="section-description">
            We offer to you the best options of renewable energies to save money and the most important thing, help the environment: 
          </p>
          <button className="btn-button">Descubrir más</button>
        </div>
      </div>
      {/* Imagen sobrepuesta (a la derecha) – utiliza la imagen de aerogenerador */}
      <img 
        src="/assets/drone.png" 
        alt="Aerogenerador Animado" 
        className="propeller-image-overlay" 
      />
    </section>
  );
};

export default PropellerSection;

