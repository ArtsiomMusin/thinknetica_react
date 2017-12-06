import React from 'react';
import PropTypes from 'prop-types';

import BlogListContainer from 'containers/BlogListContainer';
import PieChartContainer from 'containers/PieChartContainer';
import PostsSearchContainer from 'containers/PostsSearchContainer';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { postCreatePath } from 'helpers/routes';

const BlogPage = () => (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={6}>
        <PostsSearchContainer />
        <Button bsStyle="primary" href={postCreatePath()}>
          <span
            className="glyphicon glyphicon-plus"
          />
          Add Post
        </Button>
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
