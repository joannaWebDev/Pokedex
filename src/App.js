import React from "react"

import Logo from "./Logo"
import BestPokemon from "./components/BestPokemon/BestPokemon"
import CaughtPokemon from "./components/CaughtPokemon/CaughtPokemon"

import "./App.css"

const App = () => {
  const logWhenClicked = () => {
    console.log("Image was clicked!");
  }
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date = new Date().toJSON().slice(0,10).split('-').reverse().join('/');
  return <> 
    <Logo appName="Pokedex" logWhenClicked = {logWhenClicked}/>

    <BestPokemon abilities={abilities} />    

    <CaughtPokemon date={date} />
  </>
}


export default App;
