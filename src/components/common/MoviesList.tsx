import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

import { IFilm } from "../../interfaces/films";

interface IProps {
    films: IFilm[];
}

const MoviesList = ({films}: IProps) => {
    const location = useLocation()

    return (
        <>
            <Title>Trending today</Title>
            <List>
                {films.map((film) => (
                    <FilmItem key={film.id}>
                        <FilmLink 
                            to={`movies/${film.id}`}
                            state={{from: location}}
                        >
                            {film.title}
                        </FilmLink>
                    </FilmItem>
                ))}
            </List>
        </>
    );
}

export default MoviesList;

const Title = styled.h2`
   color: #534f4f;
   margin: 0;
   font-size: 28px;
   font-weight: 600;
`

const List = styled.ul`
    padding: 15px 0;
`

const FilmItem = styled.li`
    margin-bottom: 5px;
`

const FilmLink = styled(Link)`
    color: #534f4f;

    &:hover {
        color: #f05858;
    }
`