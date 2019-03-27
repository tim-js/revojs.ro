import React from "react";
import PropTypes from "prop-types";

import "./content.scss";

const Content = ({ children, centered, ...props }) => {
  const _centered = centered ? "content--centered" : "";

  return (
    <div className={`content ${_centered}`} {...props}>
      {children}
    </div>
  );
};

Content.propTypes = {
  centered: PropTypes.bool
};

export default Content;
