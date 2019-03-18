import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import IndexUpdates from "@components/index/updates";
import IndexSpeakers from "@components/index/speakers";
import IndexSponsors from "@components/index/sponsors";
import Separator from "@components/Separator";

import "./index.scss";

export default () => {
  return (
    <Layout>
      <Header className="header-index">
        <h1>
          A two-day JavaScript <strong className="highlight">conference</strong>
        </h1>
        <time className="mono" dateTime="2019-10-03">
          Oct.3-4.2019
        </time>
        <span className="location">Timisoara, RO</span>
      </Header>

      <IndexUpdates />
      <Separator />
      <IndexSpeakers />
      <IndexSponsors />
    </Layout>
  );
};
