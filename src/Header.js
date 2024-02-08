import React, { useState } from 'react';
import './header.css';

const Header = () => {
	const [isSideScreenVisible, setSideScreenVisible] = useState(false);
	const handleMenuClick = () => {
		// Toggle the visibility of the side screen
		setSideScreenVisible(!isSideScreenVisible);
	};

  return (
    <header>
      <div className="logo">Audio Converter</div>
      <button className="menu-button" onClick={handleMenuClick}>
        Menu
      </button>
	  {isSideScreenVisible && (
        <div className="side-screen">
          {/* Content of the side screen */}
          <p>--This is the side menu content.--</p>
		  <p>About Us</p>
		  <p>FAQ</p>
		  <p>Contact Us</p>
        </div>
      )}
    </header>
  );
};

export default Header;