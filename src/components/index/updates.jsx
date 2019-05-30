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
            <strong className="update-title mono">Early Bird tickets SOLD OUT</strong>
            <p className="update-content light-faded">
              The 50 Early Birds flew away. Regular tickets are now On Sale.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
