import React from 'react';
import { postCreatePath } from 'helpers/routes';
import { Button } from 'react-bootstrap';
import history from 'helpers/history';

const AddPost = () => (
  <Button bsStyle="primary" onClick={() => (history.push(postCreatePath()))}>
    <span
      className="glyphicon glyphicon-plus"
    />
    Add Post
  </Button>
);

export default AddPost;
