import React from 'react';
import './Card.css';

function Card(props) {  
  return (
    <div className="Card">
        <p className="Card__id">#id</p>
        <p className="Card__name">{props.name}</p>
    </div>
  );
}

export default Card;
