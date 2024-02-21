import MovieRowHeader from "./MovieRowHeader";
import MovieSlider from "./MovieSlider";
import PropTypes from 'prop-types'

const MovieRow = ({movieList, title}) => {
    return (
        <div className="movie-row mt-10">
            {
                movieList.length > 0 ?
                <> 
                    <MovieRowHeader title={'Results for: ' + title} />
                    <MovieSlider movieList={movieList} />
                </>
                :
                <> 
                    <MovieRowHeader title={'Results not found for: ' + title} />
                </>
            }
        </div>
    );
}

MovieRow.propTypes = {
    movieList : PropTypes.array,
    title: PropTypes.string
}

export default MovieRow;