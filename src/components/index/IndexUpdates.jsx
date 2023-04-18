import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";
import Arrow from "@components/Arrow";

import "./indexUpdates.scss";

const IndexUpdates = () => {
  return (
    <Section centered>
      <h2 className="big first revo-font">Latest Updates</h2>

      <br />

      <ul className="updates-list">
        <li>
          <Link to="/2023/cfp/" className="updates-link">
            <strong className="update-title mono">CFP is now open</strong>
            <p className="update-content light-faded">
              Submit your proposals for revo.js 2023 until June 4th.
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
              <strong>Early Bird tickets</strong> are now on sale! Hurry up, only 50 tickets available!
            </p>
            <div className="arrow">
              <Arrow color="primary" />
            </div>
          </Link>
        </li>

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
      </ul>
    </Section>
  );
};

export default IndexUpdates;
