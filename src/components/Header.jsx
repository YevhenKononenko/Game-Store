import React from 'react';
import Cart from '../img/cart.png';
import Account from '../img/account.jpg';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { useSelector  } from 'react-redux';


const Header = () => {
  const {items, totalPrice} = useSelector(state => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  return (
    <header className="header_container">
      <div className="header_main">
        <Link className="Link" to="/">
          <div className="header_logo">
            <img src={Logo} alt="" />
            <h2>GameStorePDK</h2>
          </div>
        </Link>
        <div className="header_nav">
          <ul className="ul">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
          </ul>
        </div>
        <div className="header_active">
          <Link to="/cart">
            <div className="cartDiv">
              <img className="cartImg" src={Cart} alt="" />
              <h2>{totalCount}</h2>
              <h3>{totalPrice}$</h3>
            </div>
          </Link>
          <Link to="/account">
            <div className="accountDiv">
              <img className="accountImg" src={Account} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
