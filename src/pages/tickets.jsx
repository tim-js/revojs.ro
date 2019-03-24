import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Button from "@components/Button";
import Note from "@components/Note";

import "./tickets.scss";

export default () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const startIndex = 2;
  const monthPercent = Math.floor((currentDay * 100) / 31);

  return (
    <Layout>
      <Header type="main" image="tickets-image">
        <h1>Tickets</h1>
        <br />
        <ul className="tickets-timeline">
          {months.map((m, index) => {
            let css = "regular";
            if (index <= 2) {
              css = "early";
            }
            if (index >= months.length - 1) {
              css = "late";
            }
            return (
              <li key={m} className={css}>
                {m}
                {index + startIndex === currentMonth && (
                  <span
                    style={{ left: `${monthPercent}%` }}
                    className="current-day"
                  >
                    Today
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <br />
        <OutboundLink href="https://ti.to/revojs/revojs2019">
          <Button>Get Your Ticket</Button>
        </OutboundLink>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              Get your ticket for change and get ready for insightful talks,
              exciting networking and a good time all-around.
            </p>
          </Note>

          <section>
            <h2>All tickets include</h2>

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

          <br />
          <br />
          <br />
          <OutboundLink href="https://ti.to/revojs/revojs2019">
            <Button white>Get Your Ticket</Button>
          </OutboundLink>
        </Content>
      </Section>
    </Layout>
  );
};
