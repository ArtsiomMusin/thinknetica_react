import React from 'react';
import ReacDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath, StaticRouter } from 'react-router';
import { parse } from 'qs';
import { assign, compact } from 'lodash';

import { BlogRoutes, createRoutes } from 'routes';
import createStore from 'store';
import prepareData from 'helpers/prepareData';

import Helmet from 'react-helmet';

const store = createStore();
const routes = createRoutes();
export default (req, res) => {
  const found = routes.some(route => {
    const state = { params: {}, routes: [] };
    const match = matchPath(req.url, route);

    if (match)
    {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, parse(req.url.substr(1)));
      Promise.all(compact(prepareData(store, state))).then(() => {
        const initialState = JSON.stringify(store.getState());

        const content = ReacDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={state}>
              <BlogRoutes />
            </StaticRouter>
          </Provider>
        );

        const head = Helmet.rewind();

        res.status(200);
        res.render(
          'index',
          { initialState, content, head }
        );
      })
        .catch ((error) => {
          console.log(error);
          res.status(500).sendFile('500.html', {root: 'src/components/views/'});
        });
      return match;
    }
  });

  if (!found) {
    res.status(404).sendFile('404.html', {root: 'src/components/views/'});
  }
};
