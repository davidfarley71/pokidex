import React, { useState } from 'react';

export function Abilities(props) {
    return (
        <div className="generationsContainer">
      <div className="Abilities">
          <h1 className="abilitesHeader">Abilities</h1>
          {props.abilities.map((value, index) => {
            let temp = <div key={value + '' + index}>{value.ability.name}</div>
            return temp;
          })}
        </div>
        </div>
    
    )
}




