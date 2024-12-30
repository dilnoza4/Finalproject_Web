import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">UCA Counseling</Link>
            </div>
            <div className="navbar-links">
                <div className="nav-left">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/book-appointment">Book Appointment</Link>
                </div>
                <div className="nav-right">
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
