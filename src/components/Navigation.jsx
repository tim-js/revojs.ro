import React, { useState } from "react";
import { Link } from "gatsby";

import { main, secondary, tertiary } from "@data/pages";

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

function renderPage(page, classNames) {
  const name = page.name;
  const path = page.path || name.toLowerCase();

  if (page.hasSubpages) {
    return (
      <PartialMatchLink to={`/${path}/`} text={name} className={classNames} />
    );
  }

  return (
    <Link activeClassName="active" to={`/${path}/`} className={classNames}>
      {name}
    </Link>
  );
}

export default props => {
  const [showMenu, toggleMenu] = useState(false);
  const isHome = (props.location && props.location.pathname === "/") || false;

  return (
    <>
      <div
        className={`
          navigation
          ${showMenu ? "is-active" : ""}
          ${isHome ? "is-home" : ""}
        `}
      >
        <Link to="/">
          <img
            src={logo}
            alt="revo.js"
            height="40"
            className="navigation-logo"
          />
        </Link>

        <nav>
          <Hamburger
            active={showMenu}
            id="toggle-primary-navigation"
            onClick={() => toggleMenu(!showMenu)}
          />

          <ul className="primary-navigation">
            {main.map(page => {
              return <li key={page.name}>{renderPage(page, "main-link")}</li>;
            })}

            <li>
              <Hamburger
                active={showMenu}
                id="toggle-secondary-navigation"
                onClick={() => toggleMenu(!showMenu)}
              />

              <ul className={`secondary-navigation`}>
                {[...secondary, ...tertiary].map(page => {
                  return (
                    <li key={page.name}>
                      {renderPage(page, "main-link secondary")}
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
