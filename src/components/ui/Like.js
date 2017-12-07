import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Like = ({count, like}) => (
  <Button onClick={like}>
    <div style={{fontSize: '14px'}}>
      <span className="glyphicon glyphicon-heart-empty"/>
      { count != 0 && <span>{count}</span> }
    </div>
  </Button>
);

Like.propTypes = {
  count: PropTypes.number,
  like: PropTypes.func
};

Like.defaultProps = {
  count: 0
};

export default Like;
