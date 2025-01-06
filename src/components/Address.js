import React, { useEffect } from 'react';
import './Address.css';
import { Clock, MapPin } from 'lucide-react';

const Address = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="venue-container">
      

      <main className="content">
        <h1 className="fade-up title-script">When & Where</h1>
        <h2 className="fade-up title-main">Our Wedding Programs</h2>
        
        <div className="details fade-up">
          <div className="time-details">
            <Clock size={24} />
            <p>Monday, 12 Apr. 2024, 2.00 PM – 11.00 PM</p>
          </div>
          
          <div className="location-details">
            <MapPin size={24} />
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Address;