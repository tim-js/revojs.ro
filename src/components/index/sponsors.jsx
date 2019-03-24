import React from "react";

import Section from "@components/Section";

import "./sponsors.scss";

export default () => {
  return (
    <Section light centered className="index-sponsors">
      <h1>Sponsors</h1>
      <p>
        We are very proud of our sponsors, couldn't have made it without them.
      </p>

      <ul className="sponsors-list">
        <li>
          <strong className="sponsor">Dream Production</strong>
        </li>
        <li>
          <strong className="sponsor">Busy Machines</strong>
        </li>
        <li>
          <strong className="sponsor">Visma</strong>
        </li>
      </ul>
    </Section>
  );
};
