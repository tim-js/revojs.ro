import React from "react";
// import Layout from "../components/Layout";

import "./index.teaser.css";

export default () => (
  <>
    <h1 href="/" className="logo">
      <img src="logo-revojs.svg" alt="revo.js" height="64" />
    </h1>

    <main role="main">
      <header className="splash">
        <h2>
          A two-day JavaScript <strong className="highlight">conference</strong>
        </h2>
        <div className="loading">
          <div className="progress-bar">
            <div className="progress" />
          </div>
          environment loading
        </div>
        <time className="heading" dateTime="2019-10-03">
          Oct.3-4.2019
        </time>
        <span className="location">Timisoara_RO</span>
      </header>

      <div className="content">
        <ul className="numbers">
          <li>
            <strong className="number">12</strong>
            <span>Team Members</span>
          </li>
          <li>
            <strong className="number">4036</strong>
            <span>Slack Messages</span>
          </li>
          <li>
            <strong className="number">186</strong>
            <span>Caffeinated Beverages</span>
          </li>
          {/* <li>
            <strong className="number">2GB</strong>
            <span>Generated Materials</span>
          </li> */}
        </ul>

        <div className="contact">
          <strong className="heading">
            We are working hard to bring you a great experience.
          </strong>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span className="highlight">info@revojs.ro</span>
          <br />
          <br />
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
            <!--
            <a
              href="https://medium.com/revo-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="medium.svg" alt="Medium" />
            </a>
            -->
          </div>
        </div>
      </div>
    </main>

    <p className="copyright">&copy; revo.js 2019. All rights reserved.</p>
  </>
);
