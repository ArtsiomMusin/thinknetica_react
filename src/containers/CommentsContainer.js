import { connect } from 'react-redux';
import Comments from 'components/ui/Comments';

const stateToProps = (state) => ({
  comments: state.post.entry.comments
});

export default connect(stateToProps)(Comments);
