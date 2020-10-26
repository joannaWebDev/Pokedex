import React from "react";

const Logo = (props) => {
    /* const appName = "Pokedex"; */
    return <>
    
    <header>
        <h1>Bienvidos al <u>{props.appName}</u></h1> 
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokemon" width="200px" height="200px"/>
    </header>
    
    </>
}

export default Logo;