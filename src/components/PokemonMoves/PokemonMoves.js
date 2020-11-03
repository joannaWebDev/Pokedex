  import React, {useState, useEffect} from "react";

  import './style.css';

  const PokemonMoves = () =>{
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {   
      fetch(
          `https://pokeapi.co/api/v2/pokemon/1/`
      )
          .then((result) => result.json())
          .then((data) => {
          setPokemonData(data);
          });
      }, []);

  const showingData = pokemonData ? 
          <div className="pokemon-moves">
              <h3>{pokemonData.name}'s moves:</h3>
              <ul>
                  {pokemonData.moves.map((move, index) => {
                  return <li key={index}>{move.move.name}</li>;
                  })}
              </ul>
          </div> 
      :  null;
  return showingData;
}    
  

export default PokemonMoves;
