import React from 'react';
import preloader from '../Images/preloaderImg.gif';
import style from './preloader.module.css';

const Preloader = React.memo(() =>{
    return(
        <div className = {style.wrapper}>
            <img src = {preloader} alt = 'preloader' />
            
        </div>
    );
});

export default Preloader;