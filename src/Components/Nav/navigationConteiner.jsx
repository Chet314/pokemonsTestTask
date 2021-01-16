import React, {useEffect} from 'react';
import Navigation from './navigation';
import {connect} from 'react-redux';
import {getPokemons} from '../../Redux/pokemonsReducer';
import {pokemonNamesSelector, pokemonNamesUpperCaseSelector } from '../Selectors/navigationSelector';
import style from './navigation.module.css';
import pokeApi from '../Images/pokeapi.png'


const NavigationConteiner = React.memo((props) => {

   useEffect(() => {
        props.pokemonNames.map(pokemonName => props.getPokemons(pokemonName)); 
    },[props]);

return(
    
<div>
    <div className = {style.logo}><img src = {pokeApi} alt='logoPokiApi' /></div>
    <Navigation {...props} />
</div>
);
});


const mapStateToProps = (state) => {
    return{
     pokemonNames: pokemonNamesSelector(state),
     pokemonNamesUpperCase:  pokemonNamesUpperCaseSelector(state)
    }
}

export default connect(mapStateToProps, {getPokemons})(NavigationConteiner);