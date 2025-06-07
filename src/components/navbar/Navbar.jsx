import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import MenuModal from './MenuModal';

const Navbar = ({ isSidebarVisible }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hide scrollbar when modal is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navbarStyle = {
    width: isSidebarVisible ? 'calc(100% - 220px)' : '100%',
    left: isSidebarVisible ? '220px' : '0',
  };

  return (
    <>
      <header className="navbar" style={navbarStyle}>
        <div className="logo-and-nav">
          <h1><a href="/">SOCIOLOJI</a></h1>
        </div>

        {/* Hamburger Icon */}
        <div ref={hamburgerRef} className="hamburger-icon" onClick={toggleMenu}>
          <FaBars size={24} />
        </div>
      </header>

      {/* Menu Modal */}
      {menuOpen && (
        <MenuModal menuRef={menuRef} onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
