import { Link, useParams } from "react-router-dom";
import MovieDisplay from "../components/MovieDisplay/MovieDisplay";
import { useEffect, useState } from "react";
import { getDetailedMovie } from "../datasoruce/OMDB/apiOMDB";
import DetailedShowDTO from "../model/dto/DetailedShow.dto";

export default function MoviePage() {

    const { imdbID } = useParams();

    const [ movieData, setMovieData ] = useState();

    const featchMovieData = async (imdbID) => {

        try {
            const movie = await getDetailedMovie(imdbID);
            setMovieData(new DetailedShowDTO(movie));
        } catch (error) {
            setMovieData(null);
        }
    }

    useEffect(() => {
        featchMovieData(imdbID);
      
    }, []);

    return (
        <div>
            {
                !movieData ?
                <> 
                    <section className="text-white flex flex-col p-10 justify-center items-center">
                        <h1 className="text-5xl w-full text-center mb-10">Movie Not Found</h1>
                        <Link to="/" className="w-fit" style={{
                            padding: '6px 10px',
                            backgroundColor: '#2578a9',
                            borderRadius: '6px'
                        }}>Go Home</Link>
                    </section>
                </> 
                :
                <MovieDisplay detailedShowDTO={movieData} />
            }

        </div>
    );
}