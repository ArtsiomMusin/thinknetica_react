import { connect } from 'react-redux';
import BlogPage from 'components/containers/BlogPage';
import { withRouter } from 'react-router-dom';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default withRouter(connect(stateToProps)(BlogPage));
