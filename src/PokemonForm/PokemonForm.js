
import React, {useState, useContext} from 'react';
import { PokemonContext } from '../PokemonContext/PokemonContext';
import { generateID } from '../utils';

const PokemonForm = () => {

    const [pokemonName, setPokemonName] = useState();

    const { addPokemon } = useContext(PokemonContext);

    const handleNameOnChange = (e) => {
        return setPokemonName(e.target.value)
    }
    
    const handleNameOnSubmit = (e) => {
        e.preventDefault();
        addPokemon({
            id: generateID(),
            name: pokemonName
        })
    }

    return (
        <form onSubmit={handleNameOnSubmit}>
            <input type="text" placeholder="pokemon name" onChange={handleNameOnChange} />
            <input type="submit" value='Add' />   
        </form>
    )
}


export default PokemonForm
