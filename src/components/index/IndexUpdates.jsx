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
          <Link to="/2023/speakers/" className="updates-link">
            <strong className="update-title mono">Speakers</strong>
            <p className="update-content light-faded">
              Our lineup is complete. Meet our 2023 speakers.
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
              <strong>Regular tickets</strong> are now on sale! Get yours and
              see you in October.
            </p>
            <div className="arrow">
              <Arrow color="primary" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/2023/workshop/" className="updates-link">
            <strong className="update-title mono">Workshop</strong>
            <p className="update-content light-faded">
              More details coming soon. Stay tuned for your chance to join.
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
