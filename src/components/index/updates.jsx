import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";

import "./updates.scss";

export default () => {
  return (
    <Section centered>
      <h2>Latest Updates</h2>

      <ul className="updates-list">
        <li>
          <Link to="/cfp/">
            <strong className="update-title mono">
              Call For Papers is Open
            </strong>
            <p className="update-content light-faded">???</p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="update-title mono">
              Early Bird will start soon
            </strong>
            <p className="update-content light-faded">???</p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
