import React from 'react';
import BlogPage from './components/containers/BlogPage';
import {threeItems} from './components/static/items';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => (
  <BlogPage items={threeItems} />
);

export default App;
