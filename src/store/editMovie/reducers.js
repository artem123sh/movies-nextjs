import {
  EDIT_MOVIE_REQUEST_SUCCESS,
  EDIT_MOVIE_REQUEST_START,
  EDIT_MOVIE_REQUEST_ERROR,
} from './actionTypes';

const initialState = {
  isLoaded: true,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_MOVIE_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case EDIT_MOVIE_REQUEST_START: {
      return {
        ...state,
        isLoaded: true,
      };
    }
    case EDIT_MOVIE_REQUEST_ERROR: {
      const error = action.payload;
      return { ...state, error, isLoaded: true };
    }
    default:
      return state;
  }
}
