import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from 'actions/PostCreate';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import history from 'helpers/history';

const PostCreate = ({ handleSubmit }) => (
  <FormGroup>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <Field
          component="input"
          type="text"
          name="title"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Author</ControlLabel>
        <Field
          component="input"
          type="text"
          name="author"
        />
      </FormGroup>
      <Button type="submit">Create</Button>
    </form>
  </FormGroup>
);

PostCreate.propTypes = {
  handleSubmit: PropTypes.func
};

export default connect(
)(reduxForm({
  form: 'createPost',
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(createPost(values));
  },
  onSubmitSuccess: () => history.push('/')
})(PostCreate));
