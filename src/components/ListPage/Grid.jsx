import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Grid.css';

import retrieveAllPokemon from '../../logic/retieveAllPokemon';

function Grid() {
  const [pokemonList, setPokemonList] = useState()
  const [feedback, setFeedback] = useState()

  const getAllPokemon = () => {
      try {
          retrieveAllPokemon()
              .then(res => setPokemonList(res.results))
              .catch(error=>{
                console.error(error)
                setFeedback('error')
              })
      } catch (error) {
          setFeedback('error')
      }
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <div >
      <ul className="Grid">
        {pokemonList? pokemonList.map(pokemon=>{
          return <li key={pokemon.url}>
                      <Card  url={pokemon.url} name={pokemon.name} />
          </li>
        })
        : <h3>No pokemon found</h3>
      }
      </ul>
    </div>
  );
}

export default Grid;
