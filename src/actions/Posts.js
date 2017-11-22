import request from 'superagent';
import * as types from 'constants/actionTypes/postsActionTypes';
import { apiServerName } from 'constants/API';

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

const findPosts = (event) => ({
  type: types.FIND_POSTS_BY_NAME,
  event
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(apiServerName)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(recievePosts(response.body));
      });
  };
}

export function searchPosts(event) {
  return (dispatch) => {
    dispatch(findPosts(event));
  };
}
