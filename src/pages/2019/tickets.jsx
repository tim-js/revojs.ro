import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Note from "@components/Note";
// import { PurchaseTicket } from "@components/CTA";
// import Subscribe from "@components/Subscribe";

import "./tickets.scss";

export default () => {
  // const INDEX_START_EARLY = 3;
  // const INDEX_START_REGULAR = 5;
  // const INDEX_START_LATE = 8;

  // const now = new Date();
  // const currentMonth = Math.max(now.getMonth(), INDEX_START_REGULAR);

  // const months = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct"
  // ];

  // let countEarly = 0;
  // let countRegular = 0;
  // let countLate = 0;

  // months.forEach(function(m, index) {
  //   if (index < currentMonth) {
  //     return;
  //   }
  //   if (index < INDEX_START_REGULAR) {
  //     countEarly++;
  //   } else if (index >= INDEX_START_LATE) {
  //     countLate++;
  //   } else {
  //     countRegular++;
  //   }
  // });

  return (
    <Layout title="revo.js Tickets">
      <Header type="main" image="tickets-image">
        <h1>Tickets</h1>
        <br />
        <strong className="tickets-important light-faded mono">
          Tickets sale has <span className="highlight">closed!</span>
        </strong>
        <br />
        {/* <div className="mono tag-wrapper">
          {!!countEarly && (
            <strong style={{ flex: countEarly }} className="tag-early">
              Early Bird
            </strong>
          )}
          {!!countRegular && (
            <strong style={{ flex: countRegular }} className="tag-regular">
              Regular
            </strong>
          )}
          {!!countLate && (
            <strong style={{ flex: countLate - 1 }} className="tag-late">
              Late Bird
            </strong>
          )}
        </div>
        <ul className="tickets-timeline">
          {months.map((m, index) => {
            if (index < currentMonth) {
              return null;
            }

            let css = "";
            if (index < INDEX_START_REGULAR) {
              css = "early";
              countEarly++;
            } else if (index >= INDEX_START_LATE) {
              css = "late";
              countLate++;
            } else {
              css = "regular";
              countRegular++;
            }

            return (
              <li key={m} className={css}>
                <span className="month">{m}</span>
              </li>
            );
          })}
        </ul> */}

        <br />
        {/* <PurchaseTicket /> */}
        {/* <OutboundLink href="#subscribe">
          <Button>Subscribe for Updates</Button>
        </OutboundLink> */}
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              Grab your ticket for change and get ready for insightful talks,
              exciting networking and a good time all-around.
            </p>
          </Note>

          <section>
            <h2>Rollout plan</h2>

            <p>Tickets will be available according to the following plan:</p>
            <ul className="bullet">
              <li className="light-faded">
                <strong>Early Bird Tickets</strong>: until 31st of May{" "}
                <strong>(SOLD OUT)</strong>
              </li>
              <li className="light-faded">
                <strong>Regular Tickets</strong>: until 31st of August{" "}
                <strong>(ENDED)</strong>
              </li>
              <li className="light-faded">
                <strong>Late Bird Tickets</strong>: until 30th of September{" "}
                <strong>(ENDED)</strong>
              </li>
              <li className="light-faded">
                <strong>Workshop Tickets</strong>: until 27th of September{" "}
                <strong>(SOLD OUT)</strong>
              </li>
            </ul>
          </section>

          <section>
            <h2>All conference tickets include</h2>

            <ul className="bullet">
              <li>
                Full conference access on the 3rd and 4th of October (Thursday +
                Friday)
              </li>
              <li>Coffee, water and beverages</li>
              <li>Lunch, including vegetarian and vegan options</li>
              <li>Snacks during coffee breaks</li>
              <li>After party access (Friday evening)</li>
            </ul>

            <p>
              <strong>Note:</strong> <br />
              Conference tickets don't include access to the workshop. <br />
              There is a separate ticket that you have to purchase in order to
              attend the workshop.
            </p>
          </section>

          <section>
            <h2>Workshop tickets</h2>
            <p>Workshop tickets are sold separately and they include:</p>
            <ul className="bullet">
              <li>Lunch and snacks</li>
              <li>Coffee and beverages</li>
            </ul>
            <p>
              <strong>Note:</strong> <br />
              Workshop tickets don't offer access to the conference. <br />
              You have to also purchase a conference ticket if you want to
              attend both events.
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
              <OutboundLink
                target="_blank"
                href="https://diversitytickets.org/en/events/446"
              >
                Diversity Support Tickets
              </OutboundLink>{" "}
              and Scholarships meant to ignite change among young talents.
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

          {/* <div style={{ paddingTop: "96px" }} id="subscribe">
            <p>
              Subscribe to find out when Early Bird tickets become available:
            </p>
            <Subscribe light />
          </div> */}

          <br />
          <br />
          {/* <PurchaseTicket white /> */}
        </Content>
      </Section>
    </Layout>
  );
};
