import React from 'react';
import './Card.css';

function Card(props) {  
  const transformUrlToID = (url) =>{
    const urlArr = url.trim().split('/');
    const currentId = urlArr[urlArr.length-2]
    return currentId
  }
  const pokeId = transformUrlToID(props.url);
  return (
    <div className="Card">
        <p className="Card__id">#{pokeId}</p>
        <p className="Card__name">{props.name}</p>
    </div>
  );
}

export default Card;
