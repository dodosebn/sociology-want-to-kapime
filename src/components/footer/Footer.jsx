import React from 'react';
import './Footer.css'
import Tags from '../widgets/Tags';
import LetsConnect from '../widgets/LetsConnect';
import Subscribe from '../widgets/Subscribe';

const Footer = () => {
  return (
    <div className="footer-container">
    {/* ===========widget one========== */}
      <div className="footer-widget">
       <Tags/>
      </div>

      {/* widget two---- */}
      <div className="footer-widget">
        <LetsConnect/>
      </div>

  
    {/* =============widget three============ */}
      <div className="footer-widget">
        <Subscribe/>
      </div>
    </div>
  );
};

export default Footer;
