import {
  SET_SORT_BY,
  SET_SORT_ORDER,
} from './actionTypes';

const initialState = {
  sortBy: 'release_date',
  sortOrder: 'desc',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SORT_BY: {
      const { sortBy } = action.payload;
      return { ...state, sortBy };
    }
    case SET_SORT_ORDER: {
      const { sortOrder } = action.payload;
      return { ...state, sortOrder };
    }
    default:
      return state;
  }
}
