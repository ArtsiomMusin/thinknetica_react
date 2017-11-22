import React from 'react';
import PropTypes from 'prop-types';

const Like = ({count, like}) => (
  <div style={{fontSize: '24px'}}>
    <a onClick={like}>
      <span className="glyphicon glyphicon-heart-empty"/>
    </a>
    { count != 0 && <span>{count}</span> }
  </div>
);

Like.propTypes = {
  count: PropTypes.number,
  like: PropTypes.func
};

Like.defaultProps = {
  count: 0
};

export default Like;
