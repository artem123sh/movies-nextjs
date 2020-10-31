import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../basic/Modal';
import Button from '../basic/Button';
import MovieForm from '../forms/MovieForm';

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const AddMovieModal = ({
  onClose, handleMovieAdd,
}) => (
  <Modal size="small" title="add movie" onClose={onClose}>
    <MovieForm
      onSubmit={handleMovieAdd}
      // PATTERN: render props
      resetAction={(onReset) => <StyledButton variant="outlined" size="large" onClick={onReset}>Reset</StyledButton>}
      submitAction={(onSubmit) => <StyledButton variant="contained" size="large" onClick={onSubmit}>Submit</StyledButton>}
    />
  </Modal>
);

AddMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleMovieAdd: PropTypes.func.isRequired,
};

export default AddMovieModal;
