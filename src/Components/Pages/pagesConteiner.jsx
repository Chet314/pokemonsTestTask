import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Pages from './pages';
import {getPokemonName, setOffset} from '../../Redux/pageReducer';
import {getLimit, offsetSelector, getCountPokemons} from '../Selectors/pagesSelector';
import {setNewArray} from '../../Redux/pokemonsReducer';


const PagesConteiner = React.memo((props) => {

    useEffect(() => {
        props.getPokemonName(props.limit, props.offset);
        // eslint-disable-next-line 
    },[props.offset]);

    let onPageChanged = (p) => {
        props.setNewArray();
        let offset = (p - 1)*100;
        props.setOffset(offset);
    };

    return(
        <div>
            <Pages {...props}
        onPageChanged = {onPageChanged} />
        </div>
    );
});


const mapStateToProps = (state) => {
    return {
        limit: getLimit(state),
        offset: offsetSelector(state),
        countPokemons: getCountPokemons(state)
    }
}

export default connect(mapStateToProps, {getPokemonName, setOffset, setNewArray})(PagesConteiner);