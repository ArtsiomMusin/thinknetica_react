const TextBox = ({children}) => (
  DOM.span(null, children)
);

TextBox.propTypes = {
  text: PropTypes.string
};

TextBox.defaultProps = {
  text: ""
};

ReactDOM.render(
  React.createElement(TextBox, {}, 'Hey there!'),
  document.getElementById("textbox")
);
