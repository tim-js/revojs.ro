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
            <strong className="update-title mono">Call For Papers has Closed</strong>
            <p className="update-content light-faded">
              CFP was open between 17 Apr - 17 Jun. We will annouce the selected speakers around Mid July.
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
