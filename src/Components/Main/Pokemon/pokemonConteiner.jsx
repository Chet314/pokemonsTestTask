import React from 'react';
import Pokemon from './pokemon';
import Preloader from '../../Preloader/preloader';
import {connect} from 'react-redux';
import {addPokemon} from '../../Selectors/pokemonSelector';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getPokemon, getIsLoading} from '../../../Redux/pokemonReducer';


class PokemonConteiner extends React.PureComponent {

componentDidMount(){
    let id = (this.props.match.params.name)[0].toLowerCase() + (this.props.match.params.name).slice(1) ;
    if(!id ){id = 1;}
        this.props.getIsLoading(true);
        this.props.getPokemon(id);
}

render(){
    return(
    <div>
        {this.props.isLoading ? <Preloader /> : <Pokemon {...this.props} />}
    </div>
    );
}}

const mapStateToProps = (state) => {
    return {
        pokemon: addPokemon(state),
        isLoading: state.pokemon.isLoading
    }
};

export default compose(
    connect(mapStateToProps, {getPokemon, getIsLoading}),
    withRouter
)(PokemonConteiner);