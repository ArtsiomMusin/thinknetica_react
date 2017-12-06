import * as types from 'constants/actionTypes/postActionTypes';
import { API_CALL } from 'middleware/API';

export function createPost(data) {
  return {
    [API_CALL]: {
      endpoint: '/posts/new',
      method: 'POST',
      payload: data,
      query: {},
      types: [
        types.CREATE_POST_REQUEST,
        types.CREATE_POST_SUCCESS,
        types.CREATE_POST_ERROR
      ]
    }
  };
}
