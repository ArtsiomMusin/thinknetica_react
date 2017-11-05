import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const TextBox = ({children}) => (
  DOM.span(null, children)
);

TextBox.propTypes = {
  text: PropTypes.string
};

TextBox.defaultProps = {
  text: ""
};

export default TextBox;
