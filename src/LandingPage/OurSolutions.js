// src/components/OurSolutions.js
import React from "react";
import "../Styles/Landipage/ourSolutions.css";

const OurSolutions = () => {
  return (
    <section className="our-solutions">
      <div className="solutions-content">
        <h2 className="section-title">Our Solutions</h2>
        <div className="solutions-grid">
          <div className="solution-card">
            <h3 className="solution-title">Solar Energy</h3>
            <p className="solution-description">
              Solar energy is a renewable resource that uses sunlight to generate electricity or heat
               through technologies like photovoltaic panels and solar thermal collectors. 
            </p>
          </div>
          <div className="solution-card">
            <h3 className="solution-title">Wind Energy</h3>
            <p className="solution-description">
              Wind energy is a renewable source that converts the wind’s kinetic energy into electricity using wind turbines.
               It is clean, efficient, and helps decrease the use of fossil fuels.
            </p>
          </div>
          <div className="solution-card">
            <h3 className="solution-title">Hydraulic Energy</h3>
            <p className="solution-description">
              Hydraulic energy is a renewable source derived from the movement of water. Is generated in hydroelectric power plants,
               where flowing water drives turbines connected to generators ,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
