const DOM = React.DOM;

const Image = ({src, width, height, alt}) => (
  DOM.img({src, width, height, alt})
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
  src: "https://goo.gl/yQ62SX",
  width: "50",
  height: "50",
  alt: ""
};

ReactDOM.render(
  React.createElement(
    Image,
    {
      src: "https://goo.gl/yQ62SX",
      width: "120",
      height: "120",
      alt: "Deadly cat on unicorn, yeah!"
    }
  ),
  document.getElementById("image")
);
