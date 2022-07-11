import React from 'react';

const GameBlock = ({ title, price, imageUrl, genre, types }) => {
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
            {
                genre.map((value) => (
                    <li>{value}</li>
                ))
            }
          </ul>
        </div>
        <div className="game-block-button">
          <div className="game-buy-button">
            <h2>Buy</h2>
            <h3>0</h3>
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
