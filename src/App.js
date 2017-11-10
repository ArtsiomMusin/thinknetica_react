import React from 'react';
import { Router } from 'react-router';
import history from 'components/helpers/history';
import routes from 'routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Router history={history} routes={routes} />
);

export default App;
