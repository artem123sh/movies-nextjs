import axios from 'axios';
import {
  EDIT_MOVIE_REQUEST_START,
  EDIT_MOVIE_REQUEST_SUCCESS,
  EDIT_MOVIE_REQUEST_ERROR,
} from './actionTypes';

export const editMovieRequestSuccess = () => ({
  type: EDIT_MOVIE_REQUEST_SUCCESS,
});

export const editMovieRequestStart = () => ({
  type: EDIT_MOVIE_REQUEST_START,
});

export const editMovieRequestError = (error) => ({
  type: EDIT_MOVIE_REQUEST_ERROR,
  payload: { error },
});

export const editMovie = (movieId, movie) => async (dispatch, getState, apiUrl) => {
  dispatch(editMovieRequestStart());
  try {
    const editedMovie = await axios.put(apiUrl, { ...movie, id: movieId });
    dispatch(editMovieRequestSuccess(editedMovie));
    return Promise.resolve(editedMovie);
  } catch (err) {
    dispatch(editMovieRequestError(err.message));
    return Promise.reject(err);
  }
};
