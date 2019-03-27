import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";

import "./updates.scss";

export default () => {
  return (
    <Section centered>
      <h2>Coming Soon</h2>

      <ul className="updates-list">
        <li>
          <Link to="/cfp/">
            <strong className="update-title mono">Call For Papers</strong>
            <p className="update-content light-faded">
              Learn everything about the application process and get ready to
              submit your proposal starting with the 17th of April.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="update-title mono">Tickets</strong>
            <p className="update-content light-faded">
              Discover what types of tickets you can purchase and stay tuned!
              Early Bird starts in April.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
