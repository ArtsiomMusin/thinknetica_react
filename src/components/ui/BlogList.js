import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Pagination } from 'react-bootstrap';

import BlogItem from './BlogItem';

const BlogList = (props) => {
  const itemsPagination = _.chunk(props.items, 3);
  let list =  _.map(
    itemsPagination[props.activePage - 1],
    (item, key) => <li className='list-group-item' key={key}>
      <BlogItem {...item} like={props.like} />
    </li>
  );
  if (_.isEmpty(props.items)) {
    list = <h2>
      <span className="glyphicon glyphicon-minus-sign" />
      Sorry...No post found...
    </h2>;
  }

  return (
    <div>
      <ul className='list-group'>{list}</ul>
      <Pagination
        style={{justifyContent: 'center', display: 'flex'}}
        bsSize="medium"
        items={itemsPagination.length}
        activePage={props.activePage}
        onSelect={props.handlePageSelect}
      />
    </div>
  );
};

BlogList.propTypes = {
  items: PropTypes.array,
  like: PropTypes.function,
  activePage: PropTypes.number,
  handlePageSelect: PropTypes.function
};

BlogList.defaultProps = {
  items: [],
  activePage: 1
};

export default BlogList;
