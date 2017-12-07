import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { createComment } from 'actions/CommentAdd';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import history from 'helpers/history';

const CommentAdd = ({ handleSubmit }) => (
  <FormGroup>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <ControlLabel>Comment</ControlLabel>
        <Field
          component="textarea"
          type="text"
          name="text"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Phone</ControlLabel>
        <Field
          component="input"
          type="text"
          name="phone"
        />
      </FormGroup>
      <Button type="submit">Create</Button>
    </form>
  </FormGroup>
);

CommentAdd.propTypes = {
  handleSubmit: PropTypes.func
};

export default connect(
  (state) => ({
    initialValues: {
      postId: get(state, 'post.entry.id')
    }
  })
)(reduxForm({
  form: 'createComment',
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(createComment(values));
  },
  onSubmitSuccess: () => {
    history.goBack();
  }
})(CommentAdd));
