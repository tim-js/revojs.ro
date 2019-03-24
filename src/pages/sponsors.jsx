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
              revo.js was made possible thanks to many companies, service
              providers, communities and individuals.
            </p>
          </Note>
        </Content>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Sponsors</h1>
          <p>They gave us money to pay for stuff:</p>

          <Logos list={sponsors} />
        </section>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Partners</h1>
          <p>They have us stuff, so we don't have to pay for it:</p>

          <Logos list={[]} />
        </section>

        <section style={{ textAlign: "center" }}>
          <h1 className="sponsors-heading">Communities</h1>
          <p>
            They helped us spread the word, offered us support when needed,
            advised us:
          </p>

          <Logos list={[]} />
        </section>
      </Section>
    </Layout>
  );
};
