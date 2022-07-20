import React from 'react';
import './driver.css';
import drive from '../../images/drive.png';
const Driver = () => {
  return (
    <div className='drive'>
      <div className='left'>
        <img src={drive} alt='/' />
      </div>
      <div className='right'>
        <h2>
          Find your perfect car to try
          <br />
          <span> before you buy</span>
        </h2>
        <p>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
