import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import _ from 'lodash';

//import BlogList from '../ui/BlogList';
import BlogListContainer from 'containers/BlogListContainer';
import PieChart from '../ui/PieChart';
import { Grid, Row, Col, Form, FormGroup } from 'react-bootstrap';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {items} = this.props;

    const piechartData = _.map(
      items,
      (item) => [
        item.text, item.meta.likesCount
      ]);
    return DOM.div(
      null,
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6}>
            <Form inline style={{justifyContent: 'flex-end', display: 'flex'}}>
              <FormGroup controlId="formInlineName">
                <span className="glyphicon glyphicon-search" />
                <input
                  type="text"
                  placeholder="Type post name to find"
                  className="form-control"
                  onChange={this.props.search}/>
              </FormGroup>
            </Form>
            <BlogListContainer like={this.props.like} />
          </Col>
          <Col sm={6} md={6}>
            <PieChart columns={piechartData}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.array,
  like: PropTypes.function,
  search: PropTypes.function
};

BlogPage.defaultProps = {
  items: []
};

export default BlogPage;
