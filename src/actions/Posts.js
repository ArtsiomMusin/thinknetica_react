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

const increaseLikes = (id) => ({
  type: types.INCREASE_LIKE_COUNT,
  id
});

const findPosts = (name) => ({
  type: types.FIND_POSTS_BY_NAME,
  name
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

export function addLike(id) {
  return (dispatch) => {
    dispatch(increaseLikes(id));
  };
}

export function searchPosts(name) {
  return (dispatch) => {
    dispatch(findPosts(name));
  };
}
