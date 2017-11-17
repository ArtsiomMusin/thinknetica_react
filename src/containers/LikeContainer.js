import { connect } from 'react-redux';
import Like from 'components/ui/Like';
import { addLike } from 'actions/Like';

const stateToProps = (state, ownProps) => (
  {
    count: ownProps.count,
    id: ownProps.id
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    like: (id) => {
      dispatch(addLike(id));
    }
  }
);

export default connect(stateToProps, mapDispatchToProps)(Like);
