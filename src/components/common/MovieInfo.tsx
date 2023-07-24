import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { IFilm } from '../../interfaces/films';

interface IProps {
    movie: IFilm
}

const MovieInfo = ({movie}: IProps) => {
    const location = useLocation()

    const poster = movie.poster_path
    const title = movie.title
    const voteAverage = (movie.vote_average * 10).toFixed(2)
    const overview = movie.overview
    const genres = movie.genres || []

    return (
        <MovieInfoStyled>
            <BtnGoBack to={location.state.from ?? '/'}>
                Go back
            </BtnGoBack>

            <MovieInfoWrapper>
    
                {poster && (
                    <PosterImg
                        src={`https://image.tmdb.org/t/p/w500${poster}`}
                        alt={title}
                        width='350px'
                    />
                )}

                <InfoWrapprer>
                    <MovieTitle>{title}</MovieTitle>
                    <Row>
                        <InfoLabel>User Score:</InfoLabel>
                        <InfoValue>{voteAverage}%</InfoValue>
                    </Row>
                    <Row>
                        <InfoLabel>Overview:</InfoLabel>
                        <InfoValue>{overview}</InfoValue>
                    </Row>
                    <Row>
                        <InfoLabel>Genres:</InfoLabel>
                        <GenresList>
                            {genres.length > 0 && genres.map(genre => (
                                <GenreItem key={genre.id}>{genre.name}</GenreItem>
                            ))}
                        </GenresList>
                    </Row>
                </InfoWrapprer>
            </MovieInfoWrapper>
        </MovieInfoStyled>
    );
}

export default MovieInfo;

const MovieInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
`

const MovieInfoWrapper = styled.div`
    display: flex;
    gap: 15px;
`

const BtnGoBack = styled(Link)`
    background-color: #f05858;
    color: #534f4f;
    padding: 10px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;

    &:hover {
        background-color: #ea4545; 
    }
`

const PosterImg = styled.img`
    display: block;
    width: 350px;
`

const InfoWrapprer = styled.div`
    display: flex;
    flex-direction: column;
`

const MovieTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 15px;
`

const Row = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
`

const InfoLabel = styled.p`
    font-size: 20px;
    font-weight: 600;
`

const InfoValue = styled.p`
    font-size: 20px;
    font-weight: 500;
`

const GenresList = styled.ul`
    
`

const GenreItem = styled.li`
    font-size: 20px;
    font-weight: 500;
`