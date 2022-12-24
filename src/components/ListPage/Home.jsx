import React, { useEffect } from 'react';
import './Home.css';
import Searcher from './Searcher';
import Grid from './Grid'

import retrieveAllPokemons from '../../logic/retieveAllPokemon';

function Home() {

  useEffect(() => {
    retrieveAllPokemons()
}, [])

  return (
    <div className="Home">
      <Searcher />
      <Grid />
    </div>
  );
}

export default Home;
