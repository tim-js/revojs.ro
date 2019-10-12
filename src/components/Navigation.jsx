import React, { useState } from "react";
import { Link } from "gatsby";

import Hamburger from "@components/layout/Hamburger";
import logo from "@assets/logo-revojs.svg";
import { getEdition, getPages } from "@utils";

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

function renderPage(page, edition, isMainLink) {
  const name = page.name;
  const path = page.path || name.toLowerCase();
  const classNames = isMainLink ? "main-link" : "main-link secondary";
  const uri = isMainLink ? `/${edition}/${path}/` : `/${path}/`;

  if (page.hasSubpages) {
    return <PartialMatchLink to={uri} text={name} className={classNames} />;
  }

  return (
    <Link activeClassName="active" to={uri} className={classNames}>
      {name}
    </Link>
  );
}

export default props => {
  const [showMenu, toggleMenu] = useState(false);
  const isHome = (props.location && props.location.pathname === "/") || false;
  const edition = getEdition();

  // let backToCurrentEdition = null;
  // if (edition != currentEdition) {
  //   backToCurrentEdition = <Link to="/">Back to current edition</Link>;
  // }

  const { main, secondary, tertiary } = getPages();

  return (
    <>
      <div
        className={`
          navigation
          ${showMenu ? "is-active" : ""}
          ${isHome ? "is-home" : ""}
        `}
      >
        <Link to="/" title="go to homepage" className="navigation-logo-link">
          <img
            src={logo}
            alt="revo.js"
            height="40"
            className="navigation-logo"
          />
          {/* <span className="navigation-edition">{edition}</span> */}
        </Link>

        <nav>
          <Hamburger
            active={showMenu}
            id="toggle-primary-navigation"
            onClick={() => toggleMenu(!showMenu)}
          />

          <ul className="primary-navigation">
            {main.map(page => {
              return <li key={page.name}>{renderPage(page, edition, true)}</li>;
            })}

            <li>
              <ul className={`secondary-navigation`}>
                {[...secondary, ...tertiary].map(page => {
                  return (
                    <li key={page.name}>{renderPage(page, edition, false)}</li>
                  );
                })}
              </ul>
            </li>
          </ul>
          {/* {backToCurrentEdition} */}
        </nav>
      </div>
    </>
  );
};
