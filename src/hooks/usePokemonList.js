import axios from "axios";
import { useEffect, useState } from "react";
function usePokemonList(type){
    const [pokemonListState, setPokemonListState] = useState({
        PokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        nextUrl: "",
        prevUrl: "",
      });

      async function downloadsPokemons() {


        // iterating over the array of pokemons, and usin their url, to create an array of promises
        // that will download those 20 pokemons


          setPokemonListState((state) =>({ ...state, isLoading: true }));
          const response = await axios.get(pokemonListState.pokedexUrl); //this download
          const pokemonResults = response.data.results; // we get the array of pokemons
      
          console.log(response.data);
          setPokemonListState((state) =>({
            ...state,
            nextUrl: response.data.next,
            prevUrl: response.data.previous,
          }));

        
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        // now iterate on the data of each pokemon , and extract id , name, types
        const pokemonData = await axios.all(pokemonResultPromise);
              console.log(pokemonData)
        const pokeListResult = pokemonData.map((pokeData) => {
          const pokemon = pokeData.data;
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other
              ? pokemon.sprites.other.dream_world.front_default
              : pokemon.sprites.front_shiny,
            types: pokemon.types,
          };
        });
        console.log(pokeListResult);
        setPokemonListState((state) =>({
          ...state,
          PokemonList: pokeListResult,
          isLoading: false,
        }));
    
      }

      useEffect(() =>{
        downloadsPokemons()
      },[pokemonListState.pokedexUrl])

      return[pokemonListState,setPokemonListState]
}
export default usePokemonList;