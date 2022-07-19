import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';
import { clearItems } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Empty trash?')) {
      dispatch(clearItems());
    }
  };
  
  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="cart_wrapper">
      <div className="header_cart">
        <div className="title_header">
          <h2>🛒 Cart</h2>
        </div>
        <div onClick={onClickClear} className="delete_header">
          <h2>🗑️ Clear</h2>
        </div>
      </div>
      <div className="content_items">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            {' '}
            All games: <b>{totalCount}</b>{' '}
          </span>
          <span>
            {' '}
            Order sum: <b>{totalPrice}$</b>{' '}
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to="/" className="come-back">
            <div className="button_end">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
              <span>Come back</span>
            </div>
          </Link>
          <Link to='/send' className='paid_type'>
          <div className="button_pay-btn">
            <span>Pay now</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
