import React from "react";

import Section from "@components/Section";
import LogosWrapped from "@components/LogosWrapped";

import "./indexSponsors.scss";

const Sponsors = ({ sponsors }) => {
  return (
    <Section light centered className="index-sponsors">
      <h2 className="big revo-font">Sponsors</h2>
      <p>
        revo.js 2023 would still be at an idea-stage without these awesome
        sponsors. <br />
        We don’t just say this. Their support is crucial to making things
        happen.
      </p>

      <br />
      <br />

      <LogosWrapped list={sponsors.premium} size="large" />

      <br />
      <br />
      <br />

      <LogosWrapped list={sponsors.standard} size="normal" />

      <br />
      <br />

      <LogosWrapped list={sponsors.starter} size="small" />
    </Section>
  );
};

export default Sponsors;
