import React from 'react';
import './lux.css';
const Lux = () => {
  return (
    <div className='lux'>
      <div className='heading'>
        <h1>Luxury Section</h1>
        <div className='text-bg'>
          <p>Select from top luxury cars to roll in style</p>
        </div>
      </div>
      <div className='container'>
        <div className='cart'>
          <img
            src='https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <div className='content'>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className='cart'>
          <img
            src='https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <div className='content'>
            <h3>Maserati</h3>
          </div>
        </div>
        <div className='cart'>
          <img
            src='https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmdlJTIwcm92ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt=''
          />
          <div className='content'>
            <h3>Range Rover</h3>
          </div>
        </div>
        <div className='cart'>
          <img
            src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt=''
          />
          <div className='content'>
            <h3>Porsche</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lux;
