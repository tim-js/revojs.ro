import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Note from "@components/Note";
import Button from "@components/Button";
import { PurchaseTicket, TICKETS_URL } from "@components/CTA";
import Subscribe from "@components/Subscribe";
// import Text from "@components/Text";

import * as styles from "./tickets.module.scss";

const EARLY_START = "April 19th";
const EARLY_END = "May 14th";
const REGULAR_START = "May 15th";
const REGULAR_END = "Aug. 31st";
const LATE_START = "Sep. 1st";
const LATE_END = "Sep. 25st";

const Tickets = () => {
  return (
    <Layout title="revo.js Tickets">
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.tickets_image}`}>Tickets</h1>
        <div className="subtitle2023">
          Better late than never. Late Bird tickets are still available.
        </div>

        <div className={styles.cta}>
          <PurchaseTicket />
        </div>

        {/* <a href="#subscribe" className={styles.cta}>
          <Button>Subscribe for Updates</Button>
        </a> */}
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              Grab your ticket and get ready for insightful talks, exciting
              networking and a good time all-around.
            </p>
          </Note>
          <section>
            <h2>Rollout plan</h2>

            <p>
              Tickets will be available according to the timeline described
              below. However, please keep in mind that minor changes might occur
              due to events beyond our control:
            </p>

            <ul className={styles.tickets_rollout}>
              <li className={styles.tickets_rollout__inactive}>
                <span className={styles.ticket_price}>&euro;160</span>
                <div className={styles.ticket_content}>
                  <strong className={styles.ticket_name}>Early Bird</strong>
                  {/* <span className="accent">Limited tickets available</span><br /> */}
                  {EARLY_START} - {EARLY_END}{" "}
                  <span className="light-faded">(21:00 UTC)</span>{" "}
                </div>
                <strong className={styles.ticket_note}>SOLD OUT</strong>
              </li>

              <li className={styles.tickets_rollout__inactive}>
                <span className={styles.ticket_price}>&euro;210</span>
                <div className={styles.ticket_content}>
                  <strong className={styles.ticket_name}>Regular</strong>
                  {REGULAR_START} - {REGULAR_END}{" "}
                  <span className="light-faded">(21:00 UTC)</span>{" "}
                </div>
                <strong className={styles.ticket_note}>
                  EXPIRED
                </strong>
              </li>

              <li className={styles.tickets_rollout__late}>
                <span className={styles.ticket_price}>&euro;260</span>
                <div className={styles.ticket_content}>
                  <strong className={styles.ticket_name}>Late Bird</strong>
                  {LATE_START} - {LATE_END}{" "}
                  <span className="light-faded">(21:00 UTC)</span>{" "}
                </div>
                <strong className={styles.ticket_note}>
                <OutboundLink
                    className={styles.ticket_cta}
                    href={TICKETS_URL}
                    target="_blank"
                  >
                    ON SALE
                  </OutboundLink>

                </strong>
              </li>

              {/* <li
                className={styles.tickets_rollout__workshop}
                style={{ marginTop: "2em" }}
              >
                <span className={styles.ticket_price}>TBA</span>
                <div className={styles.ticket_content}>
                  <strong className={styles.ticket_name}>Workshops</strong>
                  On sale until {LATE_END}{" "}
                  <span className="light-faded">(21:00 UTC)</span> <br />
                  <Link to="/2023/workshops/" title="Workshops page">
                    View details
                  </Link>
                </div>
                <strong className={styles.ticket_note}></strong>
              </li> */}
            </ul>
          </section>
          <section>
            <h2>All conference tickets include</h2>

            <ul className="bullet">
              <li>
                <strong>Full conference access</strong> on the 5th and 6th of
                October (Thursday + Friday);
              </li>
              <li>
                <strong>Coffee, water, and tea to fuel and hydrate you;</strong>;
              </li>
              <li>
                <strong>Lunch</strong> including vegetarian and vegan options;
              </li>
              {/* <li>
                <strong>Snacks</strong> during coffee breaks;
              </li> */}
              <li>
                <strong>After party</strong> access (Friday evening).
              </li>
              <li>
                Option to <strong>reassign your ticket</strong> free of charge.
              </li>
              <li>
                <strong>No hidden taxes.</strong> What you see it what you pay.
              </li>
            </ul>

            <p className="accent">
              <strong>NOTE:</strong> <br />
              <strong>
                Conference tickets don't include access to workshops.
              </strong>{" "}
              <br />
              <span className="light-faded">
                To attend our workshops, you’ll have to purchase separate
                tickets. More details will appear on this page soon.
              </span>
            </p>
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
          <br />
          <br />
          <PurchaseTicket white />
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
          <section>
            <h2>Ticket Reassignment</h2>

            <p>
              Life happens, and change is the only const. If anything comes up
              and you can no longer attend the conference, you can reassign your
              ticket to somebody else, free of charge.
            </p>
          </section>

          {/* <section id="scholarships">
            <h2>Diversity Scholarship Tickets</h2>

            <p>
              We want to help{" "}
              <strong>
                underrepresented, underprivileged or marginalized tech
                professionals
              </strong>{" "}
              by offering free tickets. Our Diversity Scholarship is available,
              but not limited to minorities, people with disabilities (hearing, visual or physical), 
              members of the LGBTQIA+ community, students,
              or individuals facing economic difficulties.
            </p>

            <br />

            <Link to="/2023/scholarships/">
              <Button white>Diversity Scholarships</Button>
            </Link>
          </section> */}
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
          {/* <section id="subscribe">
            <br />
            <br />
            <h2>Stay up to date</h2>
            <p>Subscribe to find out when Tickets go on sale:</p>
            <Subscribe light />
          </section> */}
          <br />
          <br />
          <PurchaseTicket white />
        </Content>
      </Section>
    </Layout>
  );
};

export default Tickets;
