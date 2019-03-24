import React from "react";

import Section from "@components/Section";
import Logos from "@components/Logos";

import { sponsors } from "@data/sponsors";

import "./sponsors.scss";

export default () => {
  return (
    <Section light centered className="index-sponsors">
      <h1>Sponsors</h1>
      <p>
        We are very proud of our sponsors, couldn't have made it without them.
      </p>

      <Logos list={sponsors} />
    </Section>
  );
};
