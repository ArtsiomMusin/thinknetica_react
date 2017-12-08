import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const renderField = ({input, label, meta: {touched, error}}) => (
  <FormGroup validationState={error ? 'error' : 'success'}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} />
    {touched && (error && (
      <div>{error}</div>
    ))}
  </FormGroup>
);

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default renderField;
