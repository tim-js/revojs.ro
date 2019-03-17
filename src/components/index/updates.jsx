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
            <strong className="mono">Call For Papers</strong>
            <p className="light-faded">
              Some quick CTA text for papers, bla bla bla lorem ipsum now etc.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="mono">Tickets</strong>
            <p className="light-faded">
              Some quick CTA text for papers, bla bla bla lorem ipsum now etc.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/our-mission/">
            <strong className="mono">
              Change is the only <span className="highlight">const</span>
            </strong>
            <p className="light-faded">
              Find out why, our mission, bla bla bla lorem ipsum now etc.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
