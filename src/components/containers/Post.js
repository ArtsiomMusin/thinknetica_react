import React from 'react';
import PropTypes from 'prop-types';
import {threeItems} from 'components/static/items';
import { PanelGroup } from 'react-bootstrap';
import BlogItem from 'components/ui/BlogItem';
import _ from 'lodash';

const findItem = function(id) {
  return _.find(threeItems, ['id', id]);
};

const Post = ({params}) => (
  <PanelGroup>
    <BlogItem image={findItem(params.id).image}
      meta={findItem(params.id).meta}
      text={findItem(params.id).text} />
  </PanelGroup>
);

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
