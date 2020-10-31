import React, { forwardRef, createRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FOOTER_BACKGROUND } from '../../theme';

import 'react-datepicker/dist/react-datepicker.css';

const StyledInput = styled.input`
height: 3rem;
width: 100%;
border: 0;
border-radius: 5px;
background: ${FOOTER_BACKGROUND};
opacity: 0.7;
font-size: 1.5rem;
color: inherit;
`;

const DatePickerInput = forwardRef((props, _ref) => 
  <StyledInput {...props} ref={_ref}/>
);

const DatePicker = ({
  className, value, id, placeholder, onChange,
}) => {
  const ref = createRef(); 

  return(
  <ReactDatePicker
    className={className}
    selected={value}
    onChange={(newDate) => onChange(newDate)}
    customInput={<DatePickerInput id={id} value={value} placeholder={placeholder} ref={ref} />}
    placeholderText={placeholder}
  />
)};

DatePicker.defaultProps = {
  className: undefined,
  id: undefined,
  value: null,
  placeholder: undefined,
};

DatePicker.propTypes = {
  className: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
