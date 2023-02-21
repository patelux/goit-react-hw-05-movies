import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async () => {
  const { data } = await axios.get('/trending/movie/day?api_key=a9d3196f8acbb12790272eb65b7ad534');
  const movies = data;

  return movies;
};

export const fetchMoviesByQuery= async (query) => {
    const { data } = await axios.get(`/configuration?api_key=a9d3196f8acbb12790272eb65b7ad53`);
    return data;
  };

  export const fetchMovieById= async (movie_id) => {
    const { data } = await axios.get(`/movie/{movie_id}?api_key=a9d3196f8acbb12790272eb65b7ad53&language=en-US`);
    return data;
  };

  export const fetchMovieCredits= async (movie_id) => {
    const { data } = await axios.get(`/movie/{movie_id}/reviews?api_key=a9d3196f8acbb12790272eb65b7ad53&language=en-US`);
    return data;
  };

  export const fetchMovieRewievs= async (movie_id, page=1) => {
    const { data } = await axios.get(`/movie/{movie_id}/credits?api_key=a9d3196f8acbb12790272eb65b7ad53&language=en-US&page={page}`);
    return data;
  };


// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// import axios from 'axios';

