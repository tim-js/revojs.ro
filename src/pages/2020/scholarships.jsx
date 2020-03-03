import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
// import Note from "@components/Note";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";
import Subscribe from "@components/Subscribe";
import Text from "@components/Text";

import "./tickets.scss";

const START = "March 23rd";
// const END = "April 23rd";

export default () => {
  return (
    <Layout title="revo.js Tickets">
      <Header centered type="secondary">
        <h1>Diversity Scholarships</h1>

        <div className="subtitle2020">
          Diversity Scholarship Applications <br />
          will start on{" "}
          <Text bold color="white">
            {START}
          </Text>
        </div>
        <br />
        <br />

        <OutboundLink href="#subscribe">
          <Button>Subscribe for Updates</Button>
        </OutboundLink>

        {/* <a href="#subscribe">
          <Button>Subscribe for Updates</Button>
        </a> */}
      </Header>

      <Section light>
        <Content centered>
          <section>
            <h2>What are Diversity Scholarship Tickets?</h2>

            <p>
              We created the <strong>revo.js Diversity Scholarships</strong> to
              nurture inclusiveness in our tech community, while generating
              broader connection opportunities. Our goal is to create a{" "}
              <strong>safe and welcoming environment</strong> for ALL tech
              professionals.
            </p>

            <p>
              We’re aware that various circumstances could make attending a
              conference difficult, if not impossible. Personal or financial
              issues might impede you to attend, but our community has your
              back.
            </p>

            <p>
              We want to help{" "}
              <strong>
                underrepresented, underprivileged or marginalized tech
                professionals
              </strong>{" "}
              by offering free tickets. Our Diversity Scholarship is available,
              but not limited to minorities, members of the LGBTQIA+ community,
              people with disabilities (hearing, visual or physical), students
              or individuals facing economic difficulties.
            </p>

            <h2>How does it work?</h2>
            <ul className="bullet">
              <li>
                <strong>We have set aside a starting fund of 3000 EUR</strong>{" "}
                for offering a limited number of diversity tickets;
              </li>
              <li>
                <strong>We'll offer free conference tickets</strong> to the
                selected scholarship applicants;{" "}
              </li>
              <li>
                <strong>We might cover travel expenses</strong> for a selected
                few scholarship applicants, if funds are still available;
              </li>
              <li>
                The free tickets offered by the Diversity Scholarship are{" "}
                <strong>valid only for the revo.js conference</strong>, and does
                not grant access to workshops;
              </li>
              <li>
                Applying for the Diversity Scholarship doesn’t guarantee a free
                ticket at the conference.
              </li>
            </ul>

            <p>
              All application information will be kept confidential and not
              shared with any 3rd party.
            </p>
          </section>

          <div style={{ paddingTop: "96px" }} id="subscribe">
            <p>
              Subscribe to find out when Diversiy Scholarship Applications
              become available:
            </p>
            <Subscribe light />
          </div>

          <br />
          <br />
          {/* <PurchaseTicket white /> */}
        </Content>
      </Section>
    </Layout>
  );
};
