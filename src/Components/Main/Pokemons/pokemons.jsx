import React from 'react';
import styles from './pokemons.module.css';
import {NavLink} from 'react-router-dom';
import pokeBall from '../../Images/pokeBall.png';


const Pokemons = React.memo((props)=>{

    return(
        <div className = {styles.wrapper}>
            <div className = {styles.main}>
                {
                    props.pokemons.map(element => 
                    <div key = {element.name} className = {styles.pokemonProperty}>
                        <NavLink to ={"/pokemon/" + element.name}>
                         <img src={element.sprites.front_default || pokeBall} alt = "pokemonImg" /> </NavLink>
                             <p>{element.name}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
});

export default Pokemons;