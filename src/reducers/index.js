import { combineReducers } from 'redux';

import posts from 'reducers/Posts.js';
import post from 'reducers/Post.js';
import pagination from 'reducers/Pagination.js';

export default combineReducers({
  posts,
  post,
  pagination
});
