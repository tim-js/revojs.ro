import React, { useState } from "react";
import { Link } from "gatsby";

import Hamburger from "@components/layout/Hamburger";
import logo from "@assets/logo-revojs.svg";

import "./navigation.scss";

const PartialMatchLink = ({ to, text, className, ...props }) => (
  <Link
    getProps={({ isPartiallyCurrent }) => {
      return isPartiallyCurrent
        ? { className: `${className} active` }
        : { className };
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
          <button
            id="toggle-primary-navigation"
            onClick={() => toggleMenu(!showMenu)}
          >
            <Hamburger />
          </button>
          <ul className="primary-navigation">
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
                Supporters
              </Link>
            </li>
            <li>
              <button
                id="toggle-secondary-navigation"
                onClick={() => toggleMenu(!showMenu)}
              >
                <Hamburger />
              </button>
              <ul className={`secondary-navigation`}>
                <li>
                  <Link
                    activeClassName="active"
                    to="/about/"
                    className="main-link"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
