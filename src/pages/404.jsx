import React from "react";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Button from "@components/Button";
import Section from "@components/Section";

const NotFoundPage = () => {
  return (
    <Layout>
      <Header centered type="secondary">
        <h1>404 not found</h1>
      </Header>
      <Section light>
        <Content centered>
          <div style={{ textAlign: "center" }}>
            <p>
              No idea if this page was here before, but apparently it doesn't
              exist anymore.
            </p>
            <Link to="/">
              <Button white>Go to Homepage</Button>
            </Link>
            <br />
            <br />
            <br />
          </div>
        </Content>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
