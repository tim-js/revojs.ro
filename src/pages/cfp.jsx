import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Button from "@components/Button";
import Note from "@components/Note";

import "./cfp.scss";

export default () => {
  return (
    <Layout>
      <Header type="main" image="cfp-image">
        <h1>Call For Papers</h1>
        <br />
        <strong className="highlight mono">
          Type fast, the Call for Speakers closes on ???
        </strong>
        <br />
        <br />
        <OutboundLink href="https://goo.gl/forms/YlqNgEnl9DLrtufx2">
          <Button>Submit your Proposal</Button>
        </OutboundLink>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              This is a shoutout to all members of the JavaScript community who
              have a memorable talk to share.
            </p>
          </Note>

          <section>
            <h2>Topics</h2>
            <p>
              Is your talk JavaScript related? Then it’s a perfect fit! Need a
              tighter description? Here are some additional hints:
            </p>

            <ul className="bullet">
              <li>Hot topics</li>
              <li>Crazy ideas</li>
              <li>Language fundamentals</li>
              <li>Tips and tricks for daily use</li>
              <li>Tools for a better developer experience</li>
              <li>Mobile, Desktop, Embeded or Hardware JS</li>
              <li>The human side of software development</li>
              <li>Any JS topic that makes your heart beat faster</li>
            </ul>
          </section>

          <section>
            <h2>Guidelines</h2>

            <h3>Language:</h3>
            <p>
              English. Inglese. Engelsk. Angleško. Angolul. (but we’d love for
              you to teach us some words in your language too)
            </p>

            <h3>Duration:</h3>
            <p>
              20 min talks are encouraged for a more dynamic event. We will also
              throw in 30 min talks and Lightning Talks for even more dynamism.
              However, we will be on a tight schedule and will enforce the time
              limits rigorously. We strongly suggest that you time your
              presentation accordingly in advance.
            </p>
          </section>
          <br />
          <br />
          <OutboundLink href="https://goo.gl/forms/YlqNgEnl9DLrtufx2">
            <Button white>Submit your Proposal</Button>
          </OutboundLink>
        </Content>
      </Section>
    </Layout>
  );
};
