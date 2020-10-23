import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PRIMARY } from '../../theme';

const Button = ({
  // eslint-disable-next-line no-unused-vars
  children, size, className, onClick, variant, type, onSubmit,
}) => (
  <button
    onClick={onClick}
    onSubmit={onSubmit}
    className={className}
    type={type}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: undefined,
  onSubmit: undefined,
  size: undefined,
  className: undefined,
  variant: undefined,
  type: 'button',
};

Button.propTypes = {
  size: PropTypes.oneOf(['large', undefined]),
  variant: PropTypes.oneOf(['contained', 'outlined', undefined]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

const StyledButton = styled(Button)`
  height: ${({ size }) => {
    if (size === 'large') {
      return '3.5rem';
    }
    return '3rem';
  }};
  padding: ${({ size }) => {
    if (size === 'large') {
      return '0 4rem';
    }
    return '0 1rem';
  }};
  text-transform: uppercase;
  ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return `
          background: ${PRIMARY};
          border: 1px solid ${PRIMARY};
          color: inherit;
        `;
      case 'outlined':
        return `
          background: transparent;
          border: 1px solid ${PRIMARY};
          color: ${PRIMARY};
        `;
      default:
        return `
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid transparent;
          color: ${PRIMARY};
        `;
    }
  }}
  border-radius: 5px;
  font-size: 1.2rem;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return `
          opacity: 0.7;
          border: 1px solid inherit;
        `;
      case 'outlined':
      default:
        return 'background: rgba(255, 255, 255, 0.3)';
    }
  }}
  }
`;

export default StyledButton;
