import { connect } from 'react-redux';
import Like from 'components/ui/Like';
import { addLike } from 'actions/Like';
import { fetchPosts } from 'actions/Posts';
import { setActivePage } from 'actions/Pagination';

const stateToProps = (state, ownProps) => (
  {
    count: ownProps.count,
    id: ownProps.id,
    activePage: state.pagination.activePage
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    like: () => {
      dispatch(addLike(ownProps.id));
    },
    updatePosts: (page) => {
      dispatch(fetchPosts('', page));
      dispatch(setActivePage(page));
    }
  }
);

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    like: () => {
      dispatchProps.like();
      dispatchProps.updatePosts(stateProps.activePage);
    }
  });
}

export default connect(stateToProps, mapDispatchToProps, mergeProps)(Like);
