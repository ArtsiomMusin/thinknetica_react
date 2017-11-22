import { connect } from 'react-redux';
import BlogItem from 'components/ui/BlogItem';

const stateToProps = (state) => ({
  items: state.posts.entries
});

export default connect(stateToProps)(BlogItem);
