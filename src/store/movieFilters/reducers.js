import { SET_GENRE_FILTER } from './actionTypes';

const initialState = {
  filter: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRE_FILTER: {
      const { filter } = action.payload;
      return { ...state, filter };
    }
    default:
      return state;
  }
}
