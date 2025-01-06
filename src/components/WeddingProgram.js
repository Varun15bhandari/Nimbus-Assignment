import React from 'react';
import './WeddingProgram.css';

const WeddingProgram = () => {
  const events = [
    { time: '2:00 PM', icon: '👰', title: 'Wedding Bliss' },
    { time: '3:00 PM', icon: '💍', title: 'Ceremony' },
    { time: '5:00 PM', icon: '📸', title: 'Party Photos' },
    { time: '7:00 PM', icon: '🍽️', title: 'Dinner' },
    { time: '8:00 PM', icon: '🎂', title: 'Cake Cutting' }
  ];

  return (
    <div className="wedding-container">
      <div className="program-card">
        <h1>Our Wedding Program</h1>
        <div className="wedding-details">
          <p>Monday, 12 Apr, 2024, 2:00 PM - 11:00 PM</p>
          <p>4517 Washington Ave Manchester, Kentucky 39495</p>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-event">
              <div className="time">{event.time}</div>
              <div className="icon-container">
                <span className="timeline-dot"></span>
                <span className="event-icon">{event.icon}</span>
              </div>
              <div className="event-title">{event.title}</div>
            </div>
          ))}
        </div>

        <div className="rose top-left">🌹</div>
        <div className="rose bottom-right">🌹</div>
      </div>
    </div>
  );
};

export default WeddingProgram;