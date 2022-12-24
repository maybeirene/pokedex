import React from 'react';
import './Detail.css';

function Detail() {  
    let imagenBack = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'
    let imagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  return (
    <div className="Detail">
        <h1 className="Detail__title">Name</h1>
        <div className="Detail__image">
            <img src={imagen} alt="" />
        </div>
        <div className="Detail__info">
            <p>Abilities</p>
            <ul>
                <li>ab1</li>
                <li>ab2</li>
            </ul>
            <p>Moves</p>
            <ul>
                <li>move1</li>
                <li>move2</li>
            </ul>
            <p>forms</p>

        </div>
    </div>
  );
}

export default Detail;
