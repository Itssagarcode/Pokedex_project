import React from "react";
import { Link } from "react-router-dom";
import "./Pokemon.css";
const Pokemon = ({ name, image, id }) => {
  return (
    <div className="pokemon">
      <Link to={`/pokemon/${id}`}>
        <div>
          <img className="pokemon-img" src={image} alt="" />
        </div>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default Pokemon;
