import React from 'react';
import pikachu from '../img/pikachu.png'
const Paid = () => {
    return (
        <div className='paid_wrapper'>
            <div className="title_paid">
                <h2>Order has been paid! 🤩</h2>
                <h3>We will be glad to see you again !</h3>
            </div>
            <div className="paid_img">
                <img src={pikachu} alt="" />
            </div>
        </div>
    );
}

export default Paid;
