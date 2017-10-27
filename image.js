const DOM = React.DOM;

const Image = ({src, width, height, alt}) => (
  DOM.img({src, width, height, alt})
);

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
