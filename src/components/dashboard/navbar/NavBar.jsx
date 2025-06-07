import React from 'react';
import './NavBar.css';

const NavBar = ({ className }) => {
  const username = "John Doe"; 

  return (
    <div className={`DasboardNavbar ${className || ''}`}>
      <h2>Welcome, {username}</h2>
    </div>
  );
};

export default NavBar;
