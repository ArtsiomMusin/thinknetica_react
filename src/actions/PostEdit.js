import * as types from 'constants/actionTypes/postActionTypes';
import { API_CALL } from 'middleware/API';

export function updatePost(data) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${data.id}/edit`,
      method: 'PUT',
      payload: data,
      query: {},
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
