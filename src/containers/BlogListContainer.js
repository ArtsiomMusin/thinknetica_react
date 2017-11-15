import { connect } from 'react-redux';
import BlogList from 'components/ui/BlogList';
import { setActivePage } from 'actions/Pagination';

const stateToProps = (state) => ({
  items: state.posts.entries,
  activePage: state.pagination.activePage
});

const mapDispatchToProps = (dispatch) => (
  {
    handlePageSelect: (eventKey) => {
      dispatch(setActivePage(eventKey));
    }
  }
);

export default connect(stateToProps, mapDispatchToProps)(BlogList);
