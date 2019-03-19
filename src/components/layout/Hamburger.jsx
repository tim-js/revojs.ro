import React from "react";
import PropTypes from "prop-types";

import "./hamburger.scss";

const Hamburger = props => {
  const active = props.active ? "active" : "";

  return (
    <span className={`hamburger-box ${active}`}>
      <span className="hamburger-inner" />
    </span>
  );
};

Hamburger.propTypes = {
  active: PropTypes.bool
};

export default Hamburger;
