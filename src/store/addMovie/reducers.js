import {
  ADD_MOVIE_REQUEST_SUCCESS,
  ADD_MOVIE_REQUEST_ERROR,
  ADD_MOVIE_REQUEST_START,
} from './actionTypes';

const initialState = {
  isLoaded: true,
  error: null,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_REQUEST_START: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case ADD_MOVIE_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoaded: true,
      };
    }
    case ADD_MOVIE_REQUEST_ERROR: {
      const error = action.payload;
      return {
        ...state,
        isLoaded: true,
        error,
      };
    }
    default:
      return state;
  }
}
