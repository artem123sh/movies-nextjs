import { SET_GENRE_FILTER } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setGenreFilter = (filter) => ({
  type: SET_GENRE_FILTER,
  payload: { filter },
});
