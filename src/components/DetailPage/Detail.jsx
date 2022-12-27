import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import retrievePokemonDetail from "../../logic/retrievePokemonDetail";
import Abilities from "./Abilities";
import Moves from "./Moves";

import "./Detail.css";

function Detail() {
  const [pokemon, setPokemon] = useState();
  const [feedback, setFeedback] = useState();

  const navigate = useNavigate();

  const params = window.location.pathname;

  const getPokemon = (params) => {
    try {
      retrievePokemonDetail(params)
        .then((res) => {
          setPokemon(res);
        })
        .catch((error) => {
          console.error(error);
          setFeedback("error");
        });
    } catch (error) {
      setFeedback("error");
    }
  };

  useEffect(() => {
    getPokemon(params);
  }, []);

  return (
    <div>
      <button
        className="Detail__back-button"
        onClick={() => {
          navigate("../");
        }}
      >
        ← Back
      </button>
      {pokemon ? (
        <div className="Detail">
          <h1 className="Detail__title">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="Detail__image">
            <img src={pokemon.sprite} alt={pokemon.name} />
          </div>
          <div className="Detail__info">
            <Abilities data={pokemon.abilities} />
            <Moves data={pokemon.moves} />

            <div>
              <p>Forms</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
}

export default Detail;
