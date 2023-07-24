import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import { ICast } from "../../interfaces/cast";

import { getCast } from "../../services/apiService";

const Cast = () => {
    const [casts, setCasts] = useState([])
    const { movieId } = useParams();

    const getCasts = async (movieId: string) => {
        const data = await getCast(movieId)

        setCasts(data)
    } 

    useEffect(() => {
        if (!movieId) return

        getCasts(movieId)
    }, [movieId]);

    if (casts.length < 1) return null;

    return (
        <CastList>
            {casts.map((cast: ICast) => cast.profile_path && (
                    <CastItem key={cast.credit_id}>
                        {cast.profile_path && (
                            <CastImg
                                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                alt={cast.name}
                            />
                        )}
                        <h3>{cast.name}</h3>
                        <p>Character: {cast.character}</p>
                    </CastItem>
                )
            )}
      </CastList>
    );
}

export default Cast;

const CastList = styled.ul`
   display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto; 
`

const CastItem = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

const CastImg = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`