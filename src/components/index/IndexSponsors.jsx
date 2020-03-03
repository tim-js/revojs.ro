import React from "react";

import Section from "@components/Section";
import Logos from "@components/Logos";

import "./indexSponsors.scss";

export default ({ sponsors }) => {
  return (
    <Section light centered className="index-sponsors">
      <h2 className="index-title">Sponsors</h2>
      <p>
        revo.js would have remained just a great idea without the help of these
        awesome sponsors. <br />
        We don’t just say this. It’s a fact.
      </p>

      <Logos list={sponsors} />
    </Section>
  );
};
