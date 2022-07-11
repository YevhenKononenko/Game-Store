import React from 'react';
import titleImg from '../img/title.png'

const Title = () => {
    return (
        <div className='title_container'>
            <div className="main_title">
                <div className="title_img">
                    <img src={titleImg} alt="" />
                </div>
                <div className="title_text">
                    <h2>A lot of games for all of us!</h2>
                </div>
            </div>
        </div>
    );
}

export default Title;
