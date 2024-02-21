import { getDetailedMovieList } from "../datasoruce/OMDB/apiOMDB";
import { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow/MovieRow";
import PropTypes from 'prop-types'

export default function Home ({searchShowQuery}) {

    const [movieListState , setMovieListState] = useState([]);

    useEffect( () => {
        const featchData = async () => {
            let movieList = await getDetailedMovieList({
                s:"Game of",
            });
        
            setMovieListState(movieList);

        }

        featchData();

    }, []);

    useEffect(() => {

        if (!searchShowQuery) {
            return;
        }

        const featchData = async () => {
            let movieList = await getDetailedMovieList({
                s:searchShowQuery,
            });

            setMovieListState(movieList);
            console.log(movieList);
        }

        featchData();

    }, [searchShowQuery]);


    return (
        <div className="mt-10">
            <MovieRow  movieList={movieListState} title={"Results for "}></MovieRow>
        </div>
    );
}

Home.propTypes = {
    searchShowQuery : PropTypes.string,
}
