import React from "react";
import PropTypes from "prop-types";

import "./header.scss";

const Header = ({ children, className, centered, ...props }) => {
  const _centered = centered ? "header--centered" : "";

  return (
    <header className={`page-header ${_centered} ${className}`} {...props}>
      {children}
    </header>
  );
};

Header.propTypes = {
  centered: PropTypes.bool
};

export default Header;
