import React from "react";
import PropTypes from "prop-types";

import "./header.scss";

const Header = ({ children, className, centered, type, image, ...props }) => {
  const _centered = centered ? "header--centered" : "";
  const _type = type ? `header--${type}` : "";
  const _image = image ? image : "";
  const _className = className || "";

  return (
    <header className={`header ${_centered} ${_type} ${_className}`} {...props}>
      <div className="header-content">{children}</div>
      {_image && <div className={`header-image ${_image}`} />}
    </header>
  );
};

Header.propTypes = {
  centered: PropTypes.bool,
  type: PropTypes.oneOf(["main", "secondary"]),
  image: PropTypes.string
};

export default Header;
