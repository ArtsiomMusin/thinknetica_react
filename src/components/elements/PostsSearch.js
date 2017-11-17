import React from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup } from 'react-bootstrap';

const PostsSearch = (props) => (
  <Form inline style={{justifyContent: 'flex-end', display: 'flex'}}>
    <FormGroup controlId="formInlineName">
      <span className="glyphicon glyphicon-search" />
      <input
        type="text"
        placeholder="Type post name to find"
        className="form-control"
        onChange={props.search}/>
    </FormGroup>
  </Form>
);

PostsSearch.propTypes = {
  search: PropTypes.func
};

export default PostsSearch;
