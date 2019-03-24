import React from "react";
import { Link } from "gatsby";

import "./footer.scss";

import facebook from "@assets/facebook.svg";
import twitter from "@assets/twitter.svg";
import instagram from "@assets/instagram.svg";
import linkedin from "@assets/linkedin.svg";
// import medium from "@assets/medium.svg";
import revojs from "@assets/revo.js.svg";

import { main, secondary, tertiary } from "./_pages";

function renderPage(page) {
  const name = page.name;
  const path = page.path || name.toLowerCase();

  return <Link to={`/${path}/`}>{name}</Link>;
}

export default () => (
  <footer className="footer">
    <nav>
      <div className="internal-links">
        <ul className="footer-menu">
          {main.map(page => {
            return <li key={page.name}>{renderPage(page)}</li>;
          })}
        </ul>

        <ul className="footer-menu">
          {secondary.map(page => {
            return <li key={page.name}>{renderPage(page)}</li>;
          })}
        </ul>

        <ul className="footer-menu">
          {tertiary.map(page => {
            return <li key={page.name}>{renderPage(page)}</li>;
          })}
        </ul>
      </div>

      <div className="external-links">
        <div className="social-media">
          <a
            href="https://twitter.com/revojsro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/revojsro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/revo.js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/revojs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          {/*
          <a
          href="https://medium.com/revo-js"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={medium} alt="Medium" />
          </a>
          */}
        </div>
        <a href="mailto:info@revojs.ro" className="footer-email">
          info@revojs.ro
        </a>
      </div>
    </nav>

    <p className="copyright">
      &copy; <img className="revojs-text" src={revojs} alt="revo.js" /> 2019.
      All rights reserved.
    </p>
  </footer>
);
