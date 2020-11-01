import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ classes, type, clickEvent, children }) {
  return (
    <button className={classes} type={type} onClick={clickEvent}>
      {children}
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
