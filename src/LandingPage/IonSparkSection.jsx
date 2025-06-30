import './IonSparkSection.css';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export default function IonSparkSection() {
  return (
    <section className="ionspark-section">
      <div className="ionspark-horizontal">

        {/* Logo y nombre */}
        <div className="brand-block">
          <img src="/Logo.svg" alt="IonSpark logo" className="logo" />
          <div className="brand-text">
            <h1>IonSpark</h1>
            <p className="subtitle">renewable energies</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="social-links">
          <div className="social-row"><FaInstagram /> <span>@ion_spark</span></div>
          <div className="social-row"><FaFacebookF /> <span>/IonSparkEnergy</span></div>
          <div className="social-row"><FaEnvelope /> <span>ion.spark12@gmail.com</span></div>
        </div>

        {/* Menú en dos columnas */}
        <div className="middle-block">
          <ul className="nav-links">
            <li>Contact us</li>
            <li>Quote price</li>
            <li>Companies supplying</li>
          </ul>
          <ul className="nav-links">
            <li>Services</li>
            <li>About us</li>
            <li>Energies</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
