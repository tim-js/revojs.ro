import React from "react";
import PropTypes from "prop-types";

const colorMap = {
  white: "white",
  light: "light-faded",
  dark: "dark",
  primary: "highlight",
  accent: "accent"
};

const Text = ({ children, mono, bold, color }) => {
  let classes = "";
  color && (classes += ` ${colorMap[color]}`);
  mono && (classes += ` mono`);
  bold && (classes += ` bold`);

  return <span className={classes}>{children}</span>;
};

Text.propTypes = {
  size: PropTypes.number,
  mono: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.oneOf(["white", "light", "dark", "primary", "accent"])
};

Text.defaultProps = {
  color: "dark"
};

export default Text;
