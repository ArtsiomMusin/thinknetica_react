import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import About from 'components/views/About';
import ContactUs from 'components/views/ContactUs';
import { rootPath, postsPath, aboutPath, contactUs } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { map } from 'lodash/collection';
import initialLoad from 'helpers/initialLoad';

const routesConst = [
  {
    path: rootPath(),
    exact: true,
    prepareData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    },
    component: PostsContainer
  },
  {
    path: postsPath(),
    prepareData: (store, query, params) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    },
    component: PostContainer
  },
  {
    path: aboutPath(),
    component: About
  },
  {
    path: contactUs(),
    component: ContactUs
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
