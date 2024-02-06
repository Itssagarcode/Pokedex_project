import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonList from "../../hooks/usePokemonList";
import usePokemonDetails from "../../hooks/UsePokemonDetails";

const PokemonDetails = ({pokemonName}) => {
  const {id} = useParams()
  const {pokemon}= usePokemonDetails(id, pokemonName)

  return (
    <div className="card">
      <img className="pokemon-details-image" src={pokemon.image} alt="" />
      <div className="items">
        <div className="pokemon-details-name">name: {pokemon.name}</div>
        <div className="height-weight">
          <div> Height: {pokemon.height}</div>
          <div> Weight: {pokemon.weight}</div>
        </div>
        <div className="pokemon-details-types">
          {pokemon.types && pokemon.types.map((t) => <div key={t}> {t}</div>)}
        </div>
      </div>

      {/* more same types of pokemon */}
        
         {
           pokemon.types && pokemon.similarPokemons &&
          <div>
             more {pokemon.types[0]} type pokemons

             <ul>
               { pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}
              
             </ul>
          </div>
         }
    </div>
  );
}


export default PokemonDetails;
