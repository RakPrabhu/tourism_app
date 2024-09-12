import React from 'react';
import {
    BrowserRouter as Router,
    Routes, Route as RouteElement,
    Link
} from 'react-router-dom';
import {
    Navbar, Nav, Carousel
} from 'react-bootstrap';
import DestinationList from './components/DestinationList';
import DestinationDetail from './components/DestinationDetail';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience'; 
// Import the custom CSS file
import './App.css';
import Gallery from './components/Gallery';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar className="custom-navbar" expand="lg">
                    <Navbar.Brand className="brand-heading">
                        INCREDIBLE INDIA
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                            <Link to="/experience" className="nav-link">
                                Experience
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

       
                {/* Content of your app */}
                <Routes>
                    <RouteElement path="/" element={<DestinationList />} />
                    <RouteElement path="/destination/:id" element={<DestinationDetail />} />
                    <RouteElement path="/contact" element={<ContactForm />} />
                    <RouteElement path="/experience" element={<Gallery />} /> 
                </Routes>

                {/* Footer */}
                <div className="custom-footer">
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            <li><Link to="/travel" className="footer-link">Travel</Link></li>
                            <li><Link to="/destinations" className="footer-link">Destinations</Link></li>
                            <li><Link to="/experience" className="footer-link">Experience</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Connect with us</h3>
                        <ul className="social-links">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact us</h3>
                        <p>Email: contact@incredibleindia.com</p>
                        <p>Phone: +91 123 456 7890</p>
                    </div>
                    <div className="footer-section">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter for updates and offers.</p>
                        <form>
                            <input type="email" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </Router>
    );
}
export default App;