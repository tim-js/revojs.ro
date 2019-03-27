import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";
import Button from "@components/Button";

export default () => {
  return (
    <Layout>
      <Header centered type="secondary">
        <h1>Venue</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p style={{ textAlign: "center" }}>
              revo.js will take place in the Multifunctional Hall of our County
              Council. <br />
              <strong>Address</strong>: Bulevardul Revoluției din 1989, nr. 17
            </p>
            <br />
            <p style={{ textAlign: "center" }}>
              More information will be available soon.
            </p>
            <br />
          </Note>

          <p style={{ textAlign: "center" }}>
            <OutboundLink
              href="http://maps.google.com/maps?q=45.7562%2C21.2371+%28Consiliul+Judetean+Timis%2C+Bulevardul+Revolu%C8%9Biei+din+1989+nr.+17%2C+Timi%C8%99oara+300034%29"
              target="_blank"
            >
              <Button white>View location on map</Button>
            </OutboundLink>
          </p>
        </Content>
      </Section>
    </Layout>
  );
};
