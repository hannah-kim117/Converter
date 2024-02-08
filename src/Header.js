import React, { useState } from 'react';
import './header.css';

const Header = () => {
	const [isMenuVisible, setMenuVisible] = useState(false);
	const handleMenuClick = () => {
		// Toggle the visibility of the side screen
		setMenuVisible(!isMenuVisible);
	};

  return (
    <header>
      <div className="logo">Audio Converter</div>
      <button className="menu-button" onClick={handleMenuClick}>
        Menu
      </button>

      
	  {isMenuVisible && (
        <div className="side-menu">
          {/* Content of the side menu */}
          <p>--This will be the side menu content.--</p>
          <ul className='menu-list'>
            <li><a className='nav-link' href='/home'>Home</a></li>
            <li><a className='nav-link' href='/about'>About Us</a></li>
            <li><a className='nav-link' href='/faq'>FAQ</a></li>
            <li><a className='nav-link' href='/contactus'>Contact Us</a></li>
          </ul>
		
        </div>
      )}
    </header>
  );
};

export default Header;