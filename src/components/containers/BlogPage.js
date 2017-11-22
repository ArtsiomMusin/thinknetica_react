import React from 'react';
import PropTypes from 'prop-types';

import BlogListContainer from 'containers/BlogListContainer';
import PieChartContainer from 'containers/PieChartContainer';
import PostsSearchContainer from 'containers/PostsSearchContainer';
import { Grid, Row, Col } from 'react-bootstrap';

const BlogPage = () => (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={6}>
        <PostsSearchContainer />
        <BlogListContainer />
      </Col>
      <Col sm={6} md={6}>
        <PieChartContainer />
      </Col>
    </Row>
  </Grid>
);

BlogPage.propTypes = {
  items: PropTypes.array
};

BlogPage.defaultProps = {
  items: []
};

export default BlogPage;
