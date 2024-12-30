import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/book-appointment" element={<BookAppointment />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;