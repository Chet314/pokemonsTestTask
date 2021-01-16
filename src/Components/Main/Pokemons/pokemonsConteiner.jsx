import React from 'react';
import {connect} from 'react-redux';
import Pokemons from './pokemons';
import Preloader from '../../Preloader/preloader';
import {pokemonsSelector} from '../../Selectors/pokemonsSelector';

const PokemonsConteiner = React.memo((props) =>{




    return (
        <div>
           {props.isLoading ? <Preloader /> : <Pokemons {...props} />}
        </div>
    );
});

const mapStateToProps = (state) => {
    return {
        pokemons: pokemonsSelector(state),
        isLoading: state.pokemons.isLoading
    }
}

export default connect(mapStateToProps, null)(PokemonsConteiner);
