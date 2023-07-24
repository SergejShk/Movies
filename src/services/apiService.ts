import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '82c59d753050746a09d77670604a0453';

export const getTrendingFilms = async () => {
    try {
      const response = await axios.get(
        `${URL}/trending/movie/week?api_key=${KEY}`
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getFilmById = async (id: string) => {
    try {
      const response = await axios.get(
        `${URL}movie/${id}?api_key=${KEY}&language=en-US`
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };