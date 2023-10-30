import React, { useEffect } from "react";

import { navigate, Link } from "gatsby";
import queryString from "query-string";
// import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import IndexUpdates from "@components/index/IndexUpdates";
import IndexSpeakers from "@components/index/IndexSpeakers";
import IndexSponsors from "@components/index/IndexSponsors";
import Separator2023 from "@components/Separator2023";
import { RevoSymbol } from "@components/RevoSymbol";
import Button from "@components/Button";
import { PurchaseTicket } from "@components/CTA";
import Subscribe from "@components/Subscribe";
// import DateLink from "@components/DateLink";
import { getEdition } from "@utils";
import { sponsors } from "@data/2023/supporters";

import * as styles from "./index.module.scss";
// import logo from "@assets/logo-revojs.svg";

const Index = (props) => {
  useEffect(() => {
    const search = queryString.parse(props.location.search);
    const hash = props.location.hash;

    if (search.fbclid) {
      const clearedSearch = queryString.stringify({
        ...search,
        fbclid: undefined,
      });
      if (clearedSearch.length) {
        navigate(props.location.pathname + "?" + clearedSearch + hash);
      } else {
        navigate(props.location.pathname + hash);
      }
    }
  });

  return (
    <Layout location={props.location}>
      <Header type="main">
        <div className={styles.index_header}>
          <div>
            <h1 className={`revo-font ${styles.title}`}>
              <span className="highlight">re</span>think <br />
              <span className="highlight">re</span>visit <br />
              <span className="highlight">re</span>volve <br />
            </h1>

            <strong className={`mono ${styles.location}`}>
              5-6 October 2023 <br />
              Timișoara/RO
            </strong>

            <div className={styles.cta}>
              {/* <PurchaseTicket /> */}

              <div className={`mono ${styles.tagline}`}>
                <div className={`${styles.revo_symbol}`}>
                  <RevoSymbol color="grey" />
                </div>
                <div>
                  <strong>Technology focused.</strong>
                  <strong>Community driven.</strong>
                  <strong>JavaScript conference.</strong>
                </div>
              </div>

              <Link to={`/${getEdition()}/media`}>
                <Button>View Media Page</Button>
              </Link>

              {/* <a href="#speakers">
            <Button>Meet the Speakers</Button>
          </a> */}
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
          </div>
        </div>
      </Header>

      <Separator2023 />
      {/* <IndexUpdates /> */}
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

export default Index;
