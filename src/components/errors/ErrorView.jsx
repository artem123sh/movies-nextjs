import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../basic/Logo';
import Button from '../basic/Button';
import { BACKGROUND } from '../../theme';

const ErrorViewContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${BACKGROUND};
  position: relative;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 5%; 
  left: 5%;
  z-index: 15;
`;

const ErrorViewContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorLabel = styled.span`
  font-size: 3rem;
`;

const Error = styled.span`
  font-size: 12rem;
  font-family: Arial Black;
  text-shadow: -10px 0 red, 10px 0 darkturquoise;
  letter-spacing: 2rem;
`;

const ErrorView = ({ errorLabel, error }) => (
  <ErrorViewContainer>
    <ErrorViewContent>
      <LogoContainer><Logo /></LogoContainer>
      <ErrorLabel>{errorLabel}</ErrorLabel>
      <Error>{error}</Error>
      <Link href="/"><Button variant="outlined">Go Back To Home</Button></Link>
    </ErrorViewContent>
  </ErrorViewContainer>
);

ErrorView.propTypes = {
  errorLabel: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default ErrorView;
