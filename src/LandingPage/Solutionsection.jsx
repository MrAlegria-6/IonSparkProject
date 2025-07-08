import React from 'react';
import '../LandingPage/SolutionSection.css';
import { FaSolarPanel, FaWind, FaWater } from 'react-icons/fa';

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <h1 className="section-title">Our solutions</h1>
      <p className="section-subtitle">
        We offer for you the best options of renewable energies to save money and the most important thing, help the environment.
      </p>
      <div className="cards-container">
        <div className="solution-card">
          <FaSolarPanel className="icon" />
          <h3 className="card-title solar">Solar Energy</h3>
          <p className="card-description">
            Solar energy is a renewable resource that uses sunlight to generate electricity or heat through technologies like photovoltaic panels and solar thermal collectors.
          </p>
        </div>
        <div className="solution-card">
          <FaWind className="icon" />
          <h3 className="card-title wind">Wind Energy</h3>
          <p className="card-description">
            Wind energy is a renewable source that converts the wind’s kinetic energy into electricity using wind turbines. It is clean, efficient, and helps decrease the use of fossil fuels.
          </p>
        </div>
        <div className="solution-card">
          <FaWater className="icon" />
          <h3 className="card-title hydraulic">Hydraulic Energy</h3>
          <p className="card-description">
            Hydraulic energy is a renewable source derived from the movement of water. It is generated in hydroelectric power plants, where flowing water drives turbines connected to generators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
