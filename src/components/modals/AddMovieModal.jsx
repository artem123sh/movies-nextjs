import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../basic/Modal';
import Button from '../basic/Button';
import MovieForm from '../forms/MovieForm';

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const AddMovieModal = ({
  onClose, handleMovieAdd,
}) => (
  <Modal size="small" title="add movie" onClose={onClose}>
    <MovieForm onSubmit={handleMovieAdd}>
      <StyledActionContainer>
        <StyledButton variant="outlined" size="large" type="reset">Reset</StyledButton>
        <StyledButton variant="contained" size="large" type="submit">Submit</StyledButton>
      </StyledActionContainer>
    </MovieForm>
  </Modal>
);

AddMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleMovieAdd: PropTypes.func.isRequired,
};

export default AddMovieModal;
