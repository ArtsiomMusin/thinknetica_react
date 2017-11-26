import React from 'react';
import ReacDOMServer from 'react-dom/server';
import Provider from 'react-redux';
import { matchPath, RouterContext } from 'react-router';
import { parse } from 'qs';
import { assign, compact } from 'lodash';

import { createRoutes} from 'routes';
import store from 'store';
import prepareData from 'helpers/prepareData';

const routes = createRoutes();
export default (req, res) => {
  routes.some(route => {
    const state = { params: {}, routes: [] };

    const match = matchPath(req.url, route);
    if (match)
    {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, parse(req.url.substr(1)));
      Promise.all(compact(prepareData(store, state))).then(() => {
        const initialState = JSON.stringify(store.getState());
        res.status(200);
        res.render(
          'index',
          { initialState }
        );
      });
    }
    return match;
  });
};
