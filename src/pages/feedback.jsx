import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Button from "@components/Button";

const Feedback = () => {
  return (
    <Layout title="revo.js Feedback">
      <Header centered type="secondary">
        <h1>Feedback</h1>
      </Header>

      <Section light>
        <Content centered style={{ textAlign: "center" }}>
          <h2>Please tell us about your experience at revo.js</h2>
          <br />
          <br />
          <a
            href="https://revojs.typeform.com/to/BF1i3Dd6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button white>Leave us your Feedback</Button>
          </a>
        </Content>
      </Section>
    </Layout>
  );
};

export default Feedback;
