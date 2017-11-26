import * as types from 'constants/actionTypes/postsActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPosts(name = '', page = 1) {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: { name, page },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
