import React from "react"

import "./style.css"

const BestPokemon = (props) => {
    /* const abilities = ['Anticipation', 'Adaptability', 'Run-Away']; */
    return (<>
        <div className="abilities-div">
            <p>My favourite Pokemon is <strong>Pidgey</strong></p>
            <p>His main <b>abilities</b> are:</p>
            <ul>{props.abilities.map((ability, i)=>{
                return (<li key={i}>{ability}</li>)
            })}
            </ul>
        </div>
    </>)
}


export default BestPokemon