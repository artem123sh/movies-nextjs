import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PRIMARY } from '../../theme';

const Label = ({ className, htmlFor, children }) => (
  <label className={className} htmlFor={htmlFor}>{children}</label>
);

Label.defaultProps = {
  className: '',
  htmlFor: '',
};

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const StyledLabel = styled(Label)`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${PRIMARY};
`;

export default StyledLabel;
