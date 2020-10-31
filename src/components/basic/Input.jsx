import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FOOTER_BACKGROUND } from '../../theme';

const Input = ({
  className, placeholder, defaultValue, id, onClick,
  autocomplete, value, onChange, type, readonly, onKeyDown,
}) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    defaultValue={defaultValue}
    value={value}
    id={id}
    autoComplete={autocomplete}
    onClick={onClick}
    onChange={onChange}
    readOnly={readonly}
    onKeyDown={onKeyDown}
  />
);

Input.defaultProps = {
  className: undefined,
  placeholder: undefined,
  defaultValue: undefined,
  value: undefined,
  id: undefined,
  autocomplete: undefined,
  onClick: undefined,
  onKeyDown: undefined,
  onChange: undefined,
  readonly: undefined,
  type: undefined,
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  autocomplete: PropTypes.string,
  id: PropTypes.string,
  readonly: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

const StyledInput = styled(Input)`
  height: 3rem;
  width: 100%;
  border: 0;
  border-radius: 5px;
  background: ${FOOTER_BACKGROUND};
  opacity: 0.7;
  font-size: 1.5rem;
  color: inherit;
`;

export default StyledInput;
