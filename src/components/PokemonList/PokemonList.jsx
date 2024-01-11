import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon'
const PokemonList = () => {
 
    const [PokemonList, setPokemonList] = useState([])
     const [isLoading, setIsLoading] = useState(true);
 
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNexUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')

    async function downloadsPokemons(){
      setIsLoading(true);
        const response = await axios.get(pokedexUrl);
        const pokemonResults = response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);
        setNexUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name, 
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny, 
                types: pokemon.types
            }
        });
        console.log(res);
        setPokemonList(res)
        setIsLoading(false)
    }
    useEffect(() => {
     downloadsPokemons();
    },[pokedexUrl]);
  return (
    <div className='pokemon-list-wrapper'>
     <div className='pokemon-wrapper'> {(isLoading) ? ' Loading...' : 
      PokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)
      } 
      </div> 
      <div className='controls'>
        <button disabled={prevUrl== null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
        <button disabled={nextUrl== null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
      </div>
    </div>
  )
}

export default PokemonList
