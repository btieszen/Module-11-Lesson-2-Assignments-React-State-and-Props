import MovieListStar from "./MovieList/MovieListStar";
import StarWars from "./MovieInfo/StarWars";
import Ryan from "./MovieInfo/Ryan";
import Forest from "./MovieInfo/Forest";
import MovieListRyan from "./MovieList/MovieListRyan";
import MovieListForest from "./MovieList/MovieListForest";
import DisplayAll from "./MovieDisplay/DisplayAll";
import SciFi from "./MovieDisplay/SciFi";
import RomanticComedy from "./MovieDisplay/RomanticComedy";
import Drama from "./MovieDisplay/Drama";

const App =()=>{
  return(
    <div>
      <h1>Welcome to the Movies</h1>
      <h5>Movie List</h5>
      <MovieListStar/>
      <MovieListRyan/>
      <MovieListForest/>
   
      <h5>Movie Information</h5>
      <StarWars/>
      <Ryan/>
      <Forest/>    

      <h5>Display Movie</h5>
      <DisplayAll/>
      <SciFi/>
      <Drama/>
      <RomanticComedy/>

      
    </div>
  );
}
export default App
