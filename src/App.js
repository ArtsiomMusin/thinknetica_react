import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import store from 'store';
import BlogRoutes from 'routes';
import { matchPath, Router } from 'react-router';
//import history from 'helpers/history';
//import prepareData from 'helpers/prepareData';
//import DevTools from 'containers/DevTools';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
//
// function historyCb(location) {
//   console.log('LOCATION', location);
//   // match({ location }, (error, redirect, state) => {
//   //   if (!error && !redirect) {
//   //
//   //   }
//   // });
// }
//historyCb(window.location);

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import _ from 'lodash';
import { parse } from 'qs';
//const routes = createRoutes();
//console.log('ROUTES', routes);
const routes = [{path: '/', exact: true}, {path: '/posts/:id'}];
function historyCb(location, action) {
  console.log('LOCATION', location, action);
  const state = { params: {}, routes: [] };
  routes.some(route => {
    const match = matchPath(location.pathname, route);
    if (match)
    {
      state.routes.push(route);
      _.assign(state.params, match.params);
      _.assign(state.query, parse(location.search.substr(1)));
      console.log("MATCH: ", match);
      if( match.path === '/') {
        store.dispatch(fetchPosts());
      } else if( match.path === '/posts/:id' ) {
        store.dispatch(fetchPost(match.params.id));
      }
    }
    return match;
  });
  console.log("STATE: ", state);
  // const withoutScroll = (location.state || {}).withoutScroll;
  // const nonPush = action != 'PUSH'; // Не скролить по "назад"
  //
  // if
  //
  // prepareData(store, state).subscribe(
  //   _.identity,
  //   _.identity,
  //   () => nonPush || withoutScroll || window.scrollTo(0,0)
  // );
}

history.listen(historyCb);
historyCb(history.location);

// store.dispatch(fetchPost('59f72ed596059543b33bb615'));

// import createHistory from 'history/createBrowserHistory'
//
// const history = createHistory()
//
// // Get the current location.
// const location = history.location
//
// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log('TEST',action, location.pathname, location.state, BlogRoutes)
// })

// Use push, replace, and go to navigate around.
//history.push('/', { some: 'state' })

// To stop listening, call the function returned from listen().
//unlisten()

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <BlogRoutes />
    </Router>
  </Provider>
);

// ReactDOM.render(
//   <DevTools store={store} />,
//   document.getElementById('devtools')
// );

export default App;
