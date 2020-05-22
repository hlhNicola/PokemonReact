export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';


const defaultState = {
    pokemons: [
        { id: 1, name: 'Bulbasaur'},
        { id: 2, name: 'Charmander'},
        { id: 3, name: 'Squirtle'}
    ],
    capturedPokemons: []
};

const [state, dispatch] = useReducer(pokemonReducer, defaultState);

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
        ...state,
        pokemons:[...state.pokemons, pokemon]
    }
}

const pokemonReducer = (state, action) => {
    switch (action.type) {
        case 'CAPTURE':
            return capturePokemon(action.pokemon, state)
        case 'RELEASE':
            return releasePokemon(action.pokemon, state)
        case 'ADD_POKEMON':
            return addPokemon(action.pokemon, state)
        default:
            return state;
    }
}