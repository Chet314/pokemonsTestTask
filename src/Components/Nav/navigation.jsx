import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navigation.module.css';


const Navigation = React.memo((props)=>{

let pokemonNamesElement = props.pokemonNamesUpperCase.map(pokemonName => 
    <div key = {pokemonName}>
       <NavLink to = {"/pokemon/" +pokemonName}>{pokemonName}</NavLink>
    </div>

    );

    return(
        <div className={styles.wrapper}>
            {pokemonNamesElement}
        </div>
    );
});

export default Navigation;