import { string } from "prop-types";

const Movie = ({title}) => {
    return(
        <li classname="movie-item">{title}</li>
    );
};

Movie.propTypes = {
    title:string,
}
export default Movie;