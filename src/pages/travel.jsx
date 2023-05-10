import React from "react";
// import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

const Travel = () => {
  return (
    <Layout title="revo.js Travel info">
      <Header centered type="secondary">
        <h1>Travel Info</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              This page is dedicated to all participants that travel to
              Timisoara.
            </p>
            <p>
              We will prepare this dedicated page to help you in getting to know
              our city
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

export default Travel;
