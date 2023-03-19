import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Button from "@components/Button";

import "./venue.scss";

import map from "@assets/venue_location@2x.png";

const Venue = () => {
  return (
    <Layout title="revo.js Venue">
      <Header type="main" image="venue-image">
        <h1>Venue</h1>
        <br />
        <strong className="venue-important light-faded mono">
          <span className="highlight">Iulius Congress Hall</span> <br />
          <span>at Iulius Town Timișoara</span> <br />
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
              <strong>Iulius Congress Hall</strong> is situated Timisoara’s
              modern side, inside <strong>Iulius Town</strong>.
            </p>
            <p>
              <strong>Venue address</strong>: Str. Aristide Demetriade, nr. 1,
              et. 1, 300088 Timişoara
            </p>
            <p>
              <OutboundLink
                href="https://goo.gl/maps/oSxL1p7w3Gn6cBMN6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button white>View location on map</Button>
              </OutboundLink>
            </p>
            <br />
            <br />
            <br />
            <br />
            <img
              src={map}
              alt="Iulius Congress Hall location map"
              width="100%"
            />
          </section>

          <section>
            <h2>Getting there</h2>

            <section>
              <h3>By foot</h3>
              <p>
                If you have accomodation in the central area, the best way to
                get to the venue is by foot, as the location is within walking
                distance.
              </p>
            </section>

            <section>
              <h3>By car</h3>
              <p>
                Since the venue is hosted by Iulius Town, there are plenty of
                parking spots in the mall’s parking area.
              </p>
            </section>

            <section>
              <h3>From the airport</h3>
              <p>
                Take the{" "}
                <OutboundLink
                  href="https://moovitapp.com/index/en/public_transit-line-E4-Timi%C5%9Foara-3603-857264-687250-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E4 bus (Express 4)
                </OutboundLink>{" "}
                and get down at{" "}
                <OutboundLink
                  href="https://goo.gl/maps/qjnWeH7iJqnrnL436"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bastion Station
                </OutboundLink>{" "}
                (the bus trip takes around 25 minutes). From here you can reach
                the location by foot, in{" "}
                <OutboundLink
                  href="https://www.google.com/maps/dir/Bastion,+Timi%C8%99oara/Iulius+Town,+Pia%C8%9Ba+Consiliul+Europei,+Timi%C8%99oara/@45.7641197,21.2293231,16.06z/data=!4m14!4m13!1m5!1m1!1s0x4745677f180cafef:0x7ef840611d3e2982!2m2!1d21.23316!2d45.75772!1m5!1m1!1s0x474567c28251367f:0xdad4d0d2dc253876!2m2!1d21.2288707!2d45.7662712!3e2?utm_medium=s2email&shorturl=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  just 15 minutes
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

export default Venue;
