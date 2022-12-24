import React from 'react';
import './App.css';
import Home from './components/ListPage/Home';
import Detail from './components/DetailPage/Detail';

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pokedex</h2>
      </header>
      <div className='App-content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/*"  element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
