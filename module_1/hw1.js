const DOM = React.DOM;

// Image component
const Image = ({src, width, height, alt}) => (
  DOM.img({src, width, height, alt})
);

ReactDOM.render(
  React.createElement(Image, {src: "https://goo.gl/yQ62SX", width: "120", height: "120", alt: "Deadly cat on unicorn, yeah!"}),
  document.getElementById("image")
);

//TextBox Component
class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const {text} = this.state;
    return DOM.span(null, text )
  }
}
ReactDOM.render(
  React.createElement(TextBox, {text: 'Hey there!'}),
  document.getElementById("textbox")
);
