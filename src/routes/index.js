import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import AboutPage from 'components/containers/AboutPage';
import { rootPath, postsPath, aboutPath } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { map } from 'lodash/collection';

const routesConst = [
  {
    exact: true,
    path: rootPath(),
    prepareData: (store) => {
      return store.dispatch(fetchPosts());
    },
    componeprepareDatant: PostsContainer
  },
  {
    path: postsPath(),
    prepareData: (store, query, params) => {
      return store.dispatch(fetchPost(params.id));
    },
    component: PostContainer
  },
  {
    path: aboutPath(),
    component: AboutPage
  }
];

export const BlogRoutes = () => (
  <MainLayout>
    <Switch>
      { map(routesConst, (route, index) => <Route key={index} {...route} />) }
    </Switch>
  </MainLayout>
);

export function createRoutes() {
  return routesConst;
}

export default BlogRoutes;
