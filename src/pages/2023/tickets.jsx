import React from "react";
// import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
// import Note from "@components/Note";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";
import Subscribe from "@components/Subscribe";
import Text from "@components/Text";

import * as styles from "./tickets.module.scss";

// const EARLY_START = "May 1st";
// const EARLY_END = "May 31st";
// const REGULAR_START = "June 1st";
// const REGULAR_END = "Aug. 24th";
// const LATE_START = "Aug. 25th";
// const LATE_END = "Sep. 21st";

export default () => {
  return (
    <Layout title="revo.js Tickets">
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.tickets_image}`}>Tickets</h1>
        <div className="subtitle2023">
          Tickets will go on sale in Spring 2023
        </div>
        <a href="#subscribe" className={styles.cta}>
          <Button>Subscribe for Updates</Button>
        </a>
      </Header>

      <Section light>
        <Content centered>
          {/* <Note>
            <p>
              Grab your ticket and get ready for insightful talks,
              exciting networking and a good time all-around.
            </p>
          </Note> */}

          {/* <section>
            <h2>Rollout plan</h2>

            <p>
              Tickets will be available according to the following plan.
              However, please keep in mind that minor changes might occur due to
              events beyond our control:
            </p>

            <ul className="tickets-rollout-2020">
              <li className="tickets-rollout-2020--early">
                <span className="ticket-price">&euro;130</span>
                <div className="ticket-content">
                  <strong className="ticket-name">Early Bird Tickets</strong>
                  {EARLY_START} - {EARLY_END}{" "}
                  <span className="light-faded">(21:00 UTC)</span>{" "}
                </div>
                <strong className="ticket-note">COMING SOON</strong>
              </li>

              <li className="tickets-rollout-2020--regular">
                <span className="ticket-price">&euro;170</span>
                <div className="ticket-content">
                  <strong className="ticket-name">Regular Tickets</strong>
                  {REGULAR_START} - {REGULAR_END}{" "}
                  <span className="light-faded">(21:00 UTC)</span>{" "}
                </div>
                <strong className="ticket-note"></strong>
              </li>

              <li className="tickets-rollout-2020--late">
                <span className="ticket-price">&euro;210</span>
                <div className="ticket-content">
                  <strong className="ticket-name">Late Bird Tickets</strong>
                  {LATE_START} - {LATE_END}{" "}
                  <span className="light-faded">(21:00 UTC)</span>{" "}
                </div>
                <strong className="ticket-note"></strong>
              </li>
              <li>
                <strong>Workshops Tickets</strong>: until {LATE_END}{" "}
                <span className="light-faded">13:00 UTC</span>{" "}
              </li>
            </ul>
          </section> */}

          <section>
            <h2>All conference tickets include</h2>

            <ul className="bullet">
              <li>
                <strong>Full conference access</strong> on the 5th and 6th of
                October (Thursday + Friday);
              </li>
              <li>
                <strong>Coffee, water and beverages</strong>;
              </li>
              <li>
                <strong>Lunch</strong>, including vegetarian and vegan options;
              </li>
              <li>
                <strong>Snacks</strong> during coffee breaks;
              </li>
              <li>
                <strong>After party</strong> access (Friday evening).
              </li>
            </ul>

            {/* <p className="accent">
              <strong>Note:</strong> <br />
              Conference tickets don't include access to workshops. <br />
              <span className="light-faded">
                There is a separate ticket that you have to purchase in order to
                attend the workshop.
              </span>
            </p> */}
          </section>

          {/* <section>
            <h2>Workshops tickets</h2>
            <p className="accent">
              Details about the workshops will be available soon. Stay tuned!
            </p>

            <p>Workshops tickets are sold separately and they include:</p>
            <ul className="bullet">
              <li>
                <strong>Coffee and beverages</strong>;
              </li>
              <li>
                <strong>Snacks</strong> during coffee breaks;
              </li>
              <li>
                <strong>Lunch</strong> (applicable only to full-day workshops).
              </li>
            </ul>
            <p className="accent">
              <strong>Note:</strong> <br />
              Workshop tickets don't offer access to the conference. <br />
              <span className="light-faded">
                You have to also purchase a conference ticket if you want to
                attend both events.
              </span>
            </p>
          </section> */}

          {/* <br />
          <br /> */}
          {/* <PurchaseTicket white /> */}

          <section>
            <h2>Bulk Tickets for Companies</h2>

            <p>Change happens when like-minded people get together.</p>

            <p>
              So if you want to purchase revo.js tickets for your entire crew,
              please contact us directly by{" "}
              <a href="mailto:info@revojs.ro?subject=[tickets bulk]">
                sending an e-mail
              </a>{" "}
              with the details.
            </p>

            <p>We’ll be prompt to answer!</p>
          </section>

          <section id="scholarships">
            <h2>Diversity Scholarship Tickets</h2>

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

            <br />

            <Link to="/2023/scholarships/">
              <Button white>Diversity Scholarships</Button>
            </Link>
          </section>

          <section id="refund">
            <h2>Refund Policy</h2>

            <p>
              Purchased tickets are not refundable, with the following
              exceptions:
            </p>
            <ul>
              <li>
                <strong>In case the event gets cancelled</strong> due to
                unforeseeable circumstances, you will get a 90% refund{" "}
                <i>(taxes cannot be refunded)</i>;
                <br />
                <br />
              </li>
              <li>
                <strong>In case the event needs to be rescheduled</strong>, you
                will have the option to either get a refund or use your ticket
                to participate at the rescheduled event.
              </li>
            </ul>
          </section>

          <section id="subscribe">
            <br />
            <br />
            <h2>Stay up to date</h2>
            <p>Subscribe to find out when Tickets go on sale:</p>
            <Subscribe light />
          </section>

          <br />
          <br />
          {/* <PurchaseTicket white /> */}
        </Content>
      </Section>
    </Layout>
  );
};
