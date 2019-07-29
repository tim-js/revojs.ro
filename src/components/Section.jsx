import React from "react";
import PropTypes from "prop-types";

import "./section.scss";

const Section = ({ children, light, centered, className, ...props }) => {
  const _theme = light ? "section--light" : "";
  const _centered = centered ? "section--centered" : "";
  const _className = className || "";

  return (
    <div className={`section ${_theme} ${_centered} ${_className}`} {...props}>
      {children}
    </div>
  );
};

Section.propTypes = {
  light: PropTypes.bool,
  centered: PropTypes.bool
};

export default Section;
