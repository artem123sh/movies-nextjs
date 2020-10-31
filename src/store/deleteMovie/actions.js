import axios from 'axios';
import {
  DELETE_MOVIE_REQUEST_START,
  DELETE_MOVIE_REQUEST_SUCCESS,
  DELETE_MOVIE_REQUEST_ERROR,
} from './actionTypes';

export const deleteMovieRequestSuccess = () => ({
  type: DELETE_MOVIE_REQUEST_SUCCESS,
});

export const deleteMovieRequestStart = () => ({
  type: DELETE_MOVIE_REQUEST_START,
});

export const deleteMovieRequestError = (error) => ({
  type: DELETE_MOVIE_REQUEST_ERROR,
  payload: { error },
});

export const deleteMovie = (movieId) => async (dispatch, getState, apiUrl) => {
  dispatch(deleteMovieRequestStart());
    try {
      const result = await axios.delete(`${apiUrl}/${movieId}`);
      dispatch(deleteMovieRequestSuccess());
      return Promise.resolve(result);
    } catch (err) {
      dispatch(deleteMovieRequestError(err.message));
      return Promise.reject(err);
    }
};
