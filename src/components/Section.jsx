import React from "react";
import PropTypes from "prop-types";

import "./section.scss";

const Section = props => {
  const theme = props.light ? "section--light" : "";
  const centered = props.centered ? "section--centered" : "";

  return (
    <section className={`section ${theme} ${centered}`}>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  light: PropTypes.bool,
  centered: PropTypes.bool
};

export default Section;
