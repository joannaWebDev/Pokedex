import React from "react"

import "./App.css"

import Logo from "./Logo"
import BestPokemon from "./components/BestPokemon/BestPokemon"
import CaughtPokemon from "./components/CaughtPokemon/CaughtPokemon"

const App = () => {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date = new Date().toJSON().slice(0,10).split('-').reverse().join('/');
  return <> 
    <Logo appName="Pokedex"/>

    <BestPokemon abilities={abilities} />    

    <CaughtPokemon date={date} />
  </>
}


export default App;
