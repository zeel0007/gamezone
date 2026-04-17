import React from 'react';

const About = () => {
    return (
        <main>
            {/* Page Header */}
            <header className="page-header reveal" style={{
                padding: '150px 0 80px',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, var(--bg-darker), var(--bg-dark))',
                borderBottom: '1px solid rgba(255, 0, 127, 0.2)'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}><span className="text-gradient">About Us</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Discover the story behind the kingdom of entertainment.</p>
                </div>
            </header>

            {/* Main About Section */}
            <section className="py-5">
                <div className="container reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
                    <div className="about-text">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>The Ultimate <span className="text-gradient">Gaming Destination</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.1rem' }}>
                            Founded in 2020, King of Games started as a small dream to bring premium, high-energy entertainment to the youth and families. Today, we stand as one of the largest chains of modern indoor entertainment and gaming centers.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.1rem' }}>
                            We combine cutting-edge technology, vibrant neon aesthetics, and an adrenaline-pumping atmosphere to create an unforgettable experience. From competitive bowling and high-flying trampolines to immersive virtual reality and classic retro arcades, we have something for every type of gamer.
                        </p>
                    </div>
                    <div className="about-image" style={{ borderRadius: '20px', overflow: 'hidden', border: '2px solid var(--secondary-color)', boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)' }}>
                        <img src="/GameZone/assets/images/hero.png" alt="About King of Games" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision py-5" style={{ background: 'var(--bg-darker)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div className="mv-card reveal" style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255,0,127,0.1)', textAlign: 'center' }}>
                        <i className="fa-solid fa-bullseye" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Our Mission</h3>
                        <p style={{ color: 'var(--text-muted)' }}>To provide a world-class entertainment facility that blends physical activity, immersive gaming, and social interaction in a safe, vibrant, and energetic environment.</p>
                    </div>
                    <div className="mv-card reveal" style={{ transitionDelay: '0.1s', background: 'var(--bg-card)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255,0,127,0.1)', textAlign: 'center' }}>
                        <i className="fa-solid fa-eye" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Our Vision</h3>
                        <p style={{ color: 'var(--text-muted)' }}>To be the globally recognized leader in futuristic indoor entertainment zones, constantly innovating and redefining what it means to have fun.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us py-5">
                <div className="container">
                    <div className="text-center reveal mb-4">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Why <span className="text-gradient">Choose Us</span></h2>
                        <p style={{ color: 'var(--text-muted)' }}>What makes King of Games the ultimate choice.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>

                        <div className="feature-box reveal" style={{ textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <i className="fa-solid fa-vr-cardboard" style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '15px' }}></i>
                            <h4>Latest Tech</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>We use only state-of-the-art gaming equipment and the newest VR technology.</p>
                        </div>

                        <div className="feature-box reveal" style={{ transitionDelay: '0.1s', textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <i className="fa-solid fa-shield-halved" style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '15px' }}></i>
                            <h4>Safe Environment</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>Highest safety standards maintained across all our trampoline and play areas.</p>
                        </div>

                        <div className="feature-box reveal" style={{ transitionDelay: '0.2s', textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <i className="fa-solid fa-bolt" style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '15px' }}></i>
                            <h4>Energetic Vibe</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>Immersive neon lighting and great music create the perfect gaming atmosphere.</p>
                        </div>

                        <div className="feature-box reveal" style={{ transitionDelay: '0.3s', textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <i className="fa-solid fa-pizza-slice" style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '15px' }}></i>
                            <h4>Food & Drinks</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>Refuel with our wide selection of delicious snacks and refreshing beverages.</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
