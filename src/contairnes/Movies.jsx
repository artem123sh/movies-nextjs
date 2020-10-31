import React, {
  useState, useCallback, useMemo,
} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import MoviesGrid from '../components/grids/MoviesGrid';
import EditMovieModal from '../components/modals/EditMovieModal';
import DeleteMovieModal from '../components/modals/DeleteMovieModal';
import { getMovies as getMoviesAction } from '../store/movies/actions';
import { handleSortByChange as handleSortByChangeAction } from '../store/moviesSorting/actions';
import { setGenreFilter as setGenreFilterAction } from '../store/movieFilters/actions';
import { editMovie as editMovieAction } from '../store/editMovie/actions';
import { deleteMovie as deleteMovieAction } from '../store/deleteMovie/actions';
import { DESC_ORDER, ASC_ORDER } from '../constants';
import useDidUpdateEffect from '../hooks/useDidUpdateEffect';

const Movies = ({
  movies, offset, totalAmount, getMovies, filter, setGenreFilter, sortBy,
  sortOrder, handleSortByChange, editMovie, deleteMovie,
}) => {
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const { query } = useRouter();
  const { query: [search] = [''] } = query;

  const toggleDeleteMovie = (movieId) => setDeleteModal(
    (currentDeleteModal) => (currentDeleteModal ? null : movieId),
  );

  const handleEditMovie = (movieId) => setEditModal(movieId);

  const handleEditClose = () => {
    setEditModal(null);
  };

  const getMoviesCb = useCallback(async () => {
    await getMovies({
      filter, offset, sortBy, sortOrder, search,
    });
  }, [filter, offset, sortBy, sortOrder, search]);

  useDidUpdateEffect(() => {
    getMoviesCb();
  }, [getMoviesCb]);

  const movie = useMemo(() => movies.find(({ id }) => id === editModal), [editModal]);

  const handleMovieEdit = async (movieToEdit) => {
    await editMovie(editModal, movieToEdit);
    getMoviesCb();
    handleEditClose();
  };

  const handleDeleteEdit = async () => {
    await deleteMovie(deleteModal);
    getMoviesCb();
    setDeleteModal(null);
  };

  return (
    <>
      <MoviesGrid
        filter={filter}
        sortBy={sortBy}
        movies={movies}
        totalAmount={totalAmount}
        handleEditMovie={handleEditMovie}
        toggleDeleteMovie={toggleDeleteMovie}
        handleFilterChange={setGenreFilter}
        handleSortChange={handleSortByChange}
      />
      {editModal && (
        <EditMovieModal
          onClose={handleEditClose}
          movie={movie}
          movieId={editModal}
          editMovie={handleMovieEdit}
        />
      )}
      {deleteModal && (
      <DeleteMovieModal
        deleteMovie={handleDeleteEdit}
        onClose={toggleDeleteMovie}
      />
      )}
    </>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  totalAmount: PropTypes.number.isRequired,
  setGenreFilter: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  handleSortByChange: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf([DESC_ORDER, ASC_ORDER]).isRequired,
};

const mapStateToProps = (state) => {
  const {
    movies: { movies, offset, totalAmount },
    moviesSorting: { sortBy, sortOrder },
    movieFilters: { filter },
  } = state;
  return {
    movies, offset, totalAmount, filter, sortBy, sortOrder,
  };
};

export default connect(mapStateToProps, {
  getMovies: getMoviesAction,
  setGenreFilter: setGenreFilterAction,
  handleSortByChange: handleSortByChangeAction,
  editMovie: editMovieAction,
  deleteMovie: deleteMovieAction,
})(Movies);
