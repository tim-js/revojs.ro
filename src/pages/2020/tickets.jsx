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
import Title2020 from "@components/Title2020";
import Text from "@components/Text";

import "./tickets.scss";

const EARLY_START = "23rd of March";
const EARLY_END = "4th of May";
// const REGULAR_START = "5th of May";
const REGULAR_END = "24th of August";
// const LATE_START = "25th of August";
const LATE_END = "21st of September";

export default () => {
  return (
    <Layout title="revo.js Tickets">
      <Header type="main" centered>
        <Title2020 size={8}>Tickets</Title2020>

        <div className="subtitle2020">
          Early Bird Tickets will <br />
          wake up on the{" "}
          <Text bold color="white">
            {EARLY_START}.
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
          {/* <Note>
            <p>
              Grab your ticket and get ready for insightful talks,
              exciting networking and a good time all-around.
            </p>
          </Note> */}

          <section>
            <h2>Rollout plan</h2>

            <p>Tickets will be available according to the following plan:</p>
            <ul className="bullet">
              <li>
                <strong>Early Bird Tickets</strong>: until {EARLY_END}{" "}
                <span className="light-faded">22:00 UTC</span>{" "}
                <strong className="highlight">(COMING SOON)</strong>
              </li>
              <li>
                <strong>Regular Tickets</strong>: until {REGULAR_END}{" "}
                <span className="light-faded">22:00 UTC</span>{" "}
              </li>
              <li>
                <strong>Late Bird Tickets</strong>: until {LATE_END}{" "}
                <span className="light-faded">22:00 UTC</span>{" "}
              </li>
              <li>
                <strong>Workshops Tickets</strong>: until {LATE_END}{" "}
                <span className="light-faded">22:00 UTC</span>{" "}
              </li>
            </ul>
          </section>

          <section>
            <h2>All conference tickets include</h2>

            <ul className="bullet">
              <li>
                Full conference access on the 8th and 9th of October (Thursday +
                Friday)
              </li>
              <li>Coffee, water and beverages</li>
              <li>Lunch, including vegetarian and vegan options</li>
              <li>Snacks during coffee breaks</li>
              <li>After party access (Friday evening)</li>
            </ul>

            <p>
              <strong>Note:</strong> <br />
              Conference tickets don't include access to workshops. <br />
              <span className="light-faded">
                There is a separate ticket that you have to purchase in order to
                attend the workshop.
              </span>
            </p>
          </section>

          <section>
            <h2>Workshops tickets</h2>
            <p>Workshops tickets are sold separately and they include:</p>
            <ul className="bullet">
              <li>Lunch and snacks</li>
              <li>Coffee and beverages</li>
            </ul>
            <p>
              <strong>Note:</strong> <br />
              Workshop tickets don't offer access to the conference. <br />
              <span className="light-faded">
                You have to also purchase a conference ticket if you want to
                attend both events.
              </span>
            </p>
          </section>

          <br />
          <br />
          {/* <PurchaseTicket white /> */}

          <section>
            <h2>Bulk Tickets for Companies</h2>

            <p>Change happens when like-minded people get together.</p>

            <p>
              So if you want to purchase revo.js tickets for an entire crew of
              change, please contact us directly by{" "}
              <a href="mailto:info@revojs.ro?subject=[tickets bulk]">
                sending an e-mail
              </a>{" "}
              with the details.
            </p>

            <p>We’ll be prompt to answer!</p>
          </section>

          <section>
            <h2>Diversity Support Tickets</h2>

            <p>
              We also offer{" "}
              {/* <OutboundLink
                target="_blank"
                href="https://diversitytickets.org/en/events/446"
              >
                Diversity Support Tickets
              </OutboundLink>{" "} */}
              <strong>Diversity Support Tickets</strong> and{" "}
              <strong>Scholarships</strong> meant to ignite change among young
              talents.
            </p>

            <p>
              Purchase a ticket for yourself and help another JS enthusiast
              (chosen by the conference’s organizers) attend the event.
            </p>

            <p>
              Kudos in advance for your awesomeness and generosity! Together we
              can make tech events accessible to all.
            </p>
          </section>

          <div style={{ paddingTop: "96px" }} id="subscribe">
            <p>
              Subscribe to find out when Early Bird tickets become available:
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
