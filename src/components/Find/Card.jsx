import React from 'react';
import './find.css';
const Card = ({ image, make }) => {
  return (
    <div className='card'>
      <img src={image} alt='/' />
      <p>{make}</p>
    </div>
  );
};

export default Card;
