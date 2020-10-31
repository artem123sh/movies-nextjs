/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Formik, Form, useField, useFormikContext,
} from 'formik';
import Input from '../basic/Input';
import DatePicker from '../basic/DatePicker';
import MultiSelect from '../basic/MultiSelect';
import Label from '../basic/Label';
import { GENRES } from '../../constants';

const StyledLabel = styled(Label)`
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  display: block;
`;

const StyledDatePicker = styled(DatePicker)`
  width: calc(100% - 2rem);
  padding: 0 1rem;
`;

const StyledInput = styled(Input)`
  width: calc(100% - 2rem);
  padding: 0 1rem;

`;

const DatePickerContainer = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

const ErrorLabel = styled.div`
  color: red;
  font-size: 1.3rem;
`;

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

const FormikInput = (props) => {
  const {
    id, label, name, type, placeholder,
  } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={field.value ? field.value.toString() : ''}
        onChange={field.onChange}
      />
      {meta.touched && meta.error && <ErrorLabel>{meta.error}</ErrorLabel>}
    </>
  );
};

FormikInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export const FormikDatePicker = (props) => {
  const {
    label, id, name, placeholder,
  } = props;
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <DatePickerContainer>
        <StyledDatePicker
          id={id}
          name={name}
          placeholder={placeholder}
          value={field.value ? new Date(field.value) : null}
          onChange={(val) => setFieldValue(field.name, val.toISOString().slice(0, 10))}
        />
      </DatePickerContainer>
      {meta.touched && meta.error && <ErrorLabel>{meta.error}</ErrorLabel>}
    </>
  );
};

FormikDatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export const FormikMultiSelect = (props) => {
  const {
    id, label, placeholder, options,
  } = props;
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <MultiSelect
        id={id}
        placeholder={placeholder}
        values={field.value || []}
        options={options}
        onChange={(val) => setFieldValue(field.name, val)}
      />
      {meta.touched && meta.error && <ErrorLabel>{meta.error}</ErrorLabel>}
    </>
  );
};

FormikMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
};

const MovieForm = ({
  movie, onSubmit, resetAction, submitAction,
}) => {
  const validate = (values) => {
    const errors = {};
    const required = 'Required Field!';
    const {
      title,
      tagline,
      release_date,
      poster_path,
      overview,
      runtime,
      genres,
    } = values;
    Object.entries({
      title,
      tagline,
      release_date,
      poster_path,
      overview,
      runtime,
      genres,
    })
      .filter(([, value]) => !value)
      .forEach(([key]) => { errors[key] = required; });
    if (!values.genres.length) {
      errors.genres = required;
    }
    if (!Number.parseInt(values.runtime, 10)) {
      errors.runtime = 'Should be a number!';
    }
    const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    if (!urlRegex.test(values.poster_path)) {
      errors.poster_path = 'Should be a valid URL!';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={movie}
      validate={validate}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
      // PATTERN: render props
      render={({ submitForm, resetForm }) => (
        <Form>
          <FormikInput id="title" label="Title" name="title" type="text" placeholder="Title" inputClassName={StyledInput} />
          <FormikDatePicker id="release_date" label="Release Date" name="release_date" placeholder="Select Date" />
          <FormikInput id="poster_path" label="Movie Url" name="poster_path" type="text" placeholder="Movie Url here" inputClassName={StyledInput} />
          <FormikMultiSelect id="genres" label="Genre" name="genres" placeholder="Select Genre" options={GENRES} />
          <FormikInput id="overview" label="Overview" name="overview" type="text" placeholder="Overview here" inputClassName={StyledInput} />
          <FormikInput id="runtime" label="Runtime" name="runtime" placeholder="Runtime here" type="number" inputClassName={StyledInput} />
          <FormikInput id="tagline" label="Tagline" name="tagline" type="text" placeholder="Tagline here" inputClassName={StyledInput} />
          <StyledActionContainer>
            {resetAction(resetForm)}
            {submitAction(submitForm)}
          </StyledActionContainer>
        </Form>
      )}
    />
  );
};

MovieForm.defaultProps = {
  movie: {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: 0,
    tagline: '',
  },
};

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
  }),
  resetAction: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
