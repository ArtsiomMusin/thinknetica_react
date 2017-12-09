import React from 'react';
import PropTypes from 'prop-types';

import BlogListContainer from 'containers/BlogListContainer';
import PieChartContainer from 'containers/PieChartContainer';
import PostsSearchContainer from 'containers/PostsSearchContainer';
import AddPost from 'components/elements/AddPost';
import { Grid, Row, Col } from 'react-bootstrap';

const BlogPage = () => (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={6}>
        <div className='smallMargin'>
          <div className='rows'>
            <div className='row'>
              <AddPost className='row'/>
            </div>
            <div className='row toRight'>
              <PostsSearchContainer className='row'/>
            </div>
          </div>
        </div>
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
