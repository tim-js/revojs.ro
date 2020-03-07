import React from "react";
import PropTypes from "prop-types";

import "./arrow.scss";

const Arrow = ({ children, color = "dark", className }) => {
  return (
    <span
      className={`arrow-animated ${className}`}
      style={{ "--color": `var(--${color})` }}
    >
      <span className={`arrow-animated-inner`}>{children}</span>
    </span>
  );
};

Arrow.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "accent", "dark", "white"])
};

export default Arrow;
