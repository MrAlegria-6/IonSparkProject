import React from "react";
import "../LandingPage/EolicSection.css";

const EolicSection = () => {
  return (
    <section className="eolic-wrapper">
      {/* Imagen decorativa sobrepuesta */}
      <div className="eolic-floater">
        <img
          src="/Eolic.png"
          alt="Eolic Turbine"
          className="eolic-floating-image"
        />
      </div>

      {/* Card principal */}
      <div className="eolic-card">
        <div className="eolic-content">
          <div className="eolic-title">
            <h1>
              Our Goal is To <br />
              Change The Modern <br />
              World Become Nature Friendly
            </h1>
          </div>

          <div className="eolic-features-row">
            <div className="eolic-feature">
              <div className="line"></div>
              <div>
                <h3>Our Solution</h3>
                <p>
                  We offer you the best options for renewable energies to save
                  money and — most importantly — help the environment.
                </p>
              </div>
            </div>

            <div className="eolic-feature">
              <div className="line"></div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  We aim to inspire a shift in energy culture, empowering
                  communities to choose sustainability and care for the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EolicSection;