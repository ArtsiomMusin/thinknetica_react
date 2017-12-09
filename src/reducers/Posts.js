import { assign, isEmpty, values, find } from 'lodash';
import * as types from 'constants/actionTypes/postsActionTypes';
import * as likeTypes from 'constants/actionTypes/likeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function increaseLike(entries, object) {
  const items = values(assign({}, entries));
  const obj = find(items, ['id', object.id]);
  if (!obj) return items;
  obj.meta.likesCount = object.meta.likesCount;
  return items;
}

const getCurrentState = (state) => {
  if (isEmpty(state.entries)) {
    return initialState;
  }
  return state;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, getCurrentState(state), { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign(
        {},
        initialState,
        { entries: action.response }
      );
    case likeTypes.UPDATE_LIKE_SUCCESS:
      return assign(
        {},
        state,
        { entries: increaseLike(state.entries, action.response) }
      );
    default:
      return state;
  }
}
