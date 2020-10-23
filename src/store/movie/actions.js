import axios from 'axios';
import {
  GET_MOVIE_REQUEST_START,
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_ERROR,
} from './actionTypes';

export const getMovieRequestSuccess = (movie) => ({
  type: GET_MOVIE_REQUEST_SUCCESS,
  payload: movie,
});

export const getMovieRequestStart = () => ({
  type: GET_MOVIE_REQUEST_START,
});

export const getMovieRequestError = (error) => ({
  type: GET_MOVIE_REQUEST_ERROR,
  payload: { error },
});

export const getMovie = (movieId) => async (dispatch, getState, apiUrl) => {
  const cachedMovie = getState().movies.movies.find((({ id }) => id === movieId));
  if (!cachedMovie) {
    dispatch(getMovieRequestStart());
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const { data: movie } = await axios.get(`${apiUrl}/${movieId}}`);
          dispatch(getMovieRequestSuccess(movie));
          return resolve();
        } catch (err) {
          dispatch(getMovieRequestError(err.message));
          return reject(err);
        }
      })();
    });
  }
  return Promise.resolve(dispatch(getMovieRequestSuccess(cachedMovie)));
};
