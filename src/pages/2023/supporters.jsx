import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
// import Text from "@components/Text";
import Title2020 from "@components/Title2020";

import Logos from "@components/Logos";
import LogosWrapped from "@components/LogosWrapped";

import { sponsors, friends, communities } from "@data/2023/supporters";

import "./supporters.scss";

export default () => {
  return (
    <Layout title="revo.js Sponsors">
      <Header centered type="main">
        <h1 className="title2023 supporters-image">Supporters</h1>

        <p className="subtitle2023">
          Change comes one step at a time, <br />
          and a conference is built one supporter at a time.
        </p>

        {/* <p className="subtitle2023">
          <Text bold color="white">
            This is a shoutout to everybody who helped make revo.js 2020 a
            reality.
          </Text>
        </p> */}
      </Header>

      <Section light centered>
        <section style={{ textAlign: "center" }}>
          <h2 className="big revo-font">Sponsors</h2>
          <p>
            We are very grateful and proud of our awesome sponsors. <br />
            We couldn’t do it without them. <strong>For real.</strong>
          </p>

          <LogosWrapped list={sponsors.premium} size="large" />

          <br />
          <br />
          <br />

          <LogosWrapped list={sponsors.standard} size="normal" />

          <br />
          <br />

          <LogosWrapped list={sponsors.starter} size="small" />
        </section>

        <section style={{ textAlign: "center" }}>
          <h2 className="big">Communities</h2>
          <p>
            High five to all the amazing communities that
            have our back. <br />
            They are the primary personas of this event.
          </p>

          <Logos list={communities} small />
        </section>

        <section style={{ textAlign: "center" }}>
          <h2 className="big">Our Friends</h2>
          <p>
            A huge <em>thank you</em> to all our friends. <br />
            They brought the <em>"spice and everything nice"</em>.
          </p>

          <Logos list={friends} small />
        </section>
        <br />
        <br />
        <br />
        <br />
      </Section>
    </Layout>
  );
};
