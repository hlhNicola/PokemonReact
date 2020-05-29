import React from 'react';
import PokemonsList from './PokemonsList/PokemonsList'
import { PokemonProvider } from './PokemonContext/PokemonContext';
import Pokedex from './Pokedex/Pokedex';
import PokemonForm from './PokemonForm/PokemonForm';

import './App.css';

function App() {

  return (
    <PokemonProvider>
      <div className="App">
      <PokemonsList />
      <Pokedex />
    </div>
    <div className='form-wrapper'>
      <PokemonForm />
    </div>
    </PokemonProvider>
  );
}

export default App;
