import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Pagination } from 'react-bootstrap';

import BlogItem from './BlogItem';

const BlogList = (props) => {
  let list = null;
  if (_.isEmpty(props.items)) {
    list = <h2>
      <span className="glyphicon glyphicon-minus-sign" />
      Sorry...No post found...
    </h2>;
  } else {
    list =  _.map(
      props.items,
      (item, key) => <li className='list-group-item' key={key}>
        <BlogItem {...item} />
      </li>
    );
  }

  return (
    <div>
      <ul className='list-group'>{list}</ul>
      <Pagination
        style={{justifyContent: 'center', display: 'flex'}}
        bsSize="medium"
        items={props.itemsPagination}
        activePage={props.activePage}
        onSelect={props.handlePageSelect}
      />
    </div>
  );
};

BlogList.propTypes = {
  items: PropTypes.array,
  activePage: PropTypes.number,
  handlePageSelect: PropTypes.func,
  itemsPagination: PropTypes.number
};

BlogList.defaultProps = {
  items: [],
  activePage: 1
};

export default BlogList;
