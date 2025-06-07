import React from 'react';
import './Navbar.css'; 

const MenuModal = ({ menuRef, onClose }) => {
  return (
    <div className="menu-modal-overlay">
      <div className="menu-modal-content" ref={menuRef}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="menu-content-inner">
        <h2>About Socioloji</h2>
        <p>
          Socioloji is a brand focused on connecting modern sociology with everyday lifestyle.
          We believe that understanding human behavior empowers individuals and communities.
          Our mission is to bridge the gap between people, technology, and culture.
        </p>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
