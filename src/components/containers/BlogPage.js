import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import _ from 'lodash';
import request from 'superagent';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import { RestApiServer } from 'components/helpers/routes';
import { Grid, Row, Col, Form, FormGroup } from 'react-bootstrap';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.like = _.bind(this.like, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      RestApiServer(),
      {},
      (err, res) => {
        this.itemsOriginal = res.body;
        this.setState({items: res.body});
      }
    );
  }

  like(id) {
    const items = _.assign([], this.state.items);
    const obj = _.find(items, ['id', id]);
    if (!obj.meta.likesCount) {
      obj.meta.likesCount = 0;
    }
    obj.meta.likesCount += 1;
    this.setState({ items });
  }

  search(e) {
    const filter = RegExp(e.currentTarget.value, 'i');
    const items = _.filter(this.itemsOriginal, function(o) {
      return o.text.match(filter);
    });
    this.setState({ items });
  }

  render() {
    const {items} = this.state;

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
            <Form inline>
              <FormGroup controlId="formInlineName">
                <span className="glyphicon glyphicon-search" />
                <input
                  type="text"
                  placeholder="Type post name to find"
                  className="form-control"
                  onChange={this.search.bind(this)}/>
              </FormGroup>
            </Form>
            <BlogList items={items} like={this.like} />
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
  items: PropTypes.array
};

BlogPage.defaultProps = {
  items: []
};

export default BlogPage;
