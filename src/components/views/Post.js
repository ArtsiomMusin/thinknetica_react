import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';
import BlogItem from 'components/ui/BlogItem';
import Helmet from 'react-helmet';

const Post = (props) => {
  let blogItem = <p>Loading Post...</p>;
  if (props.post) {
    blogItem = <BlogItem {...props.post} showComments={true} />;
  }
  return (
    <div>
      <PanelGroup>{blogItem}</PanelGroup>
      {props.post && <Helmet title={props.post.text}/>}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
