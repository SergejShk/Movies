import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MoviesList from "../common/MoviesList";

import SearchBar from "./SearchBar";

import { getFilmsBySearch } from "../../services/apiService";

const Movies = () => {
    const [searchParams] = useSearchParams();

    const [dataFilms, setDataFilms] = useState([]);
       
    const getMoviesBySearch = async (movieId: string) => {
        const data = await getFilmsBySearch(movieId)

        setDataFilms(data.results)
    } 

    useEffect(() => {
        const query = searchParams.get('q');

        if (!query) return;

        getMoviesBySearch(query)
    }, [searchParams]);

    return (
        <>
            <SearchBar />
            {dataFilms.length > 0 && (
                 <MoviesList films={dataFilms}/>
            )}
        </>
    );
}

export default Movies;