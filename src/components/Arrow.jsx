import React from "react";
import PropTypes from "prop-types";

import "./arrow.scss";

const Arrow = ({ children, light, className }) => {
  const _theme = light ? "arrow-animated-inner--light" : "";

  return (
    <span className={`arrow-animated ${className}`}>
      <span className={`arrow-animated-inner ${_theme}`}>{children}</span>
    </span>
  );
};

Arrow.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.node,
};

export default Arrow;
