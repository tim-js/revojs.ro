import React from "react";
import PropTypes from "prop-types";

import "./hamburger.scss";

const Hamburger = ({ active, className, as, label, ...props }) => {
  let css = `hamburger ${className || ""} ${active ? "active" : ""}`;

  const Element = as || "button";

  return (
    <Element aria-label={label} className={css} {...props}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </Element>
  );
};

Hamburger.propTypes = {
  as: PropTypes.element,
  label: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Hamburger;
