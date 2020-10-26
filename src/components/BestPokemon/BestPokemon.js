import React from "react"

import styles from "./BestPokemon.module.css"

const BestPokemon = (props) => {
    /* const abilities = ['Anticipation', 'Adaptability', 'Run-Away']; */
    return (<>
        <main>
            <p>My favourite Pokemon is <strong>Squirtle</strong></p>
            <p>His main abilities are:</p>
            <ul>{props.abilities.map((ability, i)=>{
                return (<li key={i}>{ability}</li>)
            })}
            </ul>
        </main>
    </>)
}


export default BestPokemon