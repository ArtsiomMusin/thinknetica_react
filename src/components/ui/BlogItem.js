import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {image, meta, text, id, like} = this.props;
    return DOM.div(
      null,
      React.createElement(Image, { src: image.src }),
      React.createElement(TextBox, {}, text),
      DOM.span(null, `(Written by ${meta.author})`),
      DOM.div(
        null,
        meta.created && DOM.div(null, `Created: ${meta.created}`),
        meta.updated && DOM.div(null, `Updated: ${meta.updated}`)
      ),
      React.createElement(Like, {count: meta.likesCount, like, id})
    );
  }
}
BlogItem.propTypes = {
  image: PropTypes.string,
  meta: PropTypes.array,
  id: PropTypes.string,
  text: PropTypes.string,
  like: PropTypes.function
};

BlogItem.defaultProps = {
  author: 'Unknown',
  created: null,
  updated: null
};

export default BlogItem;
