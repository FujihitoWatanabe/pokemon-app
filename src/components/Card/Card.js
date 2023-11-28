import React from 'react';
import './Card.css';

export const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <p className="cardName">{pokemon.name}</p>
      <div className="cardTypes">
        <div>
          {pokemon.types.map((type) => {
            return (
              <div key={type.type.name}>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ：{pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};
