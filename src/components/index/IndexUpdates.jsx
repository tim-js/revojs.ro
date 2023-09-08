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
          <Link to="/2023/tickets/" className="updates-link">
            <strong className="update-title mono">Tickets</strong>
            <p className="update-content light-faded">
              We are <strong>SOLD OUT</strong>!
            </p>
            <div className="arrow">
              <Arrow color="primary" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/2023/agenda/" className="updates-link">
            <strong className="update-title mono">Agenda</strong>
            <p className="update-content light-faded">
              The conference agenda is up.
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
              Our lineup is complete.
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
