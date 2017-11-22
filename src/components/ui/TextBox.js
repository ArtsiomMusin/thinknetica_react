import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({children}) => (
  <h2 style={{margin: 0,
    top: '50%',
    left: '50%'}}>{children}</h2>
);

TextBox.propTypes = {
  children: PropTypes.node
};

export default TextBox;
