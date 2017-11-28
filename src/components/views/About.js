import React from 'react';
import Helmet from 'react-helmet';
import AboutPage from 'components/containers/AboutPage';

const About = () => (
  <div>
    <AboutPage/>
    <Helmet title="About Blog" />
  </div>
);

export default About;
