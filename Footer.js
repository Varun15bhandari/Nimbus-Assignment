import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import image from '../assets/couple-photo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#rsvp">RSVP</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#quote">Get Quote</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section center-section">
          <div className="logo">
            {/* <img src={image} alt="Sukun" /> */}
            <h1>Sukun</h1>
          </div>
          <p className="tagline">We can't wait to see all of our beloved friends<br />and relatives at our wedding.</p>
          <div className="social-icons">
            <a href="#facebook" className="social-icon"><FaFacebook /></a>
            <a href="#twitter" className="social-icon"><FaTwitter /></a>
            <a href="#instagram" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>sukun@gmail.com</li>
            <li>+1 (555) 123-4567</li>
            <li>4517 Washington Ave.</li>
            <li>Manchester, Kentucky 39495</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Sukun. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;