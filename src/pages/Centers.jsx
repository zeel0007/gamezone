import React from 'react';
import { Link } from 'react-router-dom';

const Centers = () => {
    return (
        <main>
            <header className="page-header reveal" style={{ padding: '150px 0 80px', textAlign: 'center', background: 'var(--bg-darker)', borderBottom: '1px solid rgba(255, 0, 127, 0.2)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Our <span className="text-gradient">Locations</span></h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Find a King of Games center near you.</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    <div className="center-card reveal" style={{ background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <img src="/assets/images/hero.png" alt="Downtown Center" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="center-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--text-light)' }}>Downtown Megaplex</h2>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-location-dot" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>123 Neon Avenue, Downtown District<br />New York, NY 10001</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-phone" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-clock" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>Mon-Sun: 10:00 AM - 1:00 AM</p>
                            </div>
                            <Link to="/enquiry" className="btn btn-secondary mt-4" style={{ width: '100%', textAlign: 'center' }}>Book at Downtown</Link>
                        </div>
                    </div>

                    <div className="center-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <img src="/assets/images/arcade.png" alt="Westside Center" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="center-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--text-light)' }}>Westside Arcade</h2>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-location-dot" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>88 Cyber Highway, West Plaza<br />Los Angeles, CA 90028</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-phone" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>+1 (555) 987-6543</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-clock" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>Mon-Sun: 11:00 AM - 12:00 AM</p>
                            </div>
                            <Link to="/enquiry" className="btn btn-secondary mt-4" style={{ width: '100%', textAlign: 'center' }}>Book at Westside</Link>
                        </div>
                    </div>

                    <div className="center-card reveal" style={{ transitionDelay: '0.2s', background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <img src="/assets/images/bowling.png" alt="Northside Arena" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="center-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--text-light)' }}>Northside Arena</h2>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-location-dot" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>450 Retro Arcade Blvd, North Point<br />Chicago, IL 60611</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-phone" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>+1 (555) 456-7890</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                <i className="fa-solid fa-clock" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                <p>Mon-Sun: 9:00 AM - 11:00 PM</p>
                            </div>
                            <Link to="/enquiry" className="btn btn-secondary mt-4" style={{ width: '100%', textAlign: 'center' }}>Book at Northside</Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Centers;
