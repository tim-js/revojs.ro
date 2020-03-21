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
              pandemic in Romania and worldwide. We are also constantly in
              contact with other conference organizers.
            </p>
            <p>
              Undoubtedly, the coronavirus spread will have rippling effects on
              a lot of events, but we hope the pandemic will be contained soon.
            </p>
          </Note>

          <section>
            <h2>Our plan</h2>
            <h3>As of today, March 23rd 2020</h3>
            <p>
              <Text bold>
                The preparations for revo.js will continue according to our
                initial plan.
              </Text>
              <br />
              The conference will take place at the originally scheduled date,
              on 8-9 October 2020.
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
                until the beginning of May.
              </li>
            </ul>

            <p>
              Even though October seems far enough to be considered a safe
              month, we must be cautious and think of all possible scenarios. In
              case the current crisis won’t be resolved until mid-summer, we
              might have to cancel revo.js 2020 and prepare for next year's
              edition.
            </p>

            <p>
              <Text bold>IMPORTANT:</Text> In case we'll have to cancel this
              year's event, you’ll either receive a full refund for your ticket
              or you’ll be able to use your ticket for next year's edition.
            </p>
          </section>

          <section>
            <h2>Plan accordingly</h2>
            <p>
              We advise you to take precautionary measures when it comes to
              travel and accommodation:
            </p>
            <ul className="bullet">
              <li>
                book your travel ticket to Timisoara no sooner than a month or
                two in advance;
              </li>
              <li>
                buy travel tickets that can be refunded or that allow you to
                reschedule your trip, in case the crisis escalates;
              </li>
              <li>
                make sure your accommodation booking can also be refunded should
                you need to cancel it.
              </li>
            </ul>
          </section>

          <section>
            <h2>We’re in this together</h2>
            <p>
              We’ll keep you updated every step of the way with any decisions we
              make. You, our speakers and our sponsors are a top priority for
              us.
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
