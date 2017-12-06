import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { updatePost } from 'actions/PostEdit';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import history from 'helpers/history';
import 'react-dates/lib/css/_datepicker.css';

const PostEdit = ({ handleSubmit }) => (
  <FormGroup>
    <h1>Edit Post</h1>
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
        <ControlLabel>Created</ControlLabel>
        <Field
          component="input"
          type="text"
          name="created"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Author</ControlLabel>
        <Field
          // TODO or NOT TODO
          // component={ props =>
          //   <FormControl {...props} />
          // }
          component="input"
          type="text"
          name="author"
        />
      </FormGroup>
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
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(updatePost(values));
  },
  onSubmitSuccess: () => history.goBack()
})(PostEdit));
