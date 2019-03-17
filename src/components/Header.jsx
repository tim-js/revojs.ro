import React, { useState } from "react";
import { Link } from "gatsby";

import "./header.scss";

const PartialMatchLink = ({ to, text, ...props }) => (
  <Link
    getProps={({ isPartiallyCurrent }) => {
      return isPartiallyCurrent ? { className: "active" } : null;
    }}
    to={to}
    {...props}
  >
    {text}
  </Link>
);

export default () => {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <>
      <input type="checkbox" id="toggle-navigation" />

      <div className={`header ${showMenu ? 'is-active' : ''}`}>
        <Link to="/">
          <img
            src="logo-revojs.svg"
            alt="revo.js"
            height="50"
            className="header-logo"
          />
        </Link>

        <nav>
          <label
            htmlFor="toggle-navigation"
            id="toggle-navigation-button"
            className="hamburger-box"
            onClick={() => toggleMenu(!showMenu)}
          >
            <span className="hamburger-inner" />
          </label>
          <ul className="header-navigation">
            <li>
              <PartialMatchLink
                to="/speakers/"
                text="Speakers"
                className="main-link"
              />
            </li>
            <li>
              <Link activeClassName="active" to="/cfp/" className="main-link">
                Call for Papers
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                to="/tickets/"
                className="main-link"
              >
                Tickets
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                to="/supporters/"
                className="main-link"
              >
                Our Supporters
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
