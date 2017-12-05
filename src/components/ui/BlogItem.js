import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import LikeContainer from 'containers/LikeContainer';
import Link from 'components/elements/Link';
import { postsPath, postEditPath } from 'helpers/routes';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  tooltip(meta) {
    return <Tooltip id="tooltip">
      {meta.created ? `Created: ${meta.created}` : 'Created: N/A'}
      <br/>
      {meta.updated ? `Updated: ${meta.updated}` : 'Updated: N/A'}
    </Tooltip>;
  }

  render() {
    const {image, meta, text, id} = this.props;
    return (
      <div>
        <div style={{display: 'inline-block'}}>
          <Image src={image.src} />
        </div>
        <div style={{display: 'inline-block'}}>
          <div style={{fontSize: '24px'}}>
            <Link to={postsPath(id)}>
              <TextBox>{text}</TextBox>
            </Link>
            <h5><span className="glyphicon glyphicon-user"/> {meta.author}</h5>
            <div>
              <div>
                <LikeContainer count={meta.likesCount} id={id} />
              </div>
              <div>
                <OverlayTrigger placement="right" overlay={this.tooltip(meta)}>
                  <span className="glyphicon glyphicon-info-sign" />
                </OverlayTrigger>
              </div>
            </div>
            <h5>
              <Link to={postEditPath(id)}>
                <span
                  style={{fontSize: '24px'}}
                  className="glyphicon glyphicon-edit"
                />
              </Link>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
BlogItem.propTypes = {
  image: PropTypes.object,
  meta: PropTypes.object,
  id: PropTypes.string,
  text: PropTypes.string
};

BlogItem.defaultProps = {
  meta: {
    author: 'Unknown'
  }
};

export default BlogItem;
