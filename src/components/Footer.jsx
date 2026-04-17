import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="footer-col">
                    <h3><i className="fa-solid fa-gamepad" style={{ color: 'var(--primary-color)' }}></i> King of Games</h3>
                    <p>The ultimate destination for premium gaming, entertainment, and unforgettable experiences.</p>
                    <div className="social-links">
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <Link to="/about">About Us</Link>
                        <Link to="/games">All Games</Link>
                        <Link to="/centers">Our Locations</Link>
                        <Link to="/gallery">Photo Gallery</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Support</h3>
                    <div className="footer-links">
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/enquiry">Book Event</Link>
                        <Link to="/contact">FAQ</Link>
                        <Link to="/contact">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} King of Games. Built for Entertainment.</p>
            </div>
        </footer>
    );
};

export default Footer;
