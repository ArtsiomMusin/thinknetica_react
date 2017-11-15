import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';
import BlogItem from 'components/ui/BlogItem';

const Post = ({post}) => {
  let blogItem = <p>Loading Post...</p>;
  if (post) {
    blogItem = <BlogItem {...post} />;
  }
  return <PanelGroup>{blogItem}</PanelGroup>;
};

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
