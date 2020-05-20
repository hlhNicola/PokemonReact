import React from 'react';
import PokemonsList from './PokemonsList/PokemonsList'
import { PokemonProvider } from './PokemonContext/PokemonContext';

import './App.css';
import Pokedex from './Pokedex/Pokedex';

function App() {

  return (
    <PokemonProvider>
      <div className="App">
      <PokemonsList />
      <Pokedex />
    </div>
    </PokemonProvider>
  );
}

export default App;
