import DetailedShowDTO from "../../model/dto/DetailedShow.dto";
import config_OMDB from "../config";

export const getMovieList = async (query = {}) => {
    let stringQuery = '';
    for(let i in query){
        stringQuery += `&`;
        stringQuery += `${i}=${query[i]}`;
    }

    let movieList = await fetch(`${config_OMDB.BASE_URL}?apikey=${config_OMDB.API_KEY}${stringQuery}`);
    movieList = await movieList.json();
    return movieList;
}

export const getDetailedMovie = async (movieId) => {
    let detailedMovie = await fetch(`${config_OMDB.BASE_URL}?apikey=${config_OMDB.API_KEY}&i=${movieId}`);
    detailedMovie = await detailedMovie.json();

    if (detailedMovie['Response'] == "False") {
        throw new Error(detailedMovie);
    }

    return detailedMovie;
}

export const getDetailedMovieList = async(query = {}) => {
    let { Response, Search } = await getMovieList(query);

    if (Response == "False") {
        return []
    }

    const detailedMovies = Promise.all(
        Search.map(async (movie) => {
            const detailedMovieFetched = await getDetailedMovie(movie.imdbID);
            const detailedMovieDTO = new DetailedShowDTO(detailedMovieFetched);
            
            return detailedMovieDTO;
        }),
    ).then(movies => movies);

    return detailedMovies;
}