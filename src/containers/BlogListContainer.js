import _ from 'lodash';
import { connect } from 'react-redux';
import BlogList from 'components/ui/BlogList';
import { setActivePage } from 'actions/Pagination';

function showPosts(state) {
  const itemsPagination = _.chunk(state.posts.entries, 3);
  return itemsPagination[state.pagination.activePage - 1];
}

const stateToProps = (state) => ({
  items: showPosts(state),
  activePage: state.pagination.activePage,
  itemsPagination: _.chunk(state.posts.entries, 3)
});

const mapDispatchToProps = (dispatch) => (
  {
    handlePageSelect: (eventKey) => {
      dispatch(setActivePage(eventKey));
    }
  }
);

export default connect(stateToProps, mapDispatchToProps)(BlogList);
