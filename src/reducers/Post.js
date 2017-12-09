import { assign } from 'lodash';
import * as types from 'constants/actionTypes/postActionTypes';
import * as likeTypes from 'constants/actionTypes/likeActionTypes';
import * as commentTypes from 'constants/actionTypes/commentActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case types.UPDATE_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.UPDATE_POST_ERROR:
      return assign({}, state, { error: true });
    case types.UPDATE_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case commentTypes.CREATE_COMMENT_SUCCESS:
      return assign(
        {},
        state,
        { entry: action.response }
      );
    case likeTypes.UPDATE_LIKE_SUCCESS:
      return assign(
        {},
        state,
        { entry: action.response }
      );
    default:
      return state;
  }
}
