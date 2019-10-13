import React from "react";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";

import revojs from "@assets/revo.js.svg";
import "./past-editions.scss";

export default () => {
  return (
    <Layout title="revo.js Past Editions">
      <Header centered type="secondary">
        <h1>Past Editions</h1>
      </Header>

      <Section light>
        <Content centered>
          <Link to="/2019/" className="past-edition">
            <img src={revojs} alt="revo.js" /> 2019
          </Link>
        </Content>
      </Section>
    </Layout>
  );
};
