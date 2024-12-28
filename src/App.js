import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/book-appointment"
                        element={
                            <ProtectedRoute>
                                <BookAppointment />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;