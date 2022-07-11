import React from 'react';
import GamePad from '../img/gamepad.png'
import Lupa from '../img/lupa.png'

const Search = ({setSearchValue}) => {

    return (
        <div className='search_container'>
            <div className="search_title">
                <h2>Find your game ⬇️</h2>
                <img src={GamePad} alt="" />
            </div>
            <div className="search_input">
                <input type="text" placeholder="Enter your game" onChange={(event) => setSearchValue(event.target.value)}/>
                <img src={Lupa} alt="" />
                
            </div>
        </div>
    );
}

export default Search;
