import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  color: inherit;
  font-size: 1.3rem;
  padding: 1rem 0;
`;

const MoviesFoundLabel = ({ number }) => (
  <StyledContainer>
    <b>{`${number} `}</b>
    movies found
  </StyledContainer>
);

MoviesFoundLabel.propTypes = {
  number: PropTypes.number.isRequired,
};

export default MoviesFoundLabel;
