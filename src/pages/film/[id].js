import React from 'react';
import MovieDetails from '../../contairnes/MovieDetails';
import Movies from '../../contairnes/Movies';

import wrapper from '../../store';
import { getMovie } from '../../store/movie/actions';
import { getMovies } from '../../store/movies/actions';

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, params }) => {
    const { id } = params;
    store.dispatch(getMovie(Number(id)));
    const {
      movies: { offset },
      moviesSorting: { sortBy, sortOrder },
      movieFilters: { filter },
    } = store.getState();
    return store.dispatch(getMovies({
      filter, offset, sortBy, sortOrder, search: '',
    }));
  },
);

const SearchPage = () => (
  <>
    <MovieDetails />
    <Movies />
  </>
);

export default SearchPage;
