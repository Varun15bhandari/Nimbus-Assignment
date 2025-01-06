// WeddingRSVPForm.jsx
import React, { useState } from 'react';
import './Attendence.css';

const FloatingElements = () => {
  return (
    <div className="floating-elements">
      {[...Array(8)].map((_, i) => (
        <div key={`flower-${i}`} className={`floating-flower flower-${i}`}>
          <div className="petal-1"></div>
          <div className="petal-2"></div>
          <div className="petal-3"></div>
          <div className="petal-4"></div>
          <div className="petal-5"></div>
        </div>
      ))}
      {[...Array(6)].map((_, i) => (
        <div key={`butterfly-${i}`} className={`butterfly butterfly-${i}`}>
          <div className="wing-left"></div>
          <div className="wing-right"></div>
        </div>
      ))}
    </div>
  );
};

const Attendence = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="wedding-container">
      <FloatingElements />
      
      <div className="form-wrapper">
        <div className="form-content">
          <h1 className="title">Together with our families</h1>
          <h2 className="names">James & Sarah</h2>
          <p className="date">August 15th, 2024</p>
          
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="form-input"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className="form-row">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="form-input"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className="form-row radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="attending"
                  onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                />
                <span className="radio-custom"></span>
                <span>Joyfully Accept</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="declined"
                  onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                />
                <span className="radio-custom"></span>
                <span>Regretfully Decline</span>
              </label>
            </div>

            <div className="form-row">
              <input
                type="number"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="form-input"
                min="1"
                max="5"
              />
              <div className="input-border"></div>
            </div>

            <div className="form-row">
              <textarea
                placeholder="Share your message with us..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="form-textarea"
              ></textarea>
              <div className="input-border"></div>
            </div>

            <button type="submit" className="submit-button">
              <span>Send RSVP</span>
              <div className="button-shine"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Attendence;