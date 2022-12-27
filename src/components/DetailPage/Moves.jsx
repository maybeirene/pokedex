import React, { useState, useEffect } from "react";
import './Moves.css'

function Moves({ data }) {
  const [moves, setMoves] = useState(data.slice(0, 10));

  const deleteMove = (currentMove) => {
    let moveIndexToDelete = moves.indexOf(currentMove);
    let currentMoves = moves
      .slice(0, moveIndexToDelete)
      .concat(moves.slice(moveIndexToDelete + 1, moves.lenght));
    setMoves(currentMoves);
  };

  return (
    <div className="Moves">
      <p>Moves</p>
      <ul>
        {moves ? (
          moves.map((move) => {
            return (
              <li key={move.move.url}>
                <button className="Moves__delete-button" onClick={() => deleteMove(move)}>Delete</button>
                {move.move.name}
              </li>
            );
          })
        ) : (
          <h3>error</h3>
        )}
      </ul>
    </div>
  );
}

export default Moves;
