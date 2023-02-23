import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async () => {
  const { data } = await axios.get('/trending/movie/day?api_key=a9d3196f8acbb12790272eb65b7ad534');
  const movies = data;

  return movies;
};

export const fetchMoviesByQuery = async (query) => {
    const { data } = await axios.get(`/search/movie?api_key=a9d3196f8acbb12790272eb65b7ad534&query=${query}&language=en-US&page=1`);
    return data.results;
  };
  
  export const fetchMovieById = async (id) => {
    const { data } = await axios.get(`/movie/${id}?api_key=a9d3196f8acbb12790272eb65b7ad534&language=en-US`);
    return data;
  };

  export const fetchMovieCast = async (id) => {
    const { data } = await axios.get(
      `/movie/${id}/credits?api_key=a9d3196f8acbb12790272eb65b7ad534&language=en-US`
    );
    return data;
  };

  export const fetchMovieRewievs = async (id) => {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=a9d3196f8acbb12790272eb65b7ad534&language=en-US`);
    return data;
  };


