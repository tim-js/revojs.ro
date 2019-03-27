import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import IndexUpdates from "@components/index/updates";
import IndexSpeakers from "@components/index/speakers";
import IndexSponsors from "@components/index/sponsors";
import Separator from "@components/Separator";
import Button from "@components/Button";

import logo from "@assets/logo-revojs.svg";
import "./index.scss";

export default props => {
  return (
    <Layout location={props.location} className="index-graphics">
      <Header className="header-index">
        <div className="index-logo">
          <img src={logo} alt="revo.js" height="70" />
        </div>

        <div className="index-header-content">
          <h1>
            Change is the <span className="tagline-block">only const.</span>
          </h1>
          <div className="date-location">
            <time className="index-date mono" dateTime="2019-10-03">
              <strong>October.3-4.2019</strong>
            </time>
            <strong className="index-location mono">Timisoara_RO</strong>
          </div>
        </div>

        <div className="index-cta">
          <a href="#speakers"><Button>Meet the Speakers</Button></a>
        </div>

        {/* <div className="description mono">
          <strong>Technology focused.</strong>
          <strong>Community driven.</strong>
          <strong className="highlight">JavaScript conference.</strong>
        </div> */}
      </Header>

      <IndexUpdates />
      <Separator />
      <IndexSpeakers />
      <IndexSponsors />
    </Layout>
  );
};
