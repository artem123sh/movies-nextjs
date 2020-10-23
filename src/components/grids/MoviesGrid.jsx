import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BACKGROUND } from '../../theme';
import GridControls from './MoviesGridControls';
import MoviesFoundLabel from './MoviesTotalFoundLabel';
import MovieGridItem from './MoviesGridItem';
import NoMovieFound from './NoMovieFound';

const StyledContainer = styled.div`
  flex-grow: 1;
  background: ${BACKGROUND};
  padding: 0 5%;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));;
  grid-row-gap: 3vh;
  grid-column-gap: 3vw;
  height: auto;
`;

const MoviesGrid = ({
  filter, sortBy, movies, handleEditMovie, toggleDeleteMovie, handleFilterChange,
  handleSortChange, totalAmount,
}) => (
  <StyledContainer>
    <GridControls
      filter={filter}
      sortBy={sortBy}
      handleFilterChange={handleFilterChange}
      handleSortChange={handleSortChange}
    />
    {movies.length ? (
      <>
        <MoviesFoundLabel number={totalAmount} />
        <Grid>
          {movies.map((movie) => (
            <MovieGridItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              posterPath={movie.poster_path}
              genres={movie.genres}
              handleEditMovie={handleEditMovie}
              toggleDeleteMovie={toggleDeleteMovie}
            />
          ))}
        </Grid>
      </>
    ) : <NoMovieFound />}
  </StyledContainer>
);

MoviesGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
  handleEditMovie: PropTypes.func.isRequired,
  toggleDeleteMovie: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default MoviesGrid;
