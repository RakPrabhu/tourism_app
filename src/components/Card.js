import React from 'react';
import './Card.css';

const Card = ({ name, rating, text }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>{name}</h4>
        <p className="rating">{rating}</p>
      </div>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
