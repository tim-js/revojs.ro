import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Button from "@components/Button";
// import Note from "@components/Note";
import Subscribe from "@components/Subscribe";

import "./tickets.scss";

export default () => {
  const INDEX_START_EARLY = 3;
  const INDEX_START_REGULAR = 5;
  const INDEX_START_LATE = 8;

  const now = new Date();
  const currentMonth = Math.max(now.getMonth(), INDEX_START_EARLY);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct"
  ];

  let countEarly = 0;
  let countRegular = 0;
  let countLate = 0;

  months.forEach(function(m, index) {
    if (index < currentMonth) {
      return;
    }
    if (index < INDEX_START_REGULAR) {
      countEarly++;
    } else if (index >= INDEX_START_LATE) {
      countLate++;
    } else {
      countRegular++;
    }
  });

  return (
    <Layout title="revo.js Tickets">
      <Header type="main" image="tickets-image">
        <h1>Tickets</h1>
        <br />
        <br />
        <div className="mono tag-wrapper">
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
        </ul>

        <br />
        {/* <OutboundLink
          className="tickets-cta"
          href="https://ti.to/revojs/revojs2019"
          target="_blank"
        >
          <Button>Get Your Ticket</Button>
        </OutboundLink> */}
        <OutboundLink href="#subscribe">
          <Button>Subscribe for Updates</Button>
        </OutboundLink>
      </Header>

      <Section light>
        <Content centered>
          {/* <Note>
            <p>
              Get your ticket for change and get ready for insightful talks,
              exciting networking and a good time all-around.
            </p>
          </Note> */}

          <section>
            <h2 className="first">All tickets include</h2>

            <ul className="bullet">
              <li>
                Full conference access on the 3rd and 4th of October (Thursday +
                Friday)
              </li>
              <li>After party access (Friday evening)</li>
              <li>
                Lunch and snacks during breaks (including vegetarian and vegan
                options)
              </li>
              <li>Coffee, water and beverages</li>
            </ul>
          </section>

          <section>
            <h2>Diversity Support Tickets</h2>

            <p>
              We also offer Scholarships and Diversity Support Tickets meant to
              ignite change among young talents.
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
          <br />
          {/* <OutboundLink href="https://ti.to/revojs/revojs2019" target="_blank">
            <Button white>Get Your Ticket</Button>
          </OutboundLink> */}
        </Content>
      </Section>
    </Layout>
  );
};
