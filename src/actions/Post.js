import request from 'superagent';

import * as types from 'constants/actionTypes/postActionTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const recievePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`http://localhost:3001/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(recievePost(response.body));
      });
  };
}
