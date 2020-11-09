import React, { useState } from "react";

import "./style.css";

const  PokemonCity = () =>{
  const [city, setCity] = useState("");

  const updateCity = (event) => {
    setCity(event.target.value);
    console.log('event',event);
  }

  return (
    <div className="pokemon-city-div">
    <input type="text" 
    value={city}
    onChange={updateCity}
    />
      <p>Welcome to the city of {city}</p>
      
    </div>
  );
}

export default PokemonCity;