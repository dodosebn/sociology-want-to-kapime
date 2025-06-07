import React from 'react';
import './widget-style.css'; 
import CustomButton from '../../containers/button/CustomButton';
import { FaStar } from 'react-icons/fa';


// Import specific icons
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaRss } from 'react-icons/fa';

const LetsConnect = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/envato',
      icon: <FaFacebookF />,
      color: '#3b5998',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/envato',
      icon: <FaTwitter />,
      color: '#1DA1F2',
    },
    // {
    //   name: 'WhatsApp',
    //   link: 'https://wa.me/5492996155777',
    //   icon: <FaWhatsapp />,
    //   color: '#25D366',
    // },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/estudiopatagon/',
      icon: <FaInstagram />,
      color: '#E1306C',
    },
    // {
    //   name: 'RSS',
    //   link: 'https://ghost.estudiopatagon.com/edger/rss',
    //   icon: <FaRss />,
    //   color: '#FFA500',
    // },
  ];

  return (
    <div className="connect-widget">
      <h3 className="connect-title">
        <span>Let's connect</span> <span className="dot"> <FaStar size={14} /></span>
      </h3>
      <div className='lets-connect-wrapper'>
      <div className="lets-content">
        {socialLinks.map((social, index) => (
          <CustomButton
            key={index}
            title={social.name}
            link={social.link}
            backgroundColor={social.color}
            textColor="#fff"
            borderColor="#000"
            icon={social.icon} 
            className="social-button"
            buttonClassName="social-button-inner"
            style={{
              width: '100%', 
            }}
          />
        ))}
      </div>    
      </div>
    </div>
  );
};

export default LetsConnect;
