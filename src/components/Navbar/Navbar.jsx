import React, { useState } from 'react';
import './navbar.css';
import {
  AiOutlineMenu,
  AiFillCloseCircle,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import logo from '../../images/logo.png';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='navbar'>
      <img src={logo} alt='/' />
      <nav>
        <ul className={nav ? 'menu active' : 'menu'}>
          <li>
            <a href='/'>learn more</a>
          </li>
          <li>
            <a href='/'>log in</a>
          </li>
          <li>
            <a href='/'>sing in</a>
          </li>
          <li>
            <AiOutlineSearch style={{ marginTop: '6px' }} size={25} />
          </li>
          <li>
            <AiOutlineUser style={{ marginTop: '6px' }} size={25} />
          </li>
        </ul>
        <div className='mobile-btn' onClick={() => setNav(!nav)}>
          {nav ? <AiFillCloseCircle size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
