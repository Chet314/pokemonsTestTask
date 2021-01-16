import React from 'react';
import styles from './pages.module.css';

const Pages = React.memo((props)=>{
    
    let page = Math.ceil(props.countPokemons/props.limit);
    let pages = [];
    for(let i = 1; i <= page; i++){
        pages.push(i);
    }
    
     let pageNumber = props.offset/props.limit + 1;
    
    return(

            <div className={styles.pages}>
                    {pages.map(p => {return <span key={p} onClick={()=>{props.onPageChanged(p)}} className={pageNumber === p ? styles.br : styles.br2}>{p}</span>;})}
            </div>
       
    );
});

export default Pages;