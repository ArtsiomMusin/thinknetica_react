import MainLayout from 'components/layouts/MainLayout';
import AboutPage from 'components/containers/AboutPage';
import { aboutPath } from 'components/helpers/routes';

const About = {
  path: aboutPath(),
  component: AboutPage
};

export default {
  component: MainLayout,
  childRoutes: [
    About
  ]
};
