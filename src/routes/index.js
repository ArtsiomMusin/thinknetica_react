import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import AboutPage from 'components/containers/AboutPage';
import { rootPath, postsPath, aboutPath } from 'helpers/routes';
//import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const BlogRoutes = () => (
  <BrowserRouter>
    <MainLayout>
      <Route
        exact path={rootPath()}
        component={PostsContainer}
      />
      <Route path={aboutPath()} component={AboutPage} />
      <Route
        path={postsPath()}
        component={PostContainer}
        prepareData={(store, query, params) =>
          store.dispatch(fetchPost(params.id))
        }
      />
    </MainLayout>
  </BrowserRouter>
);

export default BlogRoutes;
