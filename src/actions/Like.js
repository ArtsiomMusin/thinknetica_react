import * as types from 'constants/actionTypes/likeActionTypes';
import { API_CALL } from 'middleware/API';

export function addLike(id) {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'POST',
      query: { id },
      types: [
        types.UPDATE_LIKE_REQUEST,
        types.UPDATE_LIKE_SUCCESS,
        types.UPDATE_LIKE_ERROR
      ]
    }
  };
}
