import React from "react";
import Countdown from "react-countdown";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Wedding.css";
import CouplePhoto from "../assets/couple-photo.jpg"; // Replace with your couple photo path

const Wedding = () => {
  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="countdown-container">
      {[
        { label: "Days", value: days },
        { label: "Hrs", value: hours },
        { label: "Mins", value: minutes },
        { label: "Secs", value: seconds },
      ].map((item, index) => (
        <div className="countdown-item" key={index}>
          <div className="countdown-circle">
            <span className="countdown-value">{item.value}</span>
            <p className="countdown-label">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="wedding-container">
      {/* Couple Image Section */}
      <div className="photo-section">
        <div className="photo-wrapper">
          <img src={CouplePhoto} alt="Wedding Couple" className="couple-photo" />
        </div>
      </div>

      {/* Countdown Section */}
      <div className="countdown-section">
        <h1>Our Wedding Countdown</h1>
        <Countdown date={new Date("2025-12-25T00:00:00")} renderer={renderer} />
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <h2>Meet the Couple</h2>
        <div className="profile-wrapper">
          {/* Partner 1 */}
          <div className="profile">
            <img src={CouplePhoto} alt="Alex" className="profile-photo" />
            <h3>Alex</h3>
            <p>
              Alex is an adventurous spirit, excited to embark on this wonderful
              journey with Taylor!
            </p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="profile">
            <img src={CouplePhoto} alt="Taylor" className="profile-photo" />
            <h3>Taylor</h3>
            <p>
              Taylor is a creative soul, eager to celebrate this beautiful day with
              loved ones and Alex!
            </p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
