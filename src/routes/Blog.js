import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';
import { rootPath, postsPath } from 'components/helpers/routes';

const Index = {
  path: rootPath(),
  component: BlogPage
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
