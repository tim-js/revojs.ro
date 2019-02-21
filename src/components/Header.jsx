import React from "react";
import { Link } from "gatsby";

const PartialMatchLink = props => (
  <Link
    getProps={({ isPartiallyCurrent }) => {
      return isPartiallyCurrent ? { className: "active" } : null;
    }}
    to={props.to}
  >
    {props.text}
  </Link>
);

export default () => (
  <nav>
    <Link to="/">
      <img src="/logo-revo.js.svg" alt="revo.js" height="50" />
    </Link>

    <PartialMatchLink to="/speakers/" text="speakers" />
    {" | "}
    <PartialMatchLink to="/blog/" text="blog" />
    {" | "}
    <Link activeClassName="active" to="/contact/">
      contact
    </Link>
  </nav>
);
