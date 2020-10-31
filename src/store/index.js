// import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import movies from './movies/reducers';
import movie from './movie/reducers';
import moviesSorting from './moviesSorting/reducers';
import movieFilters from './movieFilters/reducers';

const rootReducer = combineReducers(
  {
    movie, movies, moviesSorting, movieFilters,
  },
);

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.movies.totalAmount) {
      nextState.movies = state.movies;
    }
    return nextState;
  }
  return rootReducer(state, action);
};

const initStore = () => createStore(
  reducer, applyMiddleware(thunk.withExtraArgument(process.env.NEXT_PUBLIC_MOVIES_API_URL)),
);

const wrapper = createWrapper(initStore);

export default wrapper;
