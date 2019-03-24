import React from "react";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

export default () => {
  return (
    <Layout>
      <Header centered type="secondary">
        <h1>Press Info</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              This page will contain information press: logo variations,
              descriptions, etc.
            </p>
            <br />
            <br />
            <br />
            <br />
          </Note>
        </Content>
      </Section>
    </Layout>
  );
};
