import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import ClickAwayListener from './ClickAwayListener';
import SelectOption from './SelectOption';
import { PRIMARY, FOOTER_BACKGROUND } from '../../theme';

const SelectRoot = styled.div`
  position: relative;
`;

const SelectOptionsContainer = styled.div`
  right: 0%;
  background: ${FOOTER_BACKGROUND};
  position: absolute;
  z-index: 1;
`;

const StyledSelectContainer = styled(Button)`
  font-size: 1rem;
  color: inherit;
  padding: 0 0 0 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledValue = styled.span`
  opacity: 0.7;
`;

const ExpandIcon = styled.svg`
  padding: 0 0.2rem;
`;

const Select = ({
  value, className, options, id, placeholder, onChange,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOptions = () => setOpen((currentOpen) => !currentOpen);

  const closeOptions = () => setOpen(false);

  const onOptionClick = (optionValue) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <SelectRoot className={className}>
      <ClickAwayListener onClickAway={closeOptions}>
        <StyledSelectContainer id={id} onClick={toggleOptions}>
          <StyledValue>{options[value] || placeholder}</StyledValue>
          <ExpandIcon
            onClick={toggleOptions}
            fill={PRIMARY}
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </ExpandIcon>
        </StyledSelectContainer>
        {open && (
        <SelectOptionsContainer>
          {Object.entries(options).map(([key, option]) => (
            <SelectOption key={key} value={key} selected={key === value} onClick={onOptionClick}>
              {option}
            </SelectOption>
          ))}
        </SelectOptionsContainer>
        )}
      </ClickAwayListener>
    </SelectRoot>
  );
};

Select.defaultProps = {
  className: undefined,
  id: undefined,
  placeholder: undefined,
  value: '',
};

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.shape().isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Select;
