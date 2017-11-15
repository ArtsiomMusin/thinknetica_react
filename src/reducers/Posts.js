import _ from 'lodash';
import * as types from 'constants/actionTypes/postsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function increaseLike(entries, id) {
  const items = _.assign([], entries);
  const obj = _.find(items, ['id', id]);
  obj.meta.likesCount += 1;
  return items;
}

function findPosts(entries, name) {
  const filter = RegExp(name.currentTarget.value, 'i');
  const items = _.filter(entries, function(o) {
    return o.text.match(filter);
  });

  return items;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return _.assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return _.assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return _.assign(
        {},
        initialState,
        {
          entries: action.response,
          entriesOriginal: action.response
        }
      );
    case types.INCREASE_LIKE_COUNT:
      return _.assign(
        {},
        state,
        { entries: increaseLike(state.entries, action.id) }
      );
    case types.FIND_POSTS_BY_NAME:
      return _.assign(
        {},
        state,
        { entries: findPosts(state.entriesOriginal, action.name) }
      );
    default:
      return state;
  }
}
