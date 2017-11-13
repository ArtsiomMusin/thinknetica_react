import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import store from 'store';
import BlogRoutes from 'routes';
//import { match } from 'react-router';
import history from 'helpers/history';
//import prepareData from 'helpers/prepareData';
//import DevTools from 'containers/DevTools';
import { fetchPosts } from 'actions/Posts';
//import { fetchPost } from 'actions/Post';
//
function historyCb(location) {
  console.log('LOCATION', location);
  // match({ location }, (error, redirect, state) => {
  //   if (!error && !redirect) {
  //
  //   }
  // });
}
historyCb(window.location);
history.listen(historyCb);
store.dispatch(fetchPosts());
// store.dispatch(fetchPost('59f72ed596059543b33bb615'));


const App = () => (
  <Provider store={store}>
    <BlogRoutes />
  </Provider>
);

// ReactDOM.render(
//   <DevTools store={store} />,
//   document.getElementById('devtools')
// );

export default App;
