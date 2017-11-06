import React from 'react';
import { Button } from 'react-bootstrap';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Like = ({count, like, id}) => (
  DOM.div(
    null,
    count != 0 && DOM.span(null, `Likes: ${count}`),
    <Button onClick={() => like(id)}>Like</Button>
  )
);

Like.propTypes = {
  count: PropTypes.number
};

Like.defaultProps = {
  count: 0
};

export default Like;
