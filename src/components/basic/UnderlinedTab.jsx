import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PRIMARY } from '../../theme';

const Tab = ({
  // eslint-disable-next-line no-unused-vars
  selected, children, className, onClick,
}) => (
  <button type="button" className={className} onClick={onClick}>
    {children}
  </button>
);

Tab.defaultProps = {
  className: undefined,
  selected: false,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const StyledTab = styled(Tab)`
  outline: none;
  font-size: 1rem;
  color: inherit;
  background: transparent;
  text-transform: uppercase;
  display: inline-block;
  border: none;
  border-bottom: ${({ selected }) => (selected ? `solid 2px ${PRIMARY}` : 'none')};
  &:hover {
    border-bottom: ${({ selected }) => (!selected && 'solid 2px rgba(255,255,255,0.5)')};
  }
  cursor: pointer;
`;

export default StyledTab;
