import React from 'react';

function Abilities( {data} ) {

  return (
    <div className="Abilities">
      <p>Abilities</p>
            <ul>
                {data.map((ability)=> {
                    if(ability.is_hidden === false){
                        return <li key={ability.ability.url}>{ability.ability.name}</li>
                        } 
                    return null
                    })}
            </ul>
    </div>
  );
}

export default Abilities;
