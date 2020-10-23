import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../theme';

const LogoTitle = styled.span`
  color: ${PRIMARY};
  font-weight: 500;
  font-size: 1.5rem;
  font-family: ${({ font }) => font};
`;

const Logo = () => (
  <>
    <LogoTitle font="Segoe UI Black">netflix</LogoTitle>
    <LogoTitle font="Segoe UI Light">roulette</LogoTitle>
  </>
);

export default Logo;
