import { connect } from 'react-redux';
import Index from 'components/views/Index';

const stateToProps = (state) => (
  {
    items: state.posts.entries,
    isFetching: state.posts.isFetching,
    error: state.posts.error
  }
);

export default connect(stateToProps)(Index);
