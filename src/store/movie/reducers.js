import {
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_ERROR,
  GET_MOVIE_REQUEST_START,
} from './actionTypes';

const initialState = {
  movie: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_REQUEST_START: {
      return {
        ...state,
        error: null,
        movie: null,
      };
    }
    case GET_MOVIE_REQUEST_SUCCESS: {
      const movie = action.payload;
      return {
        ...state,
        movie,
      };
    }
    case GET_MOVIE_REQUEST_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }
    default:
      return state;
  }
}
