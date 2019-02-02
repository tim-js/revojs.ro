import React from "react";
import { Link } from "gatsby";

import "./Header.css";

export default () => (
  <nav>
    <Link to="/">
      <img src="/logo-revo.js.svg" alt="revo.js" height="50" />
    </Link>
    <Link
      getProps={({ isPartiallyCurrent }) => {
        return isPartiallyCurrent ? { className: "active" } : null;
      }}
      to="/speakers/"
    >
      speakers
    </Link>
    <Link activeClassName="active" to="/contact/">
      contact
    </Link>
  </nav>
);
