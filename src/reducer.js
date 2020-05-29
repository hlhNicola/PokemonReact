import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './actions';


const getPokemonsList = (pokemons, capturedPokemon) => {
    pokemons.filter((pokemon) => {
        return pokemon !== capturedPokemon
    })
}

const getCapturedPokemon = (capturedPokemons, releasedPokemon) => {
    return capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)
}

const capturePokemon = (pokemon, state) => {
    return {
        pokemons: getPokemonsList(state.pokemons, pokemon),
        capturedPokemons: [...state.capturedPokemons, pokemon] 
    }
}

const releasePokemon = (pokemon, state) => {
    return {
        pokemons: [...state.pokemons, pokemon],
        capturedPokemons: getCapturedPokemon(state.capturedPokemons, releasePokemon) 
    }
}

const addPokemon = (pokemon, state) => {
    return {
        pokemons:[...state.pokemons, pokemon],
        capturedPokemons: state.capturedPokemons
    }
}

const addPokemons = (pokemons, state) => ({
    pokemons: pokemons,
    capturedPokemons: state.capturedPokemons
})

const pokemonReducer = (state, action) => {
    switch (action.type) {
        case CAPTURE:
            return capturePokemon(action.pokemon, state)
        case RELEASE:
            return releasePokemon(action.pokemon, state)
        case ADD_POKEMON:
            return addPokemon(action.pokemon, state)
        case ADD_POKEMONS:
            return addPokemons(action.pokemon, state)
        default:
            return state;
    }
}

export const usePokemonReducer = () => 
    useReducer(pokemonReducer, {
        pokemons: [],
        capturePokemons: []
    })
