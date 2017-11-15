import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Image = ({src, width, height, alt}) => (
  DOM.img({src, width, height, alt, className: 'img-rounded'})
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  alt: PropTypes.string
};

Image.defaultProps = {
  src: 'https://goo.gl/yQ62SX',
  width: '50',
  height: '50',
  alt: ''
};

export default Image;
