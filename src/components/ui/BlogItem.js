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
      React.createElement(Image, { src: image.src } ),
      React.createElement(TextBox, {}, text),
      DOM.span(null, `(Written by ${meta.author})`),
      DOM.div(
        null,
        meta.created && DOM.div(null, `Created: ${meta.created}`),
        meta.updated && DOM.div(null, `Updated: ${meta.updated}`)
      ),
      React.createElement(Like, {count: meta.likesCount, like: like, id: id})
    );
  }
}
BlogItem.propTypes = {
  author: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string
};

BlogItem.defaultProps = {
  author: 'Unknown',
  created: null,
  updated: null
};

const threeItems = [
  {
    id: '59f72ed596059543b33bb615',
    image: { src: "https://goo.gl/9CzY5E"},
    meta: {
      author: "Artem",
      created: formatDate("20120120"),
      updated: formatDate("20170720"),
      likesCount: 30
    },
    text: "I'm a good guy"
  },
  {
    id: '59f72ed596059543b33bb616',
    image: { src: "https://goo.gl/J4q89x" },
    meta: {
      author: "Vasya",
      created: formatDate("20150320"),
      likesCount: 45
    },
    text: "Flower!"
  },
  {
    id: '59f72ed596059543b33bb617',
    image: { src: "https://goo.gl/emZYMB" },
    meta: {
      updated: formatDate("19800320"),
      likesCount: 10
    },
    text: "Beeball"
  }
];

export default BlogItem;
