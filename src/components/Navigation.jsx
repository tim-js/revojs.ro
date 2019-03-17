import React, { useState } from "react";
import { Link } from "gatsby";

import Hamburger from "@components/layout/Hamburger";
import logo from "@assets/logo-revojs.svg";

import "./navigation.scss";

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
      <div className={`navigation ${showMenu ? "is-active" : ""}`}>
        <Link to="/">
          <img
            src={logo}
            alt="revo.js"
            height="40"
            className="navigation-logo"
          />
        </Link>

        <nav>
          <label
            id="toggle-navigation-button"
            onClick={() => toggleMenu(!showMenu)}
          >
            <Hamburger />
          </label>
          <ul className="navigation-menu">
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
