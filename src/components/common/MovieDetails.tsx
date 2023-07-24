import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieInfo from "./MovieInfo";

import { getFilmById } from "../../services/apiService";

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
        <MovieInfo film={film}/>
    );
}

export default MovieDetails;