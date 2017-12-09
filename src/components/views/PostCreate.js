import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from 'actions/PostCreate';
import { FormGroup, Button } from 'react-bootstrap';
import history from 'helpers/history';
import renderField from 'helpers/renderField';

const validate = (values) => {
  const errors = {};
  if (!values.title || values.title.length < 1) {
    errors.title = 'Don\'t forget to add a title';
  }
  if (!values.author || values.author.length < 1) {
    errors.author = 'Hey, write your name!';
  }
  return errors;
};

const PostCreate = ({ handleSubmit }) => (
  <FormGroup>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
      <Field label="Title" component={renderField} type="text" name="title" />
      <Field label="Author" component={renderField} type="text" name="author" />
      <Button type="submit">Create</Button>
    </form>
  </FormGroup>
);

PostCreate.propTypes = {
  handleSubmit: PropTypes.func
};

export default connect(
  () => ({
    initialValues: {
      title: '',
      author: ''
    }
  })
)(reduxForm({
  form: 'createPost',
  validate,
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(createPost(values));
  },
  onSubmitSuccess: () => history.push('/')
})(PostCreate));
