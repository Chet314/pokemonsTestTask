import React from 'react';
import PokemonsConteiner from './Components/Main/Pokemons/pokemonsConteiner';
import NavigationConteiner from './Components/Nav/navigationConteiner';
import PagesConteiner from './Components/Pages/pagesConteiner';
import PokemonConteiner from './Components/Main/Pokemon/pokemonConteiner';
import {Route} from 'react-router-dom';


const App = () => {
  return(
    <React.Fragment>
       <header>
      <PagesConteiner />
      </header>
       <nav>
       <NavigationConteiner />
      </nav>
      <main>
         <Route path = '/pokemon/:name' render = {() =><PokemonConteiner />}/>
         <Route path = '/' render = {() =><PokemonsConteiner />} />
       </main>
    </React.Fragment>
  );
}

export default App;
