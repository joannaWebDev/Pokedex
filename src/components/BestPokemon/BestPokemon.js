import React from "react"

import "./bestPokemon.css"

const BestPokemon = (props) => {
    /* const abilities = ['Anticipation', 'Adaptability', 'Run-Away']; */
    return (<>
        <main>
            <p>My favourite Pokemon is <strong>Pidgey</strong></p>
            <p>His main abilities are:</p>
            <ul>{props.abilities.map((ability, i)=>{
                return (<li key={i}>{ability}</li>)
            })}
            </ul>
        </main>
    </>)
}


export default BestPokemon