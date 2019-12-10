import React, { useEffect } from "react";

import { replace, Link } from "gatsby";
import queryString from "query-string";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
// import IndexUpdates from "@components/index/IndexUpdates";
// import IndexSpeakers from "@components/index/IndexSpeakers";
// import IndexSponsors from "@components/index/IndexSponsors";
import Separator from "@components/Separator";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";
import Subscribe from "@components/Subscribe";
import { getEdition } from "@utils";

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

      {/* <IndexUpdates /> */}
      <Separator />
      {/* <IndexSpeakers /> */}
      {/* <IndexSponsors /> */}

      <Section className="index-after-movie">
        <h2 className="index-after-movie-heading">
          revo.js 2019 <br />
          has been awesome
        </h2>

        <OutboundLink
          href="https://www.youtube.com/watch?v=KY9ZVsGnTes&amp;list=PL701JjUqw62nHoRho4RJ3KJSLCRG08r1Z&amp;index=19&amp;t=0s"
          target="_blank"
          rel="noopener noreferrer"
          className="card-photos-link"
        >
          <section className={`card`}>
            <figure className="card-img">
              <div className="card-img-inner">
                <span className="card-photo-bg">
                  <span className="card-photo-bg-content" />
                </span>
              </div>
            </figure>
            <div className="card-info">
              <div className="card-info-inner">
                <h2 className="card-heading-after-movie">
                  Watch Our
                  <br />
                  2019 After Movie
                </h2>
              </div>
            </div>
          </section>
        </OutboundLink>

        <br />
        <br />

        <Link to={`/${getEdition()}/media`}>
          <Button>View 2019 Media Page</Button>
        </Link>
      </Section>

      <Section id="subscribe-form" centered>
        {/* <h2>Stay up to date!</h2> */}
        <p>Subscribe to stay on top the latest changes and revo.news:</p>
        <br />
        <Subscribe centered />
      </Section>
    </Layout>
  );
};
