// src/components/EnergyServices.js
import React from "react";
import "../Styles/Landipage/energyServices.css";

const services = [
  {
    title: "Solar Energy",
    description:
      "Solar energy is a renewable resource that uses sunlight to generate electricity or heat through technologies like photovoltaic panels and solar thermal collectors.",
  },
  {
    title: "Wind Energy",
    description:
      "Wind energy is a renewable source that converts the wind’s kinetic energy into electricity using wind turbines. It is clean, efficient, and helps decrease the use of fossil fuels.",
  },
  {
    title: "Hydraulic Energy",
    description:
      "Hydraulic energy is a renewable source derived from the movement of water. It is generated in hydroelectric power plants, where flowing water drives turbines connected to generators.",
  },
];

const EnergyServices = () => {
  return (
    <section className="energy-services">
      <h2 className="section-title">Our Renewable Energy Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnergyServices;