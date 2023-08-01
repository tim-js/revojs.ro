import React, { useState } from "react";
import { Link } from "gatsby";

import Hamburger from "@components/layout/Hamburger";
import logo from "@assets/logo-revojs.svg";
import { RevoSymbol } from "@components/RevoSymbol";
import { getEdition, getPages, currentEdition } from "@utils";

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

const Navigation = (props) => {
  const [showMenu, toggleMenu] = useState(false);
  const isHome = isHomepage(props.location);
  const edition = getEdition();
  const isPastEdition = edition !== currentEdition;

  const { main, secondary, tertiary } = getPages();

  return (
    <>
      <div
        className={`
          navigation
          ${showMenu ? "is-active" : ""}
          ${isHome ? "is-home" : ""}
          ${isPastEdition ? "is-past-edition" : ""}
        `}
      >
        <Logo edition={edition} currentEdition={currentEdition} />
        <nav>
          <Hamburger
            label="Toggle menu"
            active={showMenu}
            id="toggle-primary-navigation"
            onClick={() => toggleMenu(!showMenu)}
          />

          <ul className="primary-navigation">
            {main.map((page) => {
              return <li key={page.name}>{renderPage(page, edition, true)}</li>;
            })}

            <li>
              <ul className={`secondary-navigation`}>
                {[...secondary, ...tertiary].map((page) => {
                  return (
                    <li key={page.name}>{renderPage(page, edition, false)}</li>
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

function Logo({ edition, currentEdition }) {
  const isPastEdition = edition !== currentEdition;

  if (isPastEdition) {
    return (
      <div className="navigation-previous-edition">
        <Link to="/" title={`Go to ${currentEdition} edition`}>
          <Hamburger
            as="div"
            active={true}
            className="white navigation-to-current-edition"
          />

          {/* <Arrow className="navigation-to-current-edition" color="white">
            View edition {currentEdition}
          </Arrow> */}
        </Link>
        <div className="navigation-to-edition-homepage-wrapper">
          <Link
            to={`/${edition}`}
            title={`Go to ${edition} edition`}
            className="navigation-to-edition-homepage"
          >
            <div className="navigation-logo" style={{ width: "40px" }}>
              <RevoSymbol color="white" />
            </div>
            <span className="navigation-edition">{edition}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link to="/" title="go to homepage" className="navigation-logo-link">
      <img src={logo} alt="revo.js" height="40" className="navigation-logo" />
    </Link>
  );
}

function isHomepage(location) {
  if (
    location &&
    (location.pathname === "/" || location.pathname === `/${currentEdition}/`)
  ) {
    return true;
  }

  return false;
}

export default Navigation;
