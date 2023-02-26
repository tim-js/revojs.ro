import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";
import Arrow from "@components/Arrow";

import "./indexUpdates.scss";

export default () => {
  return (
    <Section centered>
      <h2 className="big first revo-font">Latest Updates</h2>

      <br />

      <ul className="updates-list">
        <li>
          <Link to="/2023/speakers/" className="updates-link">
            <strong className="update-title mono">Speakers</strong>
            <p className="update-content light-faded">
              Our line-up is revolving! Meet the first invited speakers.
            </p>
            <div className="arrow">
              <Arrow color="primary" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/2023/cfp/" className="updates-link">
            <strong className="update-title mono">Call for Papers</strong>
            <p className="update-content light-faded">
              CFP will open in spring. Learn more about this year’s theme.
            </p>
            <div className="arrow">
              <Arrow color="primary" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/2023/tickets/" className="updates-link">
            <strong className="update-title mono">Tickets</strong>
            <p className="update-content light-faded">
              Tickets go on sale late-spring. See what to expect.
            </p>
            <div className="arrow">
              <Arrow color="primary" />
            </div>
          </Link>
        </li>
        {/* 
        <li>
          <strong className="update-title mono">Social revo.updates</strong>
          <p className="update-content light-faded">
            Follow the latest updates and happenings at revo.js on our{" "}
            <a
              href="https://twitter.com/revojsro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/revojsro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            and{" "}
            <a
              href="https://www.instagram.com/revo.js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            accounts.
          </p>
        </li>
        */}
      </ul>
    </Section>
  );
};
