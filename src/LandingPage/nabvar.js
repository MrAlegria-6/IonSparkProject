import { Link } from "react-router-dom";
import "../Styles/Landipage/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
