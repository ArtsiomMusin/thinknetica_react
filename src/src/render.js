import React from 'react';
import ReactDOMServer from 'react-dom/server';
import BlogPage from './components/containers/BlogPage';

ReactDOMServer.renderToString(
  React.createElement(BlogPage)
);
