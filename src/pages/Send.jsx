import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../redux/slices/cartSlice';
import SendCom from '../components/SendCom';

const Send = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
/*   const totalCount = items.reduce((sum, item) => sum + item.count, 0); */

  const onClickClearBuy = () => {
      dispatch(clearItems());
  };

/*   const generateArray = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  let totalGames = totalCount;
  const numbers = generateArray(totalGames, 99999999);
  console.log(numbers); */

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_a3ufjzp', e.target, 'g_8n4lyMAvEx4eK0A').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    e.target.reset();
  }

  return (
    <div>
      <div className="send_container">
        <form onSubmit={sendEmail}>
          <div className="row_pt-5_mx-auto">
            <h4>This is your code(s):</h4>
{/*             <div className="form_control_div">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="email_input">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="subject_input">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div> */}
            <div className="text_area_input">
              {/* <h4>This is your code(s):</h4> */}
              {items.map((item) => (
                <SendCom key={item.id} {...item} />
              ))}
            </div>
{/*             <div className="button_email">
              <input type="submit" className="btn btn-info" value="Send Message"></input>
            </div> */}
            <Link to="/paid" className="finish_type">
              <div onClick={onClickClearBuy} className="end_order">
                <h2>Finish order</h2>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Send;
