import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { createComment } from 'actions/CommentAdd';
import { FormGroup, Button } from 'react-bootstrap';
import history from 'helpers/history';
import renderField from 'helpers/renderField';
import normalizePhone from 'helpers/normalizePhone';

const validate = (values) => {
  const errors = {};
  if (!values.text || values.text.length < 1) {
    errors.text = 'Please add a comment';
  }
  if (!values.phone || values.phone.length < 1) {
    errors.phone = 'Need the phone number';
  }
  return errors;
};

const CommentAdd = ({ handleSubmit }) => (
  <FormGroup>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
      <Field
        label="Comment"
        component={renderField}
        type="text"
        name="text"
      />
      <Field
        label="Phone"
        component={renderField}
        type="text"
        name="phone"
        placeholder="+xxx(xx)xxx-xx-xx"
        normalize={normalizePhone}
      />
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
  validate,
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(createComment(values));
  },
  onSubmitSuccess: () => history.goBack()
})(CommentAdd));
