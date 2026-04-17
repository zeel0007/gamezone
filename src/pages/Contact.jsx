import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been received! Our support team will respond shortly.');
        e.target.reset();
    };

    return (
        <main>
            <style>{`
                .contact-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
                .contact-form { background: var(--bg-card); padding: 40px; border-radius: 15px; border: 1px solid rgba(255,0,127,0.2); }
                .contact-info-wrap { display: flex; flex-direction: column; gap: 30px; }
                .info-card { display: flex; gap: 20px; background: rgba(255,255,255,0.02); padding: 30px; border-radius: 15px; }
                .info-card i { font-size: 2rem; color: var(--secondary-color); }
                .map-embed { width: 100%; height: 300px; border-radius: 15px; border: 1px solid rgba(0,240,255,0.2); }
                @media(max-width: 768px) { .contact-wrap { grid-template-columns: 1fr; } }
            `}</style>

            <header className="py-5 text-center reveal" style={{ paddingTop: '150px' }}>
                <div className="container"><h1>Get In <span className="text-gradient">Touch</span></h1></div>
            </header>

            <section className="py-5 mb-4">
                <div className="container contact-wrap">
                    <div className="contact-form reveal">
                        <h2 style={{ marginBottom: '30px' }}>Send a <span className="text-gradient">Message</span></h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group"><label>Your Name</label><input type="text" className="form-control" required /></div>
                            <div className="form-group"><label>Your Email</label><input type="email" className="form-control" required /></div>
                            <div className="form-group"><label>Message</label><textarea className="form-control" rows="5" required></textarea></div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info-wrap reveal" style={{ transitionDelay: '0.1s' }}>
                        <div className="info-card">
                            <i className="fa-solid fa-location-dot"></i>
                            <div><h3>Headquarters</h3><p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>123 Neon Avenue, Downtown District<br />New York, NY 10001</p></div>
                        </div>
                        <div className="info-card">
                            <i className="fa-solid fa-phone"></i>
                            <div><h3>Phone Number</h3><p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>+1 (555) 123-4567<br />Support: Mon-Sun 9AM - 10PM</p></div>
                        </div>
                        <iframe className="map-embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279986985!2d-74.1444878!3d40.6976637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1689025000000!5m2!1sen!2sus" allowFullScreen="" loading="lazy" title="Location Map"></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
