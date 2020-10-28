import React, { useState } from 'react'

import styles from "./CaughtPokemon.module.css"

const CaughtPokemon = (props) => {
    const catchPokemon = () => {
        const [caught, setCaught] = useState(0);
    }
    const incrementCount = () => {
        setCaught(caught + 1);
      }
    /* const date  = new Date().toLocaleDateString(); */
    return (<>
    <p>Caught {caught} Pokemon on {props.date}</p>
    <button onClick={incrementCount}>Click me</button>
    </>)
}

export default CaughtPokemon
