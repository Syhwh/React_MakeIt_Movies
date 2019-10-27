import axios from 'axios';

const MoviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: process.env.REACT_APP_API_KEY
  },
  timeout: 1000

});

export default MoviesApi;