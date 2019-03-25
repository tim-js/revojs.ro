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
              Some quick CTA text for papers, bla bla bla lorem ipsum now etc.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="update-title mono">Tickets</strong>
            <p className="update-content light-faded">
              Some quick CTA text for papers, bla bla bla lorem ipsum now etc.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
