import React from 'react';
import styled from 'styled-components';
import Title from '../basic/Title';

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1; 
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  text-transform: none;
`;

const NoMovieFound = () => (
  <StyledContainer>
    <StyledTitle>No Movies Found</StyledTitle>
  </StyledContainer>
);

export default NoMovieFound;
