import React from "react";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
// import Button from "@components/Button";

// import "./venue.scss";

export default () => {
  return (
    <Layout title="revo.js Media">
      <Header centered type="secondary">
        <h1>Media</h1>
      </Header>

      <Section light>
        <Content centered>
          <section>
            <p>Photos and videos are coming soon. Stay tuned...</p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
