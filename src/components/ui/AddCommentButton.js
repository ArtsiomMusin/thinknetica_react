import React from 'react';
import { commentAddPath } from 'helpers/routes';
import { Button } from 'react-bootstrap';
import history from 'helpers/history';

const AddCommentButton = () => (
  <Button onClick={() => (history.push(commentAddPath()))}>
    <span
      className="glyphicon glyphicon-comment smallMargin"
    />
    Add Comment
  </Button>
);

export default AddCommentButton;
