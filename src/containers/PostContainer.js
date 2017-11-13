import { connect } from 'react-redux';
import Post from 'components/containers/Post';
import { withRouter } from 'react-router-dom';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default withRouter(connect(stateToProps)(Post));
