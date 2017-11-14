import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import AboutPage from 'components/containers/AboutPage';
import { rootPath, postsPath, aboutPath } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

// const routesConst = {
//   root: {
//     exact: true,
//     path: rootPath(),
//     prepareData: (store) => store.dispatch(fetchPosts())
//   }
// };

// <Route
//   exact path={rootPath()}
//   component={PostsContainer}
//   prepareData={(store) =>
//     store.dispatch(fetchPosts())
//   }
// />

//const routes = ;

const BlogRoutes = () => (
  <MainLayout>
    <Switch>
      <Route
        exact path={rootPath()}
        component={PostsContainer}
        prepareData={(store) =>
          store.dispatch(fetchPosts())
        }
      />
      <Route path={aboutPath()} component={AboutPage} />
      <Route
        path={postsPath()}
        component={PostContainer}
        prepareData={(store, query, params) =>
          store.dispatch(fetchPost(params.id))
        }
      />
    </Switch>
  </MainLayout>
);

export default BlogRoutes;
