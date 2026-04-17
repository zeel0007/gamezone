import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import BookModal from './BookModal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuActive(!menuActive);
    const closeMenu = () => setMenuActive(false);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <i className="fa-solid fa-gamepad"></i> KING OF GAMES
                    </Link>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <i className={`fa-solid ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                    <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
                        <li><NavLink to="/centers" onClick={closeMenu}>Centers</NavLink></li>
                        <li><NavLink to="/games" onClick={closeMenu}>Games</NavLink></li>
                        <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
                        <li>
                            <button
                                onClick={() => { setModalOpen(true); closeMenu(); }}
                                className="btn btn-primary"
                                style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', background: 'var(--primary-color)' }}
                            >
                                Book Now
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <BookModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Navbar;
