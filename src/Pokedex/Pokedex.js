import React, {useContext} from 'react';
import {PokemonContext} from '../PokemonContext/PokemonContext';

const CapturedPokemons = () => {

    const {capturedPokemons,release} = useContext(PokemonContext);

          return (
              <div className="captured-pokemons">
                  <h2>Captured Pokemon</h2>
        
                  {capturedPokemons.map((pokemon) => (
                    <div key={`${pokemon.id}-${pokemon.name}`}>
                        <span>{pokemon.name}</span>
                        <button onClick={release(pokemon)}>-</button>
                    </div>
                  ))}
        
              </div>
          )
    }

export default CapturedPokemons