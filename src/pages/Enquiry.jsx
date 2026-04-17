import React from 'react';

const Enquiry = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your booking enquiry has been submitted! Our team will contact you shortly to confirm the reservation.');
        e.target.reset();
    };

    return (
        <main>
            <style>{`
                .enquiry-wrap { max-width: 800px; margin: 0 auto; background: var(--bg-card); padding: 50px; border-radius: 20px; border: 1px solid rgba(255,0,127,0.3); box-shadow: 0 0 40px rgba(0,0,0,0.5); }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                @media(max-width: 768px){ .form-row { grid-template-columns: 1fr; } .enquiry-wrap { padding: 30px; } }
            `}</style>

            <header className="page-header reveal" style={{ padding: '150px 0 60px', textAlign: 'center' }}>
                <div className="container"><h1>Book Your <span className="text-gradient">Experience</span></h1></div>
            </header>

            <section className="py-5 mb-4">
                <div className="container">
                    <div className="enquiry-wrap reveal">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group"><label>Full Name</label><input type="text" className="form-control" required /></div>
                                <div className="form-group"><label>Phone Number</label><input type="tel" className="form-control" required /></div>
                            </div>
                            <div className="form-group"><label>Email Address</label><input type="email" className="form-control" required /></div>

                            <div className="form-row">
                                <div className="form-group"><label>Number of People</label><input type="number" className="form-control" min="1" max="50" required /></div>
                                <div className="form-group">
                                    <label>Activity Selection</label>
                                    <select className="form-control" required defaultValue="">
                                        <option value="" disabled>Select an activity</option>
                                        <option value="entry">General Entry (All Access)</option>
                                        <option value="bowling">Neon Bowling Lane</option>
                                        <option value="trampoline">Trampoline Session</option>
                                        <option value="vr">VR Arena</option>
                                        <option value="party">Birthday Party Package</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group"><label>Preferred Date</label><input type="date" className="form-control" required /></div>
                                <div className="form-group"><label>Preferred Time</label><input type="time" className="form-control" required /></div>
                            </div>

                            <div className="form-group"><label>Special Requests (Optional)</label><textarea className="form-control" rows="3"></textarea></div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px', fontSize: '1.2rem', padding: '15px' }}>Confirm Booking Enquiry</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Enquiry;
