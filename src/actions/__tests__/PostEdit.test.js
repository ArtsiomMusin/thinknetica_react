import { updatePost } from 'actions/PostEdit';
import * as types from 'constants/actionTypes/postActionTypes';
import { API_CALL } from 'middleware/API';

describe('PostEdit Action', () => {
  it('should return correct action', () => {
    const data = {id: 1};
    const expectedAction = {
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
    expect(updatePost(data)).toEqual(expectedAction);
  });
});
