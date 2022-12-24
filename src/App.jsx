import React from 'react';
import './App.css';
import Home from './components/ListPage/Home';
import Detail from './components/DetailPage/Detail';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pokedex</h2>
      </header>
      <div className='App-content'>
        <Home />
        <Detail />
      </div>
    </div>
  );
}

export default App;
