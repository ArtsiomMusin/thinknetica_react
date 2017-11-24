import _ from 'lodash';
import * as types from 'constants/actionTypes/postsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

const getCurrentState = (state) => {
  if (_.isEmpty(state.entries)) {
    return initialState;
  }
  return state;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return _.assign({}, getCurrentState(state), { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return _.assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return _.assign(
        {},
        initialState,
        { entries: action.response }
      );
    default:
      return state;
  }
}
