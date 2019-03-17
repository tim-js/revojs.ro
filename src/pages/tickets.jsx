import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
// import Button from "@components/Button";

// import "./cfp.scss";

export default () => {
  return (
    <Layout>
      <Header centered>
        <Content>
          <h1>Tickets</h1>
          <strong className="highlight mono">Coming soon</strong>
        </Content>
      </Header>

      <Section light content>
        <p>
          Follow us on social media to be notified when tickets become
          available.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Section>
    </Layout>
  );
};
