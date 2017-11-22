import { connect } from 'react-redux';
import BlogList from 'components/ui/BlogList';
import { fetchPosts } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  activePage: state.pagination.activePage,
  itemsPagination: 3
});

const mapDispatchToProps = (dispatch) => (
  {
    handlePageSelect: (activePageNumber) => {
      dispatch(fetchPosts('', activePageNumber));
    }
  }
);

export default connect(stateToProps, mapDispatchToProps)(BlogList);
