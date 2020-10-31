import axios from 'axios';
import {
  ADD_MOVIE_REQUEST_START,
  ADD_MOVIE_REQUEST_SUCCESS,
  ADD_MOVIE_REQUEST_ERROR,
} from './actionTypes';

export const addMovieRequestSuccess = () => ({
  type: ADD_MOVIE_REQUEST_SUCCESS,
});

export const addMovieRequestStart = () => ({
  type: ADD_MOVIE_REQUEST_START,
});

export const addMovieRequestError = (error) => ({
  type: ADD_MOVIE_REQUEST_ERROR,
  payload: { error },
});

export const addMovie = (movie) => async (dispatch, getState, apiUrl) => {
  dispatch(addMovieRequestStart());
  try {
    const result = await axios.post(apiUrl, movie);
    dispatch(addMovieRequestSuccess());
    return Promise.resolve(result);
  } catch (err) {
    dispatch(addMovieRequestError(err.message));
    return Promise.reject(err);
  }
};
