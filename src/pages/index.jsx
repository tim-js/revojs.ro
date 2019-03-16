import React from "react";

import Layout from "@components/Layout";
import IndexSpeakers from "@components/index/speakers";
import IndexSponsors from "@components/index/sponsors";

import "./index.scss";

export default () => {
  return (
    <Layout>
      <header className="splash">
        <h2>
          A two-day JavaScript <strong className="highlight">conference</strong>
        </h2>
        <time className="heading" dateTime="2019-10-03">
          Oct.3-4.2019
        </time>
        <span className="location">Timisoara, RO</span>
      </header>

      <main role="main">
        <IndexSpeakers />
        <IndexSponsors />
      </main>
    </Layout>
  );
};
