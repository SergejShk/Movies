interface IGenre {
    id: number;
    name: string;
}
export interface IFilm {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: string | null; 
    budget?: number;
    genre_ids: number[];
    genres?: IGenre[];
    homepage?: string;
    id: number;
    imdb_id?: string;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: never[];
    production_countries?: never[];
    release_date: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: never[];
    status?: string;
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}