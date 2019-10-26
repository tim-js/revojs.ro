import React, { useEffect } from "react";

import { replace, Link } from "gatsby";
import queryString from "query-string";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import IndexUpdates from "@components/index/IndexUpdates";
import IndexSpeakers from "@components/index/IndexSpeakers";
// import IndexSponsors from "@components/index/IndexSponsors";
import Separator from "@components/Separator";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";
import { getEdition } from "@utils";

import logo from "@assets/logo-revojs.svg";
import "./index.scss";

export default props => {
  useEffect(() => {
    const search = queryString.parse(props.location.search);
    if (search.fbclid) {
      const clearedSearch = queryString.stringify({
        ...search,
        fbclid: undefined,
      });
      if (clearedSearch.length) {
        replace(props.location.pathname + "?" + clearedSearch);
      } else {
        replace(props.location.pathname);
      }
    }
  });

  return (
    <Layout
      location={props.location}
      className="index-graphics"
      noFooterSeparation
    >
      <Header className="header-index">
        <div className="index-logo">
          <img src={logo} alt="revo.js" height="70" />
        </div>

        <div className="index-header-content">
          <h1 className="index-tagline">
            Change is <span className="tagline-block">the only const.</span>
          </h1>
          <div className="date-location">
            <time className="index-date mono" dateTime="2019-10-03">
              <strong>October.3-4.2019</strong>
            </time>
            <strong className="index-location mono">Timisoara/RO</strong>
          </div>
        </div>

        <div className="index-cta">
          {/* <a href="#speakers">
            <Button>Meet the Speakers</Button>
          </a> */}
          {/* <PurchaseTicket /> */}
          <Link to={`/${getEdition()}/agenda`}>
            <Button>View the Agenda</Button>
          </Link>
        </div>

        {/* <div className="description mono">
          <strong>Technology focused.</strong>
          <strong>Community driven.</strong>
          <strong className="highlight">JavaScript conference.</strong>
        </div> */}
      </Header>

      {/* <IndexUpdates /> */}
      <Separator />
      <IndexSpeakers />
      {/* <IndexSponsors /> */}
    </Layout>
  );
};
