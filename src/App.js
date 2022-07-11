import React from 'react';
import Category from './components/Category';
import Header from './components/Header';
import Search from './components/Search';
import Title from './components/Title';
import GameBlock from './components/GameBlock';
import './scss/main.scss';

function App() {
  const [items, setItems] = React.useState([]);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Popularity',
    sortProperty: 'rating'
  });

  const[searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-','');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://62cad8983e924a01286012e1.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [categoryId, sortType]);

  const games = items.filter((obj) => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  }).map((obj) => <GameBlock {...obj} />);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <Title />
          <Search setSearchValue={setSearchValue}/>
          <Category 
          value={categoryId} 
          onChangeCategory={(i) => setCategoryId(i)}
          sortValue={sortType}
          onChangeSort={(i) => setSortType(i)}
          />
          <div className="game-part">
            {games}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
