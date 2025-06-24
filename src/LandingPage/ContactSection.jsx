import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section">
      {/* Imagen circular */}
      <div className="image-wrapper">
        <img src="/Drone.jpg" alt="Contacto visual" />
      </div>

      {/* Formulario de contacto */}
      <form className="contact-form">
        <h2>Contact Us</h2>

        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="email" placeholder="Gmail" required />
        <input type="text" placeholder="Company" />
        <textarea placeholder="Message" rows="4"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
