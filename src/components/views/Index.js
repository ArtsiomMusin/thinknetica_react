import React from 'react';
import Helmet from 'react-helmet';
import BlogPage from 'components/containers/BlogPage';

const Index = ({ items }) => (
  <div>
    <BlogPage items={items}/>
    <Helmet title="Cool Posts" />
  </div>
);

Index.propTypes = {
  items: BlogPage.propTypes.items
};

export default Index;
