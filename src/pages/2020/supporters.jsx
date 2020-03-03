import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Text from "@components/Text";
import Title2020 from "@components/Title2020";

import Logos from "@components/Logos";

import { sponsors, friends, communities } from "@data/2020/supporters";

import "./supporters.scss";

export default () => {
  return (
    <Layout title="revo.js Sponsors">
      <Header centered type="main">
        <Title2020>supporters</Title2020>
        <p className="subtitle2020">
          Change comes one step at a time, <br />
          and a conference is built one supporter at a time.
        </p>
        <p className="subtitle2020">
          <Text bold color="white">
            This is a shoutout to everybody who helped make revo.js 2020 a
            reality.
          </Text>
        </p>
      </Header>

      <Section light centered>
        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Sponsors</h1>
          <p>
            We are very grateful and proud of our awesome sponsors. <br />
            We couldn’t have done it without them.{" "}
            <strong>For real-real</strong>.
          </p>

          <Logos list={sponsors} />
        </section>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Communities</h1>
          <p>
            High five, up high to all the amazing JavaScript communities that
            have our back. <br />
            They are the primary personas of this event.
          </p>

          <Logos list={communities} small />
        </section>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Our Friends</h1>
          <p>
            A big thank you to all our friends. <br />
            They brought the "spice and everything nice".
          </p>

          <Logos list={friends} small />
        </section>
      </Section>
    </Layout>
  );
};
