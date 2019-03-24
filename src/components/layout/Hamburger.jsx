import React from "react";
import PropTypes from "prop-types";

import "./hamburger.scss";

const Hamburger = ({ active, ...props }) => {
  const _active = active ? "active" : "";

  return (
    <button
      aria-label="Toggle menu"
      className={`hamburger ${_active}`}
      {...props}
    >
      <span className={`hamburger-box`}>
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

Hamburger.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Hamburger;
