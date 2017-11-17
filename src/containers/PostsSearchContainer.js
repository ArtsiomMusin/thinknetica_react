import { connect } from 'react-redux';
import PostsSearch from 'components/elements/PostsSearch';
import { searchPosts } from 'actions/Posts';

const mapDispatchToProps = (dispatch) => (
  {
    search: (id) => {
      dispatch(searchPosts(id));
    }
  }
);

export default connect(null, mapDispatchToProps)(PostsSearch);
