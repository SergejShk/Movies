import { IFilm } from '../../interfaces/films';

interface IProps {
    film: IFilm
}

const MovieInfo = ({film}: IProps) => {
    console.log(film)

    return (
        <div>Movie Info</div>
    );
}

export default MovieInfo;