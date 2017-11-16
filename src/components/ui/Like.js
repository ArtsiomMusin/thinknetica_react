import React from 'react';
import PropTypes from 'prop-types';

const Like = ({count, like, id}) => (
  <div style={{fontSize: '24px'}}>
    <a onClick={() => like(id)}>
      <span className="glyphicon glyphicon-heart-empty"/>
    </a>
    { count != 0 && <span>{count}</span> }
  </div>
);

Like.propTypes = {
  count: PropTypes.number,
  like: PropTypes.func,
  id: PropTypes.string
};

Like.defaultProps = {
  count: 0
};

export default Like;
