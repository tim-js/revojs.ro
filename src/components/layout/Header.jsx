import React from "react";

import "./header.scss";

export default ({ children, className, ...props }) => (
  <header className={`page-header ${className}`} {...props}>
    {children}
  </header>
);
