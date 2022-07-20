import React from 'react';
import './footer.css';
import darklogo from '../../images/logo_dark.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <img src={darklogo} alt='/' />
        <button>Share A Car</button>
      </div>
    </div>
  );
};

export default Footer;
