import '../MovieStyles.css'


import { useState } from 'react';


const MovieListForest =() =>{
    const [showAbout,setShowAbout]=useState(true);

    return(
        <section>
            {showAbout && (
                <>
       
                <h3>Forest Gump</h3>
                </>
            )}
            <button onClick={() => setShowAbout(!showAbout)}>
                {showAbout ? 'Remove From List':
                'Add Forest Gump'}
            </button>
        
        </section>
    );
};

export default MovieListForest;