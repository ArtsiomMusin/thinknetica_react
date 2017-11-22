import { connect } from 'react-redux';
import { map } from 'lodash/collection';
import PieChart from 'components/ui/PieChart';

function buildColumns(state) {
  return map(
    state.posts.entries,
    (item) => [
      item.text, item.meta.likesCount
    ]);
}

const stateToProps = (state) => (
  {
    columns: buildColumns(state)
  }
);

export default connect(stateToProps)(PieChart);
