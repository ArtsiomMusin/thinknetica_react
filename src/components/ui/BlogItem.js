import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';
import Link from 'components/elements/Link';
import { postsPath } from 'components/helpers/routes';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {image, meta, text, id, like} = this.props;
    return DOM.div(
      null,
      <div>
        <div style={{float: 'left'}}>
          <Image  src={image.src} />
        </div>
        <div>
          <Link to={postsPath(id)}>
            <TextBox>{text}</TextBox>
          </Link>
          <h5>Author: {meta.author}</h5>
          <p>
            {meta.created && `created: ${meta.created} `}           
            {meta.updated && `updated: ${meta.updated}`}
          </p>
        </div>
      </div>,
      like && React.createElement(Like, {count: meta.likesCount, like, id})
    );
  }
}
BlogItem.propTypes = {
  image: PropTypes.object,
  meta: PropTypes.object,
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
