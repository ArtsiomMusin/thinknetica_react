import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import store from 'store';
import { BlogRoutes, createRoutes} from 'routes';
import { matchPath, Router } from 'react-router';
import prepareData from 'helpers/prepareData';
//import DevTools from 'containers/DevTools';

import history from 'helpers/history';

import _ from 'lodash';
import { parse } from 'qs';
const routes = createRoutes();
function historyCb(location) {
  const state = { params: {}, routes: [] };
  routes.some(route => {
    const match = matchPath(location.pathname, route);
    if (match)
    {
      state.routes.push(route);
      _.assign(state.params, match.params);
      _.assign(state.query, parse(location.search.substr(1)));
      prepareData(store, state);
    }
    return match;
  });
}

history.listen(historyCb);
historyCb(history.location);

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
