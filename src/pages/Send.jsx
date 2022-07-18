import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const Send = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let key = getRandomInt(9999999);
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
            <h2>Put your info</h2>
            <div className="form_control_div">
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
              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
            </div>
            <div className="text_area_input">
                <h4>This is your code:</h4>
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Write here this code"
                name="message">{key}</textarea>
            </div>
            <div className="button_email">
              <input type="submit" className="btn btn-info" value="Send Message"></input>
            </div>
            <Link to="/paid" className="finish_type">
              <div className="end_order">
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
