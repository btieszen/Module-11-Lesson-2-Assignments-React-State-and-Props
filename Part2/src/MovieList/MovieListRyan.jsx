
import '../MovieStyles.css'


import { useState } from 'react';


const MovieListRyan =() =>{
    const [showAbout,setShowAbout]=useState(true);

    return(
        <section>
            {showAbout && (
                <>
       
                <h3>Saving Private Ryan</h3>
                </>
            )}
            <button onClick={() => setShowAbout(!showAbout)}>
                {showAbout ? 'Remove From List':
                'Add Saving Private Ryan'}
            </button>
        
        </section>
    );
};

export default MovieListRyan;