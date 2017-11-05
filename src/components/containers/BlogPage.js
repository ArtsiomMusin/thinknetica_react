import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.like = _.bind(this.like, this);
  }

  like(id) {
    const items = _.assign({}, this.state.items);
    var obj = _.find(items, ['id', id]);
    if(!obj.meta.likesCount){
      obj.meta.likesCount = 0;
    }
    obj.meta.likesCount += 1;
    this.setState({ items });
  }
  render() {
    const {items} = this.props;
    const piechart_data = _.map(
      items,
      (item) => [
        item.text, item.meta.likesCount
      ]);
    return DOM.div(
        null,
        React.createElement(BlogList, {items: items, like: this.like}),
        <PieChart columns={piechart_data}/>,
      );

  }
}

BlogPage.propTypes = {
  items: PropTypes.array
};

BlogPage.defaultProps = {
  items: []
};

export default BlogPage;
