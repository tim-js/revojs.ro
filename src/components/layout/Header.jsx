import React from "react";
import PropTypes from "prop-types";

import "./header.scss";

const Header = ({ children, className, centered, page, ...props }) => {
  const _centered = centered ? "header--centered" : "";
  const _page = page ? "header--page" : "";

  return (
    <header
      className={`page-header ${_centered} ${_page} ${className}`}
      {...props}
    >
      {children}
    </header>
  );
};

Header.propTypes = {
  centered: PropTypes.bool,
  page: PropTypes.bool
};

export default Header;
