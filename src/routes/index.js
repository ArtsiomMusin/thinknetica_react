import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/containers/BlogPage';
import AboutPage from 'components/containers/AboutPage';
import Post from 'components/containers/Post';
import { rootPath, postsPath, aboutPath } from 'components/helpers/routes';

const BlogRoutes = () => (
  <BrowserRouter>
    <MainLayout>
      <Route exact path={rootPath()} component={BlogPage} />
      <Route path={aboutPath()} component={AboutPage} />
      <Route path={postsPath()} component={Post} />
    </MainLayout>
  </BrowserRouter>
);

export default BlogRoutes;
