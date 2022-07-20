import React from 'react';
import './hero.css';
import { AiOutlineSearch } from 'react-icons/ai';
const Hero = () => {
  return (
    <div className='hero'>
      <form>
        <div className='text'>
          <label>Where</label>
          <input
            type='text'
            placeholder='Search Location...'
            className='input-text'
          />
        </div>
        <div className='from'>
          <span className='border'></span>
          <label>From</label>
          <input type='date' />
        </div>
        <div className='until'>
          <span className='border'></span>
          <label>Until</label>
          <input type='date' />
        </div>
        <div className='search-btn'>
          <AiOutlineSearch size={25} className='icon' />
          <button className='hero-btn'>Search for cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
