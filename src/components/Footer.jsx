import React from "react";
import { Link } from "gatsby";

export default () => (
  <nav>
    <Link to="/">home</Link>
    {"."}
    <Link to="/speakers/">speakers</Link>
    {"."}
    <Link to="/contact/">contact</Link>
  </nav>
);