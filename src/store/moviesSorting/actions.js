import {
  SET_SORT_BY,
  SET_SORT_ORDER,
} from './actionTypes';
import { DESC_ORDER, ASC_ORDER } from '../../constants';

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: { sortBy },
});

export const setSortOrder = (sortOrder) => ({
  type: SET_SORT_ORDER,
  payload: { sortOrder },
});

export const handleSortByChange = (sortBy) => async (dispatch, getState) => {
  const currentSortBy = getState().moviesSorting.sortBy;
  if (currentSortBy !== sortBy) {
    dispatch(setSortBy(sortBy));
    dispatch(setSortOrder(DESC_ORDER));
  } else {
    const currentSortOrder = getState().moviesSorting.sortOrder;
    dispatch(setSortOrder(
      currentSortOrder === DESC_ORDER ? ASC_ORDER : DESC_ORDER,
    ));
  }
};
