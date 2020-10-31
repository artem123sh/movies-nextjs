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

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
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
    <MovieForm movie={movie} onSubmit={editMovie}>
      <StyledActionContainer>
        <StyledButton variant="outlined" size="large" type="reset">Reset</StyledButton>
        <StyledButton variant="contained" size="large" type="submit">Save</StyledButton>
      </StyledActionContainer>
    </MovieForm>
  </Modal>
);

EditMovieModal.propTypes = {
  movieId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  movie: PropTypes.shape().isRequired,
  editMovie: PropTypes.func.isRequired,
};

export default EditMovieModal;
