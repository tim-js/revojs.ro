import React, { useEffect } from "react";

import { replace, Link } from "gatsby";
import queryString from "query-string";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import IndexUpdates from "@components/index/IndexUpdates";
import IndexSpeakers from "@components/index/IndexSpeakers";
import IndexSponsors from "@components/index/IndexSponsors";
import Separator2020 from "@components/Separator2020";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";
import Subscribe from "@components/Subscribe";
// import { getEdition } from "@utils";
import { sponsors } from "@data/2020/supporters";

import logo from "@assets/logo-revojs.svg";
import "./index.scss";

export default props => {
  useEffect(() => {
    const search = queryString.parse(props.location.search);
    if (search.fbclid) {
      const clearedSearch = queryString.stringify({
        ...search,
        fbclid: undefined
      });
      if (clearedSearch.length) {
        replace(props.location.pathname + "?" + clearedSearch);
      } else {
        replace(props.location.pathname);
      }
    }
  });

  return (
    <Layout location={props.location}>
      <Header className="header-index">
        <div className="index-logo">
          <img src={logo} alt="revo.js" height="80" />
        </div>

        <div className="index-header-content">
          <div className="date-location">
            <time className="index-date mono" dateTime="2020-10-08">
              <strong>October.8-9.2020</strong>
            </time>
            <strong className="index-location mono">Timisoara/RO</strong>
          </div>
        </div>

        <div className="index-cta">
          {/* <a href="#speakers">
            <Button>Meet the Speakers</Button>
          </a> */}
          {/* <PurchaseTicket /> */}
          {/* <Link to={`/${getEdition()}/agenda`}>
            <Button>View the Agenda</Button>
          </Link> */}
          <a href="#subscribe-form">
            <Button>Subscribe for News</Button>
          </a>
        </div>
      </Header>

      <IndexUpdates />
      <Separator2020 />
      <IndexSpeakers />

      <Section id="subscribe-form" centered>
        {/* <h2>Stay up to date!</h2> */}
        <p>Subscribe to stay on top the latest changes and revo.news:</p>
        <br />
        <Subscribe centered />
      </Section>

      <IndexSponsors sponsors={sponsors} />
    </Layout>
  );
};
