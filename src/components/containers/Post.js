import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';
import BlogItem from 'components/ui/BlogItem';

const Post = (props) => {
  let blogItem = <p>Loading Post...</p>;
  if (props.post) {
    blogItem = <BlogItem {...props.post} />;
  }
  return <PanelGroup>{blogItem}</PanelGroup>;
};

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
