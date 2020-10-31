import React from 'react';
import styled from 'styled-components';
import Logo from '../basic/Logo';
import { FOOTER_BACKGROUND } from '../../theme';

const StyledFooter = styled.footer`
  display: block;
  position: sticky;
  z-index: 15;
  background: ${FOOTER_BACKGROUND};
  padding: 1.5rem;
  text-align: center;
`;

const Footer = () => <StyledFooter><Logo /></StyledFooter>;

export default Footer;
