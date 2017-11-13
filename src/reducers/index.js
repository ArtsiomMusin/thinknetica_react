import { combineReducers } from 'redux';

import posts from 'reducers/Posts.js';
import post from 'reducers/Post.js';

export default combineReducers({
  posts,
  post
});
