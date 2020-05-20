import React, {useContext} from 'react';
import {PokemonContext} from '../PokemonContext/PokemonContext';

const CapturedPokemons = () => {
    const {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
      } = useContext(PokemonContext);

      const releasePokemon = (releasePokemon) => {
        capturedPokemons.filter(pokemon => pokemon !== releasePokemon);
      }
    
      const release = (pokemon) => {
        setPokemons([...capturedPokemons, pokemon]);
        setCapturedPokemons(releasePokemon(pokemon))
      }
          return (
              <div className="captured-pokemons">
                  <h2>Captured Pokemon</h2>
        
                  {pokemons.map((pokemon) => (
                    <div key={`${pokemon.id}-${pokemon.name}`}>
                        <span>{pokemon.name}</span>
                        <button onClick={release(pokemon)}>-</button>
                    </div>
                  ))}
        
              </div>
          )
    }

export default CapturedPokemons