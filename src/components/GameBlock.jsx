import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const GameBlock = ({ id, title, price, imageUrl, genre, rating }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="game-block-wrapper">
      <div className="game-block-main">
        <div className="game-block-img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="game-block-title">
          <h2>{title}</h2>
        </div>
        <div className="game-block-genres">
          <ul>
            {genre.map((value) => (
              <li>{value}</li>
            ))}
            {rating.map((value) => (
              <li className='rate'>Rate: {value}</li>
            ))}
          </ul>
        </div>
{/*         <div className="game-block-rating">
          <ul>
            {rating.map((value) => (
              <li>{value}</li>
            ))}
          </ul>
        </div> */}
        <div className="game-block-button">
          <div className="game-buy-button" onClick={onClickAdd}>
            <h2>Buy</h2>
            {addedCount > 0 && <h3>{addedCount}</h3>}
          </div>
          <div className="game-price">
            <h2>{price} $</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBlock;
