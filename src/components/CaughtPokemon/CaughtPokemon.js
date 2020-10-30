import React, { useState } from 'react'

import "./caughtPokemon.css"

const CaughtPokemon = (props) => {

    const [caught, setCaught] = useState([]);

    const incrementCount = () => {
        setCaught(caught + 1);
    }

    /* const date  = new Date().toLocaleDateString(); */
    return (<>
    <div className="inline">
        <p className="paragraph">Caught <span className="caughtSpan">{caught.length}</span> Pokemon on {props.date}</p>
        <button onClick={incrementCount} className="caughtPokemon">Click me</button>
    </div>
    </>)
}

export default CaughtPokemon
