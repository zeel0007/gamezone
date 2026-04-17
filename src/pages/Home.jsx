import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero" style={{
                height: '100vh',
                background: `linear-gradient(rgba(10,10,10,0.5), rgba(10,10,10,0.9)), url('/assets/images/hero.png') center/cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                paddingTop: '80px'
            }}>
                <div className="container hero-content reveal">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', textShadow: '0 0 20px var(--primary-color)' }}>
                        WELCOME TO <span className="text-gradient">KING OF GAMES</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--text-light)', maxWidth: '600px', marginInline: 'auto' }}>
                        Step into the ultimate entertainment zone! From neon-lit bowling alleys to high-tech VR arenas, experience gaming like never before.
                    </p>
                    <div className="hero-btns" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/games" className="btn btn-primary">Explore Games</Link>
                        <Link to="/enquiry" className="btn btn-secondary">Quick Book</Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section py-5" style={{ background: 'var(--bg-dark)' }}>
                <div className="container reveal">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
                        <div className="intro-image">
                            <img src="/assets/images/arcade.png" alt="Arcade Zone" style={{ borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', border: '2px solid var(--accent-color)' }} />
                        </div>
                        <div className="intro-text">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Level Up Your <span className="text-gradient">Entertainment</span></h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                King of Games is not just a game zone; it's a completely immersive world of fun. We offer state-of-the-art facilities with the latest gaming technology, ensuring an unforgettable experience for families, friends, and gamers of all ages.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                Whether you're aiming for a strike, dodging obstacles in VR, or bouncing in our trampoline arena, we are the kingdom where boredom doesn't exist.
                            </p>
                            <Link to="/about" className="btn btn-secondary mt-4">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Activities Section */}
            <section className="activities-section py-5" style={{ background: 'var(--bg-darker)' }}>
                <div className="container">
                    <div className="section-header reveal mb-4 text-center">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our <span className="text-gradient">Top Attractions</span></h2>
                        <p>Discover the most loved games in our kingdom.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                        <div className="activity-card reveal" style={{ background: 'var(--bg-card)', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src="/assets/images/bowling.png" alt="Neon Bowling" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--secondary-color)' }} />
                            <div className="activity-info" style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Neon Bowling</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>Experience bowling in a whole new light with our glowing fluorescent lanes and energetic vibe.</p>
                                <Link to="/games" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>View Details <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="activity-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--bg-card)', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src="/assets/images/trampoline.png" alt="Trampoline Park" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--secondary-color)' }} />
                            <div className="activity-info" style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Trampoline Park</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>Defy gravity in our huge indoor trampoline arena complete with neon lighting and jump activities.</p>
                                <Link to="/games" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>View Details <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="activity-card reveal" style={{ transitionDelay: '0.2s', background: 'var(--bg-card)', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src="/assets/images/arcade.png" alt="Retro Arcade" style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--secondary-color)' }} />
                            <div className="activity-info" style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Arcade Zone</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>Challenge yourself on classic and modern arcade machines packed with high-score thrills.</p>
                                <Link to="/games" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>View Details <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials py-5" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <div className="section-header reveal mb-4 text-center">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>What <span className="text-gradient">Players Say</span></h2>
                        <p>Real reviews from our awesome visitors.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                        <div className="testimonial-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', borderLeft: '4px solid var(--secondary-color)', position: 'relative' }}>
                            <i className="fa-solid fa-quote-right" style={{ color: 'var(--primary-color)', fontSize: '2rem', position: 'absolute', top: '-15px', right: '20px', opacity: 0.5 }}></i>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-light)' }}>
                                "Absolutely mind-blowing neon aesthetics! The bowling alley felt straight out of a sci-fi movie."
                            </p>
                            <div className="author-info">
                                <h4 style={{ color: 'var(--secondary-color)', margin: 0 }}>- Alex Johnson</h4>
                                <span style={{ color: 'gold' }}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                            </div>
                        </div>

                        <div className="testimonial-card reveal" style={{ transitionDelay: '0.1s', background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', borderLeft: '4px solid var(--secondary-color)', position: 'relative' }}>
                            <i className="fa-solid fa-quote-right" style={{ color: 'var(--primary-color)', fontSize: '2rem', position: 'absolute', top: '-15px', right: '20px', opacity: 0.5 }}></i>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-light)' }}>
                                "The arcade selection is insane and the kids completely lost themselves in the trampoline park."
                            </p>
                            <div className="author-info">
                                <h4 style={{ color: 'var(--secondary-color)', margin: 0 }}>- Sarah Martinez</h4>
                                <span style={{ color: 'gold' }}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                            </div>
                        </div>

                        <div className="testimonial-card reveal" style={{ transitionDelay: '0.2s', background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', borderLeft: '4px solid var(--secondary-color)', position: 'relative' }}>
                            <i className="fa-solid fa-quote-right" style={{ color: 'var(--primary-color)', fontSize: '2rem', position: 'absolute', top: '-15px', right: '20px', opacity: 0.5 }}></i>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-light)' }}>
                                "The VR setup they have is world-class. It's clean, modern, and the energetic vibe keeps you hyped."
                            </p>
                            <div className="author-info">
                                <h4 style={{ color: 'var(--secondary-color)', margin: 0 }}>- Jake T.</h4>
                                <span style={{ color: 'gold' }}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
