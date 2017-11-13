import request from 'superagent';

import * as types from 'constants/actionTypes/postsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const recievePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get('http://localhost:3001')
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(recievePosts(response.body));
      });
  };
}
