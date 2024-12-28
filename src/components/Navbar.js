import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">UCA Counseling</Link>
            </div>
            <div className="navbar-links">
                <div className="nav-left">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    {isAuthenticated && (
                        <Link to="/book">Book Appointment</Link>
                    )}
                </div>
                <div className="nav-right">
                    {isAuthenticated ? (
                        <>
                            <Link to="/manage">My Appointments</Link>
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="login-btn">Login</Link>
                            <Link to="/register" className="register-btn">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;