import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = ({ className, children }) => (
  <>
    <span className={className}>{children}</span>
  </>
);

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const StyledTitle = styled(Title)`
  font-stretch: ultra-expanded;
  font-family: 'Segoe UI Light';
  font-size: 2.5rem;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export default StyledTitle;
