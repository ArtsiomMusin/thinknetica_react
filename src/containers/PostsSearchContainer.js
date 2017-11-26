import { connect } from 'react-redux';
import PostsSearch from 'components/elements/PostsSearch';
import { fetchPosts } from 'actions/Posts';

const mapDispatchToProps = (dispatch) => (
  {
    search: (event) => {
      dispatch(fetchPosts(event.currentTarget.value));
    }
  }
);

export default connect(null, mapDispatchToProps)(PostsSearch);
