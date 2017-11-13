import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';
import BlogItem from 'components/ui/BlogItem';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: null};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ post: nextProps.post});
  }

  render() {
    const {post} = this.state;
    let blogItem = <p>Loading Post...</p>;
    if (post) {
      blogItem = <BlogItem {...post} />;
    }
    return <PanelGroup>{blogItem}</PanelGroup>;
  }
}

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
