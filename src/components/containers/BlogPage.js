import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import _ from 'lodash';
import request from 'superagent';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import { RestApiServer } from 'components/helpers/routes';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.like = _.bind(this.like, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      RestApiServer(),
      {},
      (err, res) => this.setState({items: res.body})
    );
  }

  like(id) {
    const items = _.assign({}, this.state.items);
    const obj = _.find(items, ['id', id]);
    if (!obj.meta.likesCount) {
      obj.meta.likesCount = 0;
    }
    obj.meta.likesCount += 1;
    this.setState({ items });
  }

  render() {
    const {items} = this.state;
    const piechartData = _.map(
      items,
      (item) => [
        item.text, item.meta.likesCount
      ]);
    return DOM.div(
      null,
      React.createElement(BlogList, {items, like: this.like}),
      <PieChart columns={piechartData}/>
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

BlogPage.defaultProps = {
  items: []
};

export default BlogPage;
