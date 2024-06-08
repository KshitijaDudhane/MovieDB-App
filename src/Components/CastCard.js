import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import "../App.css";

const Card = ({ id, title, rating, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <Link to={id}>
          <h3 className="card-title">{title}</h3>
        </Link>

        <p className="card-text">Character :{rating}</p>
      </div>
    </div>
  );
};

export default Card;
