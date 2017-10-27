const DOM = React.DOM;

const TextBox = ({text}) => (
  DOM.span(null, text)
);

TextBox.propTypes = {
  text: PropTypes.string
};

TextBox.defaultProps = {
  text: ""
};

ReactDOM.render(
  React.createElement(TextBox, {text: 'Hey there!'}),
  document.getElementById("textbox")
);
