import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';
import BlogItem from 'components/ui/BlogItem';
import request from 'superagent';
import { postsPath, RestApiServer } from 'components/helpers/routes';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: null};
  }

  componentWillMount() {
    this.requestPost();
  }

  requestPost() {
    request.get(
      `${RestApiServer()}${postsPath(this.props.match.params.id)}`,
      {},
      (err, res) => this.setState({post: res.body})
    );
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
  match: PropTypes.object
};

export default Post;
