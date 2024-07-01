import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-section">
      <div className="content">
        <div className="about-info">
          <h2 className="info-title">About Us</h2>
          <p className="info-desc">
          Welcome to our camera shop! We are dedicated to providing the best selection of cameras
            and photography equipment. Our mission is to deliver high-quality products and excellent
            customer service to photographers of all levels.
          </p>
          <p className="info-desc">
          Our team is passionate about photography and has a deep knowledge of cameras and related
            accessories. From advanced DSLRs to compact point-and-shoot cameras, we aim to offer
            cutting-edge technology and the latest models in the market.
          </p>
          <h4 className="info-dir">Our Values</h4>
          <ul className="info-list">
            <li><strong>Quality:</strong> We prioritize offering cameras known for their quality and performance.</li>
            <li><strong>Variety:</strong> Our catalog includes a diverse range of brands and models to cater to every photographer's needs.</li>
            <li><strong>Customer Satisfaction:</strong> Ensuring our customers are satisfied with their purchase is our top priority.</li>
          </ul>
          </div>
        </div>
      </div>
  );
};

export default About;
