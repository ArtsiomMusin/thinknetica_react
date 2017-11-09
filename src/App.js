import React from 'react';
import { Router, browserHistory} from 'react-router';
import routes from 'routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Router history={browserHistory} routes={routes} />
);

export default App;
