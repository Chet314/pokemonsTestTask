import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './pokemon.module.css';
import spitz from '../../Images/spitz.png';

const Pokemon = React.memo((props) => {

    let type = props.pokemon.abilities.map(element => element.ability.name + ' / ');
    let ability = props.pokemon.types.map(element => element.type.name + ' / ');
    let name = props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1);

    return (
        <div className={style.wrapper} >
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <NavLink to="/"> <img src={props.pokemon.img || spitz} alt='pokemonImg' /></NavLink>
            </div>
            <div className={style.main} >
                <p>#{props.pokemon.id}</p>
                <p>Type: {type}</p>
                <p>Ability: {ability}</p>
                <p>Height: {props.pokemon.height}</p>
                <p>Weight: {props.pokemon.weight}</p>
            </div>
        </div>
    );
});

export default Pokemon;