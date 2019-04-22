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
            <strong className="update-title mono">Call For Papers</strong>
            <p className="update-content light-faded">
              CFP is now open. Ready, steady, apply for change until the 17th of
              June.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="update-title mono">Tickets</strong>
            <p className="update-content light-faded">
              Early Bird tickets are on sale. Get yours until 31st of May.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
