import axios from 'axios';
import {
  GET_MOVIES_REQUEST_START,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_ERROR,
  SET_MOVIES_SEARCH,
} from './actionTypes';

export const getMoviesRequestSuccess = (movies) => ({
  type: GET_MOVIES_REQUEST_SUCCESS,
  payload: movies,
});

export const getMoviesRequestStart = () => ({
  type: GET_MOVIES_REQUEST_START,
});

export const getMoviesRequestError = (error) => ({
  type: GET_MOVIES_REQUEST_ERROR,
  payload: { error },
});

export const setMoviesSearch = (search) => ({
  type: SET_MOVIES_SEARCH,
  payload: { search },
});

export const getMovies = (
  {
    filter, offset: currentOffset, sortBy, sortOrder, search,
  },
) => async (dispatch, getState, apiUrl) => {
  const previousSearch = getState().movies.search;
  const urlSearchParams = new URLSearchParams({
    filter, offset: currentOffset, sortBy, sortOrder, search: search || previousSearch, searchBy: search || previousSearch ? 'title' : '',
  });
  if (search) {
    dispatch(setMoviesSearch(search));
  }
  dispatch(getMoviesRequestStart());
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const {
          data: { data: movies, totalAmount, offset },
        } = await axios.get(`${apiUrl}?limit=9&${urlSearchParams.toString()}`);
        dispatch(getMoviesRequestSuccess({ movies, totalAmount, offset }));
        return resolve();
      } catch (err) {
        dispatch(getMoviesRequestError(err.message));
        return reject(err);
      }
    })();
  });
};
