import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';
import ClickAwayListener from './ClickAwayListener';
import SelectOption from './SelectOption';
import { PRIMARY, FOOTER_BACKGROUND } from '../../theme';

const MultiSelectRoot = styled.div`
  position: relative;
`;

const MultiSelectOptionsContainer = styled.div`
  right: 0%;
  background: ${FOOTER_BACKGROUND};
  position: absolute;
  z-index: 1;
  max-height: 10rem;
  overflow: auto;
`;

const StyledMultiSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledInput = styled(Input)`
  padding: 0 1rem;
  width: calc(100% - 2rem);
`;

const ExpandIcon = styled.svg`
  position: absolute;
`;

const MultiSelect = ({
  values, className, options, id, placeholder, onChange,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOptions = () => setOpen((currentOpen) => !currentOpen);

  const closeOptions = () => setOpen(false);

  const handleOptionClick = (value) => {
    const newValues = values.includes(value)
      ? values.filter((val) => val !== value) : [...values, value];
    onChange(newValues);
  };

  return (
    <MultiSelectRoot className={className}>
      <ClickAwayListener onClickAway={closeOptions}>
        <StyledMultiSelectContainer onClick={toggleOptions}>
          <StyledInput
            type="text"
            placeholder={placeholder}
            autocomplete="off"
            id={id}
            value={values.join(', ')}
            disabled
            readonly
          />
          <ExpandIcon
            fill={PRIMARY}
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </ExpandIcon>
        </StyledMultiSelectContainer>
        {open && (
        <MultiSelectOptionsContainer>
          {options.map((option) => (
            <SelectOption
              key={option}
              value={option}
              selected={values.includes(option)}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </SelectOption>
          ))}
        </MultiSelectOptionsContainer>
        )}
      </ClickAwayListener>
    </MultiSelectRoot>
  );
};

MultiSelect.defaultProps = {
  className: undefined,
  id: undefined,
  placeholder: undefined,
  values: [],
};

MultiSelect.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default MultiSelect;
