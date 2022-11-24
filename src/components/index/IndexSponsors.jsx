import React from "react";

import Section from "@components/Section";
import Logos from "@components/Logos";

import "./indexSponsors.scss";

export default ({ sponsors }) => {
  return (
    <Section light centered className="index-sponsors">
      <h2 className="big">Sponsors</h2>
      <p>
        revo.js 2023 would still be at an idea-stage without these awesome sponsors. <br />
        We don’t just say this. Their support is crucial to making things happen.
      </p>

      <Logos list={sponsors} />
    </Section>
  );
};
