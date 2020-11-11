import React,{ useState} from "react";
import PokemonMoves from './../PokemonMoves/PokemonMoves';

import './style.css';

function PokemonMovesSelector() {
  const [id, setId] = useState(null);

  function handleBulbasaurClick() {
    setId(1);
  }
  function handleCharmanderClick() {
    setId(4);
  }

  return (
    <div className="pokemon-moves-selector">
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
}


export default PokemonMovesSelector;