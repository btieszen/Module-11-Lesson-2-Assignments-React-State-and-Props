

import { Component } from 'react';
import Movie from '../Movie';
import '../MovieStyles.css'


import { useState } from 'react';


const MovieListStar =() =>{
    const [showAbout,setShowAbout]=useState(true);

    return(
        <section>
            {showAbout && (
                <>
       
                <h3>Star Wars</h3>
                </>
            )}
            <button onClick={() => setShowAbout(!showAbout)}>
                {showAbout ? 'Remove From List':
                'Add Star Wars'}
            </button>
        
        </section>
    );
};

export default MovieListStar;