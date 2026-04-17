import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target.className.includes('modal-overlay')) {
            onClose();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
        navigate('/enquiry');
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleBackdropClick} style={{ opacity: isOpen ? 1 : 0, visibility: isOpen ? 'visible' : 'hidden' }}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <h2 style={{ marginBottom: '20px' }}>Quick <span className="text-gradient">Book</span></h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-group">
                        <label>Interest</label>
                        <select className="form-control">
                            <option>General Entry</option>
                            <option>Bowling Lanes</option>
                            <option>Birthday Party</option>
                            <option>VR Session</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Proceed to Booking</button>
                </form>
            </div>
        </div>
    );
};

export default BookModal;
