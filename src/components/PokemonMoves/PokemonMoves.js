import React, {useState, useEffect} from "react";

import './style.css';

const PokemonMoves = (props) =>{
const [pokemonData, setPokemonData] = useState(null);

console.log('props', props);

useEffect(() => {   
    fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`
    )
        .then((result) => result.json())
        .then((data) => {
        setPokemonData(data);
        });
    }, [props.pokemonId]);

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
