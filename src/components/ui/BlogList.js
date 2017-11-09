import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import _ from 'lodash';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return DOM.ul(
      null,
      _.map(
        this.props.items,
        (item, key) => (
          DOM.li(
            {key},
            React.createElement(
              BlogItem,
              {
                image: item.image,
                text: item.text,
                meta: item.meta,
                like: this.props.like,
                id: item.id
              }
            )
          )
        )
      )
    );
  }
}

BlogList.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  like: PropTypes.function
};

BlogList.defaultProps = {
  items: []
};

export default BlogList;
