import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
    return (
        <main>
            <header className="page-header reveal" style={{
                padding: '150px 0 80px',
                textAlign: 'center',
                background: `linear-gradient(to bottom, var(--bg-dark), var(--bg-darker)), url('/GameZone/assets/images/arcade.png') center/cover`,
                backgroundBlendMode: 'overlay'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', textShadow: '0 0 15px var(--secondary-color)' }}>Our <span className="text-gradient">Gaming Worlds</span></h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Pick your poison. It's time to play.</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>

                    <div className="game-card reveal" style={{ background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
                        <img src="/GameZone/assets/images/bowling.png" alt="Neon Bowling" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="game-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--text-light)' }}>Neon Bowling</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.05rem' }}>Strike down the pins in our futuristic, neon-lit bowling lanes equipped with automatic scoring systems and comfortable lounge seating.</p>
                            <div className="game-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <span className="price" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', fontWeight: '700', color: 'var(--secondary-color)' }}>$15 / game</span>
                                <Link to="/enquiry" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
                        <img src="/GameZone/assets/images/trampoline.png" alt="Trampoline Park" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="game-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--text-light)' }}>Trampoline Park</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.05rem' }}>Bounce high in our massive interconnected indoor trampoline space. Includes dodgeball courts and foam pits for ultimate fun.</p>
                            <div className="game-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <span className="price" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', fontWeight: '700', color: 'var(--secondary-color)' }}>$20 / hour</span>
                                <Link to="/enquiry" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card reveal" style={{ transitionDelay: '0.2s', background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
                        <img src="/GameZone/assets/images/arcade.png" alt="Arcade Games" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="game-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--text-light)' }}>Arcade Games</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.05rem' }}>Relive the classics or try modern action-packed titles in our huge arcade zone. Earn tickets to win amazing prizes!</p>
                            <div className="game-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <span className="price" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', fontWeight: '700', color: 'var(--secondary-color)' }}>From $1 / play</span>
                                <Link to="/enquiry" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Get Arcade Card</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card reveal" style={{ background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
                        <img src="/GameZone/assets/images/arcade.png" alt="VR Games" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="game-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--text-light)' }}>VR Arena</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.05rem' }}>Put on a headset and step into another dimension. Explore fantastical worlds or battle zombies in our state-of-the-art VR pods.</p>
                            <div className="game-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <span className="price" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', fontWeight: '700', color: 'var(--secondary-color)' }}>$25 / 30 mins</span>
                                <Link to="/enquiry" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
                        <img src="/GameZone/assets/images/trampoline.png" alt="Kids Play Zone" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                        <div className="game-info" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--text-light)' }}>Kids Play Zone</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.05rem' }}>A completely safe, glowing environment for the little ones! Slides, ball pits, and padded obstacle courses to tire them out safely.</p>
                            <div className="game-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <span className="price" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', fontWeight: '700', color: 'var(--secondary-color)' }}>$12 / hour</span>
                                <Link to="/enquiry" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Book Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Games;
