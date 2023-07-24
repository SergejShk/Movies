import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import MovieInfo from "./MovieInfo";

import { getFilmById } from "../../services/apiService";
import AdditionalInfoNav from "./AdditionalInfoNav";

const MovieDetails = () => {
    const [film, setFilm] = useState([]);

    const { movieId } = useParams();

    const getFilm = async (movieId: string) => {
        const data = await getFilmById(movieId)

        setFilm(data)
    } 

    useEffect(() => {
        if (!movieId) return

        getFilm(movieId)
    }, [movieId]);

    if (!film) {
        return null;
    }
    
    return (
        <>
            <MovieInfo movie={film}/>

            <AdditionalInfoNav />
            <Outlet />
        </>
    );
}

export default MovieDetails;