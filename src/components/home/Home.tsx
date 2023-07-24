import { useEffect, useState } from "react";

import MoviesList from "../common/MoviesList";

import { getTrendingFilms } from "../../services/apiService";

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);

    const getFilms = async () => {
        const data = await getTrendingFilms()

        setTrendingFilms(data.results)
    } 

    useEffect(() => {
        getFilms()
    }, []);

    return (
        <MoviesList films={trendingFilms}/>
    );
}

export default Home;