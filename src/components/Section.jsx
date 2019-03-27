import React from "react";
import PropTypes from "prop-types";

import "./section.scss";

const Section = props => {
  const _theme = props.light ? "section--light" : "";
  const _centered = props.centered ? "section--centered" : "";
  const _className = props.className || "";

  return (
    <div className={`section ${_theme} ${_centered} ${_className}`}>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  light: PropTypes.bool,
  centered: PropTypes.bool
};

export default Section;
