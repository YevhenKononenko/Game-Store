import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../img/person_cart.png';

const CartEmpty = () => (
  <div className="cart_empty">
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      You probably haven't buy games yet.
      <br />
      To buy the game, go to the main page.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button_end">
      <span>🔙 Come back</span>
    </Link>
  </div>
);

export default CartEmpty;
