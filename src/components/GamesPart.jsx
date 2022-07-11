import React from 'react';
/* import Playing from '../img/playing.png';
import Pods from '../img/headphones.png' */
import games from './assets/games.json'
import GameBlock from './GameBlock';

const GamesPart = () => {
  return (
    <div className="game_wrapper">
      {/*       <div className="game_img">
        <img className='img1' src={Playing} alt="" />
        <img className='img2' src={Pods} alt="" />
      </div> */}
      {games.map((obj) => (
        <GameBlock {...obj} />
      ))}
    </div>
  );
};

export default GamesPart;
