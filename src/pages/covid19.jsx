import React from "react";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";
import Text from "@components/Text";

export default () => {
  return (
    <Layout title="revo.js COVID-19 Updates">
      <Header centered type="secondary">
        <h1>COVID-19 Updates</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              We are constantly monitoring the evolution of the COVID-19
              pandemic in Romania and worldwide. We’re also constantly in
              contact with other conference organizers.
            </p>
            <p>
              Undoubtedly, the coronavirus spread will have rippling effects on
              lots of events, but we hope the pandemic will be contained soon.
            </p>
          </Note>

          <section>
            <h2>Our plan</h2>
            <h3>As of today, March 23rd 2020</h3>
            <p>
              <Text bold>We plan to continue preparations</Text> and hold
              revo.js at the original scheduled date, on 8-9 October, 2020.
            </p>

            <ul className="bullet">
              <li>
                <Link to={`/2020/cfp`}>
                  <strong>Call for Papers continues as planned</strong>
                </Link>{" "}
                and will start on April 1st;
              </li>
              <li>
                <Link to={`/2020/tickets`}>
                  <strong>Early Bird tickets will be slightly postponed</strong>
                </Link>{" "}
                till the beginning of May.
              </li>
            </ul>

            <p>
              Even though October seems far enough to be considered a safe
              month, we must also be cautious and think of all possible
              scenarios. In case the current crisis won’t be resolved until
              mid-summer we might have to cancel revo.js 2020 and move it to
              2021.
            </p>

            <p>
              <Text bold>IMPORTANT:</Text> In case we'll have to cancel this
              year's event, you’ll receive a refund for your ticket or you’ll be
              able to use it at the new scheduled date of the event.
            </p>
          </section>

          <section>
            <h2>How you can plan</h2>
            <p>
              We advise you to think ahead and act accordingly. Since flights
              are currently seriously restricted and affected, we encourage you
              to:
            </p>
            <ul className="bullet">
              <li>
                buy your travel ticket to Timisoara with just a month or a month
                and a half in advance;
              </li>
              <li>
                buy tickets that can be rescheduled or refunded in case the
                crisis escalates;
              </li>
              <li>
                ensure your hotel bookings can also be rescheduled or have
                flexible dates.
              </li>
            </ul>
          </section>

          <section>
            <h2>We’re in this together</h2>
            <p>
              Hold on with us. We’ll keep you updated every step of the way with
              any decisions we make. You, our speakers, our sponsors and our
              volunteers are on high priority.
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
