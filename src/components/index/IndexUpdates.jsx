import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";

import "./indexUpdates.scss";

export default () => {
  return (
    <Section centered>
      <h2>Updates</h2>

      <ul className="updates-list">
        <li>
          <Link to="/2020/tickets/" className="updates-link">
            <strong className="update-title mono">Tickets</strong>
            <p className="update-content light-faded">
              Discover what type of ticket suits you best and grab it! Early
              Bird starts at end of March.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/2020/cfp/" className="updates-link">
            <strong className="update-title mono">Call for Papers</strong>
            <p className="update-content light-faded">
              CFP opens on April 1st. No foolin' around, we promise. We'd love
              to see your proposal.
            </p>
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
