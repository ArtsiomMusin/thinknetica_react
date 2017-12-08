import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { updatePost } from 'actions/PostEdit';
import { FormGroup, Button } from 'react-bootstrap';
import history from 'helpers/history';
import renderField from 'helpers/renderField';
import 'react-dates/lib/css/_datepicker.css';

const validate = (values) => {
  const errors = {};
  if (!values.title || values.title.length < 1) {
    errors.title = 'Don\'t forget to add a title';
  }
  if (!values.author || values.author.length < 1) {
    errors.author = 'Hey, write your name!';
  }
  if (!values.created || values.created.length < 1) {
    errors.created = 'Update the create at time';
  }
  return errors;
};

const PostEdit = ({ handleSubmit }) => (
  <FormGroup>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit}>
      <Field
        label="Title"
        component={renderField}
        type="text"
        name="title"
      />
      <Field
        label="Created"
        component={renderField}
        type="text"
        name="created"
      />
      <Field
        label="Author"
        component={renderField}
        type="text"
        name="author"
      />
      <Button type="submit">Update</Button>
    </form>
  </FormGroup>
);

PostEdit.propTypes = {
  handleSubmit: PropTypes.func
};

export default connect(
  (state) => ({
    initialValues: {
      title: get(state, 'post.entry.text'),
      created: get(state, 'post.entry.meta.created'),
      author: get(state, 'post.entry.meta.author'),
      id: get(state, 'post.entry.id')
    }
  })
)(reduxForm({
  form: 'editPost',
  validate,
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(updatePost(values));
  },
  onSubmitSuccess: () => history.goBack()
})(PostEdit));
