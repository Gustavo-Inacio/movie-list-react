import MovieRowHeader from "./MovieRowHeader";
import MovieSlider from "./MovieSlider";
import PropTypes from 'prop-types'

const MovieRow = ({movieList, title}) => {
    return (
        <div className="movie-row">
            <MovieRowHeader title={title} />
            <MovieSlider movieList={movieList} />
        </div>
    );
}

MovieRow.propTypes = {
    movieList : PropTypes.array,
    title: PropTypes.string
}

export default MovieRow;