import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Card.css';

function Card(props) {  
  const navigate = useNavigate();

  const transformUrlToID = (url) =>{
    const urlArr = url.trim().split('/');
    const currentId = urlArr[urlArr.length-2]
    return currentId
  }

  const pokeId = transformUrlToID(props.url);
  return (
    <div className="Card" onClick={()=> {navigate(`pokemon/${pokeId}`)}}>
        <p className="Card__id">#{pokeId}</p>
        <p className="Card__name">{props.name}</p>
    </div>
  );
}

export default Card;
