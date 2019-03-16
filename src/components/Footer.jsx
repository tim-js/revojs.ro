import React from "react";
import { Link } from "gatsby";

import "./footer.scss";

export default () => (
  <footer className="footer">
    <nav>
      <div className="internal-links">
        <ul className="footer-menu">
          <li>
            <Link to="/speakers/">Speakers</Link>
          </li>
          <li>
            <Link to="/cfp/">Call for Papers</Link>
          </li>
          <li>
            <Link to="/tickets/">Tickets</Link>
          </li>
          <li>
            <Link to="/supporters/">Our Supporters</Link>
          </li>
        </ul>

        <ul className="footer-menu">
          <li>
            <Link to="/travel-info/">Travel Info</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/press/">Press</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>

        <ul className="footer-menu">
          <li>
            <Link to="/code-of-conduct/">Code of Conduct</Link>
          </li>
          <li>
            <Link to="/privacy-policy/">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div className="external-links">
        <div className="social-media">
          <a
            href="https://twitter.com/revojsro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="twitter.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/revojsro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/revo.js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/revojs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.svg" alt="Linkedin" />
          </a>
          {/*
          <a
          href="https://medium.com/revo-js"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src="medium.svg" alt="Medium" />
          </a>
          */}
        </div>
        <a href="mailto:info@revojs.ro" className="footer-email">
          info@revojs.ro
        </a>
      </div>
    </nav>

    <p className="copyright">&copy; revo.js 2019. All rights reserved.</p>
  </footer>
);
