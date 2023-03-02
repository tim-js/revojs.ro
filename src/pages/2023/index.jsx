import React, { useEffect } from "react";

import { replace, Link } from "gatsby";
import queryString from "query-string";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import IndexUpdates from "@components/index/IndexUpdates";
import IndexSpeakers from "@components/index/IndexSpeakers";
import IndexSponsors from "@components/index/IndexSponsors";
import Separator2023 from "@components/Separator2023";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";
import Subscribe from "@components/Subscribe";
// import DateLink from "@components/DateLink";
// import { getEdition } from "@utils";
import { sponsors } from "@data/2023/supporters";

import logo from "@assets/logo-revojs.svg";
import * as styles from "./index.module.scss";

export default (props) => {
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
    <Layout location={props.location}>
      <Header type="main">
        <div className={styles.index_header}>
          <div className={styles.date_location}>
            <h1 className={`revo-font ${styles.title}`}>
              <span className="highlight">re</span>think <br />
              <span className="highlight">re</span>visit <br />
              <span className="highlight">re</span>volve <br />
            </h1>

            <strong className={`mono ${styles.location}`}>
              5-6 October 2023 <br />
              Timișoara/RO
            </strong>
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
          {/* <a href="#subscribe-form">
            <Button>Subscribe for Updates</Button>
          </a> */}
          {/* <Link to={`/blog/revojs-stays-offline`}>
            <Button>Learn Why</Button>
          </Link> */}
        </div>
      </Header>

      <IndexUpdates />
      <Separator2023 />
      <IndexSpeakers />

      <Section id="subscribe-form" centered>
        <br />
        <h2 className="big revo-font">Stay in the revo.loop</h2>
        <p className="light-faded">
          Subscribe to get info about tickets, our call for papers, speakers and
          more.
        </p>
        <br />
        <br />
        <br />
        <Subscribe centered />
      </Section>

      <IndexSponsors sponsors={sponsors} />
    </Layout>
  );
};
