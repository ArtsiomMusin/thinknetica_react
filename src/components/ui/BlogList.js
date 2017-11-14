import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Pagination } from 'react-bootstrap';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1};
  }

  handlePageSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    const itemsPagination = _.chunk(this.props.items, 3);
    let list =  _.map(
      itemsPagination[this.state.activePage - 1],
      (item, key) => <li className='list-group-item' key={key}>
        <BlogItem {...item} like={this.props.like} />
      </li>
    );
    if (_.isEmpty(this.props.items)) {
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
          activePage={this.state.activePage}
          onSelect={this.handlePageSelect.bind(this)}
        />
      </div>
    );
  }
}

BlogList.propTypes = {
  items: PropTypes.array,
  like: PropTypes.function
};

BlogList.defaultProps = {
  items: []
};

export default BlogList;
