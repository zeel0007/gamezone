import React from 'react';
import { Link } from 'react-router-dom';

const Centers = () => {
    // Array mappings for elegant list rendering
    const locations = [
        {
            name: "Kumar Pacific Mall",
            address: "Shankar sheth road, Pune",
            phone: "+91 8888201888",
            image: "/GameZone/assets/images/hero.png"
        },
        {
            name: "Inorbit Mall",
            address: "Nagar road, Pune",
            phone: "+91 8600997587",
            image: "/GameZone/assets/images/arcade.png"
        },
        {
            name: "Manjeera Mall",
            address: "Kukutpally, Hyderabad",
            phone: "+91 8888201888",
            image: "/GameZone/assets/images/bowling.png"
        },
        {
            name: "Neptune Magnet Mall",
            address: "Bhandup (W), Mumbai",
            phone: "+91 8600997587",
            image: "/GameZone/assets/images/hero.png"
        }
    ];

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
                    {locations.map((loc, index) => (
                        <div key={index} className="center-card reveal" style={{ transitionDelay: `${(index % 3) * 0.1}s`, background: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src={loc.image} alt={loc.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '3px solid var(--primary-color)' }} />
                            <div className="center-info" style={{ padding: '30px' }}>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--text-light)' }}>{loc.name}</h2>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                    <p>{loc.address}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                    <i className="fa-solid fa-phone" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                    <p>{loc.phone}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px', color: 'var(--text-muted)' }}>
                                    <i className="fa-solid fa-clock" style={{ color: 'var(--secondary-color)', marginTop: '5px', fontSize: '1.2rem' }}></i>
                                    <p>Mon-Sun: 11:00 AM - 11:00 PM</p>
                                </div>
                                <Link to="/enquiry" className="btn btn-secondary mt-4" style={{ width: '100%', textAlign: 'center' }}>Book Here</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Centers;
