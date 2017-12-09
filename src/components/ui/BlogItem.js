import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import LikeContainer from 'containers/LikeContainer';
import CommentsContainer from 'containers/CommentsContainer';
import Link from 'components/elements/Link';
import AddCommentButton from 'components/ui/AddCommentButton';
import { postsPath, postEditPath } from 'helpers/routes';
import { Tooltip, OverlayTrigger, PanelGroup, Panel } from 'react-bootstrap';

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
    const {image, meta, text, id, comments, showComments} = this.props;
    return (
      <div>
        <PanelGroup className="wrapper" >
          <Panel className="left">
            <div className="center">
              <Image src={image.src} />
            </div>
            <div className="center">
              <LikeContainer count={meta.likesCount} id={id} />
            </div>
          </Panel>
          <Panel className="right">
            <div style={{fontSize: '24px'}}>
              <div className="rows">
                <Link className="center, row" to={postsPath(id)}>
                  <TextBox >{text}</TextBox>
                </Link>
                <div className="row, toRight">
                  <Link to={postEditPath(id)}>
                    <span
                      style={{fontSize: '24px'}}
                      className="glyphicon glyphicon-edit"
                    />
                  </Link>
                </div>
              </div>
              <div className="rows">
                <div className="row">
                  <h5>
                    <span className="glyphicon glyphicon-user"/>
                    {meta.author}
                  </h5>
                </div>
                <div className="row, toRight">
                  <div>
                    <OverlayTrigger
                      placement="right"
                      overlay={this.tooltip(meta)}>
                      <span className="glyphicon glyphicon-info-sign" />
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </PanelGroup>
        { showComments &&
          <div>
            <div className="rows">
              <div className="row">
                <h4> Comments: </h4>
              </div>
              <div className="row toRight">
                <AddCommentButton/>
              </div>
            </div>
            <div id="comments">
              <CommentsContainer comments={comments}/>
            </div>
          </div>
        }
      </div>
    );
  }
}
BlogItem.propTypes = {
  image: PropTypes.object,
  meta: PropTypes.object,
  id: PropTypes.string,
  text: PropTypes.string,
  comments: PropTypes.array,
  showComments: PropTypes.bool
};

BlogItem.defaultProps = {
  meta: {
    author: 'Unknown'
  }
};

export default BlogItem;
