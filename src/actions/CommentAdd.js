import * as types from 'constants/actionTypes/commentActionTypes';
import { API_CALL } from 'middleware/API';

export function createComment(data) {
  return {
    [API_CALL]: {
      endpoint: '/comments/new',
      method: 'POST',
      payload: data,
      query: {},
      types: [
        types.CREATE_COMMENT_REQUEST,
        types.CREATE_COMMENT_SUCCESS,
        types.CREATE_COMMENT_ERROR
      ]
    }
  };
}
