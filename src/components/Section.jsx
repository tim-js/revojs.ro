import React from "react";
import PropTypes from "prop-types";

import "./section.scss";

const Section = props => {
  const theme = props.light ? "section--light" : "";
  const centered = props.centered ? "section--centered" : "";

  return (
    <div className={`section ${theme} ${centered}`}>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  light: PropTypes.bool,
  centered: PropTypes.bool
};

export default Section;
