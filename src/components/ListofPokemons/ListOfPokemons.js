import React, { useState } from "react"
import NombresDePokemonesAtrapados from "./NombresDePokemones"

const CaughtPokemon = (propsDate) => {

const [caught, setCaught] = useState(0)

const catchPokemon= () => {

setCaught(caught + 1)
}

    return <>
            <button onClick={catchPokemon}>DAME TODOS LOS LIKES QUE QUIERAS</button>
            <p>Caught {caught} Pokemon on</p>
            <p>{propsDate.date}</p> 
            <NombresDePokemonesAtrapados />
        </> 
            
}
export default CaughtPokemon;
