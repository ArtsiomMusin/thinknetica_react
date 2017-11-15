import { connect } from 'react-redux';
import BlogPage from 'components/containers/BlogPage';
import { addLike, searchPosts } from 'actions/Posts';

const stateToProps = (state) => (
  {
    items: state.posts.entries,
    isFetching: state.posts.isFetching,
    error: state.posts.error
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    like: (id) => {
      dispatch(addLike(id));
    },
    search: (name) => {
      dispatch(searchPosts(name));
    }
  }
);

export default connect(stateToProps, mapDispatchToProps)(BlogPage);
