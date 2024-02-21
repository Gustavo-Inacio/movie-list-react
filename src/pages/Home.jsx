import { getDetailedMovieList } from "../datasoruce/OMDB/apiOMDB";
import { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow/MovieRow";
import PropTypes from 'prop-types'
import Spinner from "../components/Spinner/Spinner";

export default function Home ({searchShowQuery, isSearching}) {

    const [movieListState , setMovieListState] = useState([]);
    const [tvShowState , setTvShowState] = useState([]);

    const featchData = async (searchQuery) => {
        let movieList = await getDetailedMovieList({
            s:searchQuery,
            type: "movie"
        });
    
        setMovieListState(movieList);

        let tvShowList = await getDetailedMovieList({
            s: searchQuery,
            type: "series"
        });
    
        setMovieListState(movieList);
        setTvShowState(tvShowList);
    }

    // useEffect(() => {
    //     featchData(searchShowQuery);
    // }, [searchShowQuery]);

    useEffect(() => {
       featchData(searchShowQuery)

    }, [searchShowQuery]);

    return (
        <div className="mt-10">
            {
                isSearching ?
                <div className="w-full flex justify-center">
                    <Spinner />
                </div>
                :
                <div>
                    {
                        <MovieRow  movieList={movieListState} title={`Movies -  "${searchShowQuery}"`}/>
                    }
                    {
                        <MovieRow  movieList={tvShowState} title={`Series - "${searchShowQuery}"`} />
                    }
                </div>
            }
            
        </div>
    );
}

Home.propTypes = {
    searchShowQuery : PropTypes.string,
    isSearching: PropTypes.bool
}
