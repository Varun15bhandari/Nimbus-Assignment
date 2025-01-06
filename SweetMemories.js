import React from "react";
import { motion } from "framer-motion";
import "./SweetMemories.css";

// Import images
import image1 from "../assets/Wedding1.jpg";
import image2 from "../assets/Wedding2.jpg";
import image3 from "../assets/Wedding3.jpg";
import image4 from "../assets/Wedding4.jpg";
import image5 from "../assets/Wedding5.jpg";
import image6 from "../assets/Wedding6.jpg";

const SweetMemories = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="sweet-memories">
      <div className="heading-section">
        <h1 className="heading">Sweet Memories</h1>
        <p className="subheading">Our Captured Moments</p>
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-container"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={image} alt={`Memory ${index + 1}`} className="gallery-image" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SweetMemories;
