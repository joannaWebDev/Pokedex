import React, { useState } from 'react';

import "./style.css";

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState(0);   
    const [num, setNum] = useState("001");

    const[pokemonNameInput,setPokemonNameInput]= useState("");
    const [pokemon, setPokemon] = useState([]);   

    const incrementCount = () => {
    setCaught(caught + 1); 
    }

    const generateRandomId = () => {
        const randomNum = Math.round(Math.random() * 100);
            if (randomNum < 10) {
                setNum(`00${randomNum}`); 
            } else if(randomNum >= 10) {
                setNum(`0${randomNum}`);
            }
    }

    const catchPokemon = () => {
      setPokemon(pokemon.concat(pokemonNameInput));
    }

    const list = pokemon.map((poki, index) => <li key={index}>{poki}</li>)
    
    const handleInputChange = (event) =>{
        setPokemonNameInput (event.target.value);  
    } 

    return (<>
        <div className="inline">
            <p className="paragraph"><b>Caught</b> <span className="caughtSpan">{caught}</span> Pokemon on {props.date}</p>
            <button onClick={incrementCount} className="caughtPokemon">Click me</button>
        </div>

        <div className="inline">
            <div>                
                <p>Random number is {num}</p> 
                <button className="caughtPokemon" onClick={generateRandomId} >Click me</button>            
            </div>
            <img alt="pokemon-image2" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`} height="200" width="200"/>
        </div>


        <div className="inline">
            <div>                
                <p>pokemon caught is {list}</p> 
                <input type="text" 
                value={pokemonNameInput}
                onChange={handleInputChange}/> 
                <button className="caughtPokemon" onClick={catchPokemon} >Click me</button>                            
            </div>
        </div>

        </> 
    )
}

export default CaughtPokemon