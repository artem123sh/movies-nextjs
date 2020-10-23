import {
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_ERROR,
  GET_MOVIES_REQUEST_START,
  SET_MOVIES_SEARCH,
} from './actionTypes';

const initialState = {
  movies: [],
  offset: 0,
  totalAmount: 0,
  error: null,
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST_START: {
      return {
        ...state,
        movies: [],
        offset: 0,
        totalAmount: 0,
      };
    }
    case GET_MOVIES_REQUEST_SUCCESS: {
      const { movies, offset, totalAmount } = action.payload;
      return {
        ...state,
        movies,
        offset,
        totalAmount,
      };
    }
    case GET_MOVIES_REQUEST_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }
    case SET_MOVIES_SEARCH: {
      const { search } = action.payload;
      return { ...state, search };
    }
    default:
      return state;
  }
}
