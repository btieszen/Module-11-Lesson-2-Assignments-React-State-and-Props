class MovieList extends Component{

    constructor (props){
        super(props);
        this.state={
            movies: [{id:1,title:'Star Wars'},
            {id:2,title:'Saving Private Ryan'},
            {id:3,title:'Forest Gump'},
            ]
        };
    };
    render(){
        return(
            <div className="movie-list">
                <h2>Favorite Movie List</h2>
                <ul>
                    {this.state.movies.map((movie) => (<Movie key={movie.id} title={movie.title}/>
                    ))}
                </ul>
               
            </div>
         
        );
    }
}
    export default MovieList;