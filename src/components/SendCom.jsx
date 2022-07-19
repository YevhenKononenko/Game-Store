import React from 'react';
/* import { useSelector } from 'react-redux'; */

const SendCom = ({title,count}) => {
/*   const { items } = useSelector((state) => state.cart); */
  /* const totalCount = items.reduce((sum, item) => sum + item.count, 0); */

  const generateArray = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  let totalGames = count;
  const numbers = generateArray(totalGames, 99999999);
  console.log(numbers);

  return (
    <div className='full_send_key'>
      <div className="textarea_part">
        <ul>
          {numbers.map((value) => (
            <textarea>{value}</textarea>
          ))}
        </ul>
      </div>
      <div className="h3_part">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default SendCom;
