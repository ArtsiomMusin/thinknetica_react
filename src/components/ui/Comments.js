import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Comments = ({comments}) => {
  let list = null;
  if (_.isEmpty(comments)) {
    list = <h5>
      No comments... Be the first one!
    </h5>;
  } else {
    list =  _.map(
      comments,
      (comment, key) => <li className='list-group-item' key={key}>
        <div className="rows">
          <div className="toRight">Phone: {comment.phone}</div>
          <div className="row">{comment.text}</div>
        </div>
      </li>
    );
  }

  return (
    <div>
      <ul className='list-group'>{list}</ul>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array
};

Comments.defaultProps = {
  comments: []
};

export default Comments;
