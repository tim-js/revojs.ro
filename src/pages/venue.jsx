import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";
import Button from "@components/Button";

import "./venue.scss";

export default () => {
  return (
    <Layout title="revo.js Venue">
      <Header type="main" image="venue-image">
        <h1>Venue</h1>
        <br />
        <strong className="venue-important light-faded mono">
          <span className="highlight">Multifunctional Hall of CJT</span> <br />
          (Timis County Council)
        </strong>
        <br />
        <br />
        <br />
        <a href={`#venue-details`}>
          <Button>More details</Button>
        </a>
      </Header>

      <Section light>
        <Content centered>
          <section id="venue-details">
            <h2>Location</h2>
            <p>
              <strong>Venue address</strong>: Bulevardul Revoluției din 1989,
              nr. 17
            </p>
            <p>
              <OutboundLink
                href="http://maps.google.com/maps?q=45.7562%2C21.2371+%28Consiliul+Judetean+Timis%2C+Bulevardul+Revolu%C8%9Biei+din+1989+nr.+17%2C+Timi%C8%99oara+300034%29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button white>View location on map</Button>
              </OutboundLink>
            </p>
          </section>

          <section>
            <h2>Getting there</h2>

            <section>
              <h3>By foot</h3>
              <p>
                If you have accomodation in the central area, the best way to
                get to the venue is by foot, because the location should be
                within walking distance.
              </p>
            </section>

            <section>
              <h3>By car</h3>
              <p>
                <strong>
                  We do NOT recommend coming with the car at the conference.
                </strong>
              </p>

              <p>
                The location is ultra-central and parking there is a nightmare.
                Thank you for understanding.
              </p>
            </section>

            <section>
              <h3>From the airport</h3>
              <p>
                You can take{" "}
                <OutboundLink
                  href="https://moovitapp.com/index/en/public_transit-line-E4-Timi%C5%9Foara-3603-857264-687250-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bus E4 (Express 4)
                </OutboundLink>{" "}
                from the airport that will drop you at{" "}
                <OutboundLink
                  href="https://goo.gl/maps/qjnWeH7iJqnrnL436"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bastion bus stop
                </OutboundLink>
                . Trip takes about 25 minutes. The venue is{" "}
                <OutboundLink
                  href="https://goo.gl/maps/QdXzv3fhZzZvfYyH9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7 minutes away
                </OutboundLink>
                .
              </p>
              <p>
                Bus tickets can be purchased from the{" "}
                <strong>Domestic Flights Terminal</strong> and they cost 2.5 RON
                (0.5 EUR) / trip.
              </p>
              <hr />
              <p>You can also take a Taxi. It costs around 45 RON (10 EUR).</p>
              <p>
                <strong>IMPORTANT</strong>: use the cars that have a company
                name displayed: Tudo, Radio, Pro, Autogenn, Index, Fan, etc.
              </p>
              <hr />
              <p>Uber and Bolt are also available in Timisoara.</p>
            </section>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
