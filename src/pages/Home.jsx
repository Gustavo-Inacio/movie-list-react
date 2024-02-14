import { Link } from "react-router-dom";
import config from "../datasoruce/config";
import { getDetailedMovieList } from "../datasoruce/OMDB/apiOMDB";
import { useEffect, useState } from "react";
import CustomSlider from "../components/MovieRow/CustomSlider";
import MovieSlider from "../components/MovieRow/MovieSlider";

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
        <div>
            <MovieSlider movieList={movieListState}></MovieSlider>
        </div>
    );
}