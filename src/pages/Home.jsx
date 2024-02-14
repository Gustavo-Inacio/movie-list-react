import { Link } from "react-router-dom";
import config from "../datasoruce/config";
import { getDetailedMovieList } from "../datasoruce/OMDB/apiOMDB";
import { useEffect } from "react";

export default function Home () {

    useEffect( () => {
        const featchData = async () => {
            let movieList = await getDetailedMovieList({
                s:"Game of",
            });
        
            console.log(movieList);

        }

        featchData();

    }, []);


    return (
        <div>
            URLS: {config.BASE_URL}
            <Link to="/other">Other</Link>
        </div>
    );
}