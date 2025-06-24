import './IonSparkSection.css';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export default function IonSparkSection() {
  return (
    <section className="ionspark-section">
      <div className="ionspark-container">

        {/* Logo y título */}
        <div className="brand-block">
          <img src="/Logo.svg" alt="IonSpark logo" className="logo" />
          <div className="brand-text">
            <h1>IonSpark</h1>
            <p className="subtitle">renewable energies</p>
          </div>
        </div>

        {/* Redes sociales + enlaces */}
        <div className="middle-block">
          <div className="middle-inner">
            {/* Redes sociales */}
            <div className="social-links">
              <div className="social-row"><FaInstagram /> <span>@ion_spark</span></div>
              <div className="social-row"><FaFacebookF /> <span>/IonSparkEnergy</span></div>
              <div className="social-row"><FaEnvelope /> <span>ion.spark12@gmail.com</span></div>
            </div>

            {/* Menú de navegación */}
            <ul className="nav-links">
              <li>Contact us</li>
              <li>Quote price</li>
              <li>Companies supplying</li>
              <li>Services</li>
              <li>About us</li>
              <li>Energies</li>
            </ul>
          </div>
        </div>

        {/* Mapa */}
        <div className="map-block">
          <img src="/Map.png" alt="Mapa El Salvador" className="mapa" />
        </div>

      </div>
    </section>
  );
}
