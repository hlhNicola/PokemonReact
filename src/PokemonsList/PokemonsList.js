import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../PokemonContext/PokemonContext';
import { listPokemons } from '../listPokemons/listPokemons';
const url = "https://pokeapi.co/api/v2/pokemon"

export const PokemonsList = () => {

  const {pokemons, capture, addPokemons} = useContext(PokemonContext);

  useEffect(() => {
      const fetchPokemons = async () => {
          const response = await fetch(url);
          const data = await response.json();
          addPokemons(data.results);
      }
      fetchPokemons();
  }, [addPokemons])

      return (
          <div className="pokemons-list">
              <h2>Pokemons</h2>
    
              <table>
                    <tr>
                        <th>Pokemon</th>
                        <th>Capture</th>
                    </tr>
                    {listPokemons({
                    pokemons,
                    onClick: capture,
                    buttonLabel: '+'
                    })}

                </table>
    
          </div>
      )
}
export default PokemonsList;
