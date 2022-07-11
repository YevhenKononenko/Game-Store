import React from 'react';
import Cart from '../img/cart.png'
import Account from '../img/account.jpg'
import Logo from '../img/logo.png'

const Header = () => {
  return (
    <header className="header_container">
      <div className="header_main">
        <div className="header_logo">
          <img src={Logo} alt="" />
          <h2>GameStorePDK</h2>
        </div>
        <div className="header_nav">
          <ul className="ul">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
          </ul>
        </div>
        <div className="header_active">
          <img className='cartImg' src={Cart} alt="" />
          <img className='accountImg' src={Account} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
