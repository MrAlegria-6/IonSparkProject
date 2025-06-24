// ServicesSection.jsx
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">SERVICES</h2>
      <div className="cards-container">
        <div className="service-card">
          <h3>Solar Energy</h3>
          <p>Generate clean electricity and save on your monthly bill with the use of photovoltaic panels.</p>
        </div>
        <div className="service-card">
          <h3>Wind Energy</h3>
          <p>Use wind turbines to transform wind into energy and contribute to a pollution-free world.</p>
        </div>
        <div className="service-card">
          <h3>Hydraulic Energy</h3>
          <p>Make the most of water resources to generate renewable electricity and reduce environmental impact.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
