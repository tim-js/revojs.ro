import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ children, white, ...props }) => {
  const _white = white ? "button--white" : "";

  return (
    <span className={`button ${_white}`} {...props}>
      {children}
    </span>
  );
};

Button.propTypes = {
  white: PropTypes.bool,
  children: PropTypes.string
};

export default Button;
