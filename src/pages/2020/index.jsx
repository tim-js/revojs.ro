import React, { useEffect } from "react";

import { replace, Link } from "gatsby";
import queryString from "query-string";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
// import IndexUpdates from "@components/index/IndexUpdates";
import IndexSpeakers from "@components/index/IndexSpeakers";
import IndexSponsors from "@components/index/IndexSponsors";
import Separator2020 from "@components/Separator2020";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";
import Subscribe from "@components/Subscribe";
// import DateLink from "@components/DateLink";
// import { getEdition } from "@utils";
import { sponsors } from "@data/2020/supporters";

import logo from "@assets/logo-revojs.svg";
import "./index.scss";

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
    <Layout location={props.location} className="index-graphics">
      <Header className="header-index">
        <h1 className="index-logo">
          <img src={logo} alt="revo.js" height="70" />
        </h1>

        <div className="index-tagline">
          <div>
            <span className="flip flip1">r</span>
          </div>
          <div>
            <span className="flip flip2">e</span>
          </div>
          <div>
            <span className="flip flip3">v</span>
          </div>
          <div>
            <span className="flip flip4">o</span>
          </div>
          <div>
            <span className="flip flip5">l</span>
          </div>
          <div>
            <span className="flip flip6">v</span>
          </div>
          <div>
            <span className="flip flip7">e</span>
          </div>
        </div>

        <div className="date-location">
          {/* <time className="index-date mono" dateTime="2020-10-08">
            <DateLink
              title="revo.js 2020"
              details="revolve."
              location="Timisoara/RO"
              startDate={new Date("2020-10-08 08:00")}
              endDate={new Date("2020-10-09 17:00")}
              isFullDay={true}
            >
              <strong>October.8-9.2020</strong>
            </DateLink>
          </time> */}
          <strong className="mono highlight">2020 edition is cancelled.</strong>
          <br />
          <strong className="mono">We’ll revolve in 2021!</strong>
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
          <Link to={`/covid19`}>
            <Button>Learn more</Button>
          </Link>
        </div>
        <div className="home-graphics"></div>
      </Header>

      {/* <IndexUpdates /> */}
      <Separator2020 />
      <IndexSpeakers />

      <Section id="subscribe-form" centered>
        <br />
        <h2 className="big">Stay up to date!</h2>
        <p className="light-faded">
          News, updates and latest happenings? Stay in the revo.loop
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
