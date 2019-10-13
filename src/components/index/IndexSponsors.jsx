import React from "react";

import Section from "@components/Section";
import Logos from "@components/Logos";

import { sponsors } from "@data/2020/supporters";

import "./indexSponsors.scss";

export default () => {
  return (
    <Section light centered className="index-sponsors">
      <h1>Sponsors</h1>
      <p>
        revo.js would have remained just a great idea without the help of these
        awesome sponsors. <br />
        We don’t just say this. It’s a fact.
      </p>

      <Logos list={sponsors} />
    </Section>
  );
};
