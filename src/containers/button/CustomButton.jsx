import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './CustomButton.css';

const CustomButton = ({
  title = 'Click Me',
  icon = null,
  backgroundColor = '#FEC3D2',
  textColor = '#000',
  borderRadius = '30px',
  borderColor = '#000',
  onClick = () => {},
  className = '',
  buttonClassName = '',
  centerContent = false,
  style = {},
  link = null, 
  external = false, 
}) => {
  const buttonRef = useRef(null);



  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const bubble = buttonRef.current.querySelector('.bubble');
    const ring = buttonRef.current.querySelector('.ring');
    const borderWrapper = buttonRef.current.querySelector('.border-wrapper');
  
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
  
    // Animate border toward the cursor
    if (borderWrapper) {
      borderWrapper.style.transform = `translate(${x - rect.width/2}px, ${y - rect.height/2}px) scale(0.1)`;
      borderWrapper.style.opacity = '0';
    }
  };
  
  const handleEnter = () => {
    const bubble = buttonRef.current.querySelector('.bubble');
    const ring = buttonRef.current.querySelector('.ring');
    const borderWrapper = buttonRef.current.querySelector('.border-wrapper');
  
    bubble.style.opacity = 1;
    ring.style.opacity = 1;
  
    // Reset border full size when hover starts
    if (borderWrapper) {
      borderWrapper.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
      borderWrapper.style.transform = `translate(0, 0) scale(1)`;
      borderWrapper.style.opacity = '1';
    }
  };
  
  const handleLeave = () => {
    const bubble = buttonRef.current.querySelector('.bubble');
    const ring = buttonRef.current.querySelector('.ring');
    const borderWrapper = buttonRef.current.querySelector('.border-wrapper');
  
    bubble.style.opacity = 0;
    ring.style.opacity = 0;
  
    // Reset the border when mouse leaves
    if (borderWrapper) {
      borderWrapper.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
      borderWrapper.style.transform = `translate(0, 0) scale(1)`;
      borderWrapper.style.opacity = '1';
    }
  };
  

  const ButtonContent = (
    <button
      ref={buttonRef}
      className={`bubble-button ${buttonClassName}`} 
      style={{ 
        backgroundColor, 
        color: textColor, 
        borderRadius,
        ...(centerContent && { 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }),
      }}
      // style={{ backgroundColor, color: textColor, borderRadius}}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Border Wrapper */}
      <span className="border-wrapper"
       style={{
        border: `1px solid ${borderColor}`,
        borderRadius: borderRadius,
      }}
      ></span>
  
      {icon && <span className="btn-icon">{icon}</span>}
      {title}
      <span className="bubble"></span>
      <span className="ring"></span>
    </button>
  );
  

  return (
    <div className={`bubble-wrapper ${className}`} style={style}>
      {link ? (
        external ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {ButtonContent}
          </a>
        ) : (
          <Link to={link}>{ButtonContent}</Link>
        )
      ) : (
        ButtonContent
      )}
    </div>
  );
};

export default CustomButton;
