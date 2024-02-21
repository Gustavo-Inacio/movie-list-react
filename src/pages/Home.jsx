import { getDetailedMovieList } from "../datasoruce/OMDB/apiOMDB";
import { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow/MovieRow";

export default function Home () {

    const [movieListState , setMovieListState] = useState([]);

    useEffect( () => {
        const featchData = async () => {
            let movieList = await getDetailedMovieList({
                s:"Game of",
            });
        
            setMovieListState(movieList);
            console.log(movieList);

        }

        featchData();

    }, []);


    return (
        <div className="mt-10">
            <MovieRow  movieList={movieListState} title={"Results for "}></MovieRow>
        </div>
    );
}