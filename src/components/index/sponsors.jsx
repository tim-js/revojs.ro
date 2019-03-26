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
        Bulshit free! This event would not be possible without these awesome
        sponsors.
      </p>

      <Logos list={sponsors} />
    </Section>
  );
};
