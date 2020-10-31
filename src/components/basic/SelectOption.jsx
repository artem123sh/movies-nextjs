import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PRIMARY, BACKGROUND } from '../../theme';

const Option = ({
  // eslint-disable-next-line no-unused-vars
  selected, className, children, value, onClick,
}) => <button type="button" className={className} onClick={() => onClick(value)}>{children}</button>;

Option.defaultProps = {
  className: undefined,
  selected: false,
};

Option.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledOption = styled(Option)`
  background: ${({ selected }) => (selected ? PRIMARY : BACKGROUND)};
  font-size: 1rem;
  outline: none;
  text-align: left;
  border: none;
  width: 100%;
  white-space: nowrap;
  color: inherit;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  display: block;
  cursor: pointer;
  &:hover {
    ${({ selected }) => (selected ? 'opacity: 0.7;' : `background: ${PRIMARY}`)}
`;

export default StyledOption;
