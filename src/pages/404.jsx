import React from "react";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Button from "@components/Button";

export default () => {
  return (
    <Layout>
      <Header centered>
        <Content>
          <h1>404 not found</h1>
          <span className="light-faded">
            Are your sure this page was here before?
          </span>
          <br />
          <br />
          <Link to="/">
            <Button>Got to Homepage</Button>
          </Link>
        </Content>
      </Header>
    </Layout>
  );
};
