import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({children}) => (
  <h2>{children}</h2>
);

TextBox.propTypes = {
  text: PropTypes.string
};

TextBox.defaultProps = {
  text: ''
};

export default TextBox;
