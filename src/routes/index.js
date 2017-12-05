import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
//import PostEditContainer from 'containers/PostEditContainer';
import About from 'components/views/About';
import ContactUs from 'components/views/ContactUs';
import PostEdit from 'components/views/PostEdit';
import { rootPath, postsPath, aboutPath,
  contactUs, postEditPath } from 'helpers/routes';
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
    exact: true,
    prepareData: (store, query, params) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    },
    component: PostContainer
  },
  {
    path: postEditPath(),
    exact: true,
    prepareData: (store, query, params) => {
      if (initialLoad()) return;
      console.log("PRAMMMM", params.id);
      return store.dispatch(fetchPost(params.id));
    },
    component: PostEdit
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
