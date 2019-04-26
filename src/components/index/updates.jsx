import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";

import "./updates.scss";

export default () => {
  return (
    <Section centered>
      <h2>Updates</h2>

      <ul className="updates-list">
        <li>
          <Link to="/cfp/">
            <strong className="update-title mono">Call For Papers is Open</strong>
            <p className="update-content light-faded">
              CFP is now open. Ready, steady, apply for change until the 17th of
              June.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="update-title mono">Early Bird tickets available</strong>
            <p className="update-content light-faded">
              Be fast to grab yours until
              the 31st of May or until the 50 available Early Birds fly
              away.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
