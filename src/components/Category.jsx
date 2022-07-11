import React from 'react';
import Sort from './Sort';

const Category = ({ value, onChangeCategory,sortValue,onChangeSort}) => {
  const list = ['All', 'Arcade', 'RPG', 'Action', 'Strategy'];
  return (
    <div className="category_container">
      <div className="category_main">
        <div className="category_title">
          <h2>Category</h2>
        </div>
        <div className="list_and_sort">
          <div className="category_list">
            <ul>
              {list.map((categoryName, i) => (
                <li onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
                  {categoryName}
                </li>
              ))}
            </ul>
          </div>
          <Sort sortValue={sortValue} onChangeSort={onChangeSort}/>
        </div>
        <div className="title_product">
        </div>
      </div>
    </div>
  );
};

export default Category;
