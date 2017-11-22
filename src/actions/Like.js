import * as types from 'constants/actionTypes/postsActionTypes';
import { API_CALL } from 'middleware/API';

export function addLike(id) {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'POST',
      query: { id },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
