import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

import Logos from "@components/Logos";

import { sponsors } from "@data/sponsors";

import "./sponsors.scss";

export default () => {
  return (
    <Layout>
      <Header centered type="secondary">
        <h1>Sponsors &amp; Partners</h1>
      </Header>

      <Section light centered>
        <Content centered>
          <Note>
            <p>
              Change comes one step at a time, <br />
              and a conference is built one supporter at a time.
            </p>
            <p>
              This is a shoutout to all our sustainers who helped make revo.js a
              reality.
            </p>
            <p>
              Hopefully, it will become a{" "}
              <strong className="mono">const</strong>.{" "}
            </p>
          </Note>
        </Content>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Sponsors</h1>
          <p>
            We are very grateful and proud of our awesome sponsors. <br />
            We couldn’t have done without them. <strong>For real-real</strong>.
          </p>

          <Logos list={sponsors} />
        </section>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Partners</h1>
          <p>
            A big thank you to all our partners. <br />
            They brought the "spice and everything nice".
          </p>

          <Logos list={[]} />
        </section>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Communities</h1>
          <p>
            High five, up high to all the amazing JavaScript communities that
            have our back.
          </p>

          <Logos list={[]} />
        </section>
      </Section>
    </Layout>
  );
};
