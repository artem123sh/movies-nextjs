import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import AddMovieModal from '../components/modals/AddMovieModal';
import { addMovie as addMovieAction } from '../store/addMovie/actions';
import { getMovies as getMoviesAction } from '../store/movies/actions';
import { DESC_ORDER, ASC_ORDER } from '../constants';

const SearchMovie = ({
  addMovie, getMovies, filter, offset, sortBy, sortOrder,
}) => {
  const [addMovieModal, setAddMovieModal] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const toggleAddMovieModal = () => {
    setAddMovieModal((newAddMovieModal) => !newAddMovieModal);
  };

  const handleSearch = async () => {
    if (search) {
      router.push(`/search/${search}`);
    }
  };

  const handleMovieAdd = async (movieToAdd) => {
    await addMovie(movieToAdd);
    await getMovies({
      filter, offset, sortBy, sortOrder, search,
    });
    setAddMovieModal(false);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header
        toggleAddMovieModal={toggleAddMovieModal}
        handleSearch={handleSearch}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {addMovieModal && (
        <AddMovieModal
          handleMovieAdd={handleMovieAdd}
          onClose={toggleAddMovieModal}
        />
      )}
    </>
  );
};

SearchMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf([DESC_ORDER, ASC_ORDER]).isRequired,
};

const mapStateToProps = (state) => {
  const {
    movies: { offset },
    moviesSorting: { sortBy, sortOrder },
    movieFilters: { filter },
  } = state;
  return {
    offset, filter, sortBy, sortOrder,
  };
};

export default connect(mapStateToProps, {
  addMovie: addMovieAction,
  getMovies: getMoviesAction,
})(SearchMovie);
