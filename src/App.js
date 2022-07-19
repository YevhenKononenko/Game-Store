import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Account from './pages/Account';
import Paid from './pages/Paid';
import Send from './pages/Send'
import GamePage from './pages/GamePage';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/paid' element={<Paid />} />
          <Route path='/send' element={<Send />} />
          <Route path='/gamepage' element={<GamePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
