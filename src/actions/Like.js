import * as types from 'constants/actionTypes/likeActionTypes';

const increaseLikes = (id) => ({
  type: types.INCREASE_LIKE_COUNT,
  id
});

export function addLike(id) {
  return (dispatch) => {
    dispatch(increaseLikes(id));
  };
}
