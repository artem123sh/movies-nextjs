import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../basic/Modal';
import Label from '../basic/Label';
import Button from '../basic/Button';
import MovieForm from '../forms/MovieForm';

const StyledLabel = styled(Label)`
  margin-bottom: 0.5rem;
`;

const StyledPermanentValue = styled(Label)`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  display: block;
  font-size: 1.5rem;
  color: inherit;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const EditMovieModal = ({
  onClose, movie, editMovie, movieId,
}) => (
  <Modal size="small" title="edit movie" onClose={onClose}>
    <StyledLabel>Movie Id</StyledLabel>
    <StyledPermanentValue>{movieId}</StyledPermanentValue>
    <MovieForm
      movie={movie}
      onSubmit={editMovie}
      // PATTERN: render props
      resetAction={(onReset) => <StyledButton variant="outlined" size="large" onClick={onReset}>Reset</StyledButton>}
      submitAction={(onSubmit) => <StyledButton variant="contained" size="large" onClick={onSubmit}>Save</StyledButton>}
    />
  </Modal>
);

EditMovieModal.propTypes = {
  movieId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  movie: PropTypes.shape().isRequired,
  editMovie: PropTypes.func.isRequired,
};

export default EditMovieModal;
