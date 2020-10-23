import React from 'react';
import SearchMovie from '../../contairnes/SearchMovie';
import Movies from '../../contairnes/Movies';

import wrapper from '../../store';
import { getMovies } from '../../store/movies/actions';

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, params }) => {
    const { query: [search] } = params;
    const {
      movies: { offset },
      moviesSorting: { sortBy, sortOrder },
      movieFilters: { filter },
    } = store.getState();
    return store.dispatch(getMovies({
      filter, offset, sortBy, sortOrder, search,
    }));
  },
);

const SearchPage = () => (
  <>
    <SearchMovie />
    <Movies />
  </>
);

export default SearchPage;
