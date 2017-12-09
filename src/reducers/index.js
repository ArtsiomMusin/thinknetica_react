import { combineReducers } from 'redux';

import posts from 'reducers/Posts.js';
import post from 'reducers/Post.js';
import pagination from 'reducers/Pagination.js';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  posts,
  post,
  pagination,
  form: formReducer
});
