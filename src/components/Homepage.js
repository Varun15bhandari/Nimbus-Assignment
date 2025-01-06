import React from 'react';
import './Homepage.css';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
// import  tulipImage from '../assets/tulip2.jpg';

const Homepage = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
      {/* <img src="../assets/tulip.jpg" alt="Tulip" /> */}
        <span className="logo-text">Sukun.</span>
      </div>
      
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#pages">PAGES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#shop">SHOP</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="nav-icons">
        <button className="icon-btn">
          <FiSearch />
        </button>
        <button className="icon-btn cart-btn">
          <FiShoppingCart />
          <span className="cart-count">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Homepage;