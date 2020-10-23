import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../basic/Modal';
import Button from '../basic/Button';

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

const StyledMessage = styled.span`
  font-size: 1.5rem;
`;

const DeleteMovieModal = ({ onClose, deleteMovie }) => (
  <Modal title="delete movie" onClose={onClose}>
    <StyledMessage>Are you sure you want to delete this movie?</StyledMessage>
    <StyledActionContainer>
      <Button variant="contained" size="large" onClick={() => deleteMovie()}>Confirm</Button>
    </StyledActionContainer>
  </Modal>
);

DeleteMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default DeleteMovieModal;
