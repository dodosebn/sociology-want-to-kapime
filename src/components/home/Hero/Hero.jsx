import React from 'react';
import './Hero.css';
import headerImage from '../../../assets/images/header-image-home.webp'; 

const Hero = () => {
  return (
    <header className="hero-section-container">
      <div className="hero-box">
          <img src={headerImage} alt="header" className="hero-image" />
      </div>
    </header>
  );
};

export default Hero;
