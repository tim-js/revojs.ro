import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

import Logos from "@components/Logos";

import { sponsors, partners, communities } from "@data/2020/supporters";

import "./supporters.scss";

console.log(sponsors, partners, communities);
export default () => {
  return (
    <Layout title="revo.js Sponsors">
      <Header centered type="secondary">
        <h1>Supporters</h1>
      </Header>

      <Section light centered>
        <Content centered>
          <Note>
            <p>
              Change comes one step at a time, <br />
              and a conference is built one supporter at a time.
            </p>
            <p>
              This is a shoutout to everybody who helped make revo.js a reality.
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
            We couldn’t have done it without them.{" "}
            <strong>For real-real</strong>.
          </p>

          <Logos
            list={sponsors}
            style={{
              maxWidth: "200px",
            }}
          />
        </section>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Partners</h1>
          <p>
            A big thank you to all our partners. <br />
            They brought the "spice and everything nice".
          </p>

          <Logos
            list={partners}
            style={{
              maxWidth: "100px",
            }}
            small
          />
        </section>

        {/* <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Media Partners</h1>
          <p>
            They share because they care. <br />
            We’re grateful to all our media partners who spread the word and aid
            us in our journey of change.
          </p>

          <Logos
            list={media}
            style={{
              maxWidth: "400px",
            }}
            small
          />
        </section> */}

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Communities</h1>
          <p>
            High five, up high to all the amazing JavaScript communities and
            Tech Hubs that have our back. <br />
            They are the primary personas of this event.
          </p>

          <Logos
            list={communities}
            style={{
              maxWidth: "100px",
            }}
            small
          />
        </section>
      </Section>
    </Layout>
  );
};
