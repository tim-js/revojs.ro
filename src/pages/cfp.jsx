import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Button from "@components/Button";

import "./cfp.scss";

export default () => {
  return (
    <Layout>
      <Header className="cfp-header">
        <h1>Call For Papers</h1>
        <Content>
          <p className="cfp-text">
            This is a shoutout to all members of the JavaScript community who
            have a memorable talk to share. Please submit your talk proposal
            until ??? and have a shot at presenting it at the first edition of
            the revo.js, which will take place in Timisoara, Romania between 3-4
            Oct 2019.
          </p>
          <br />
          <strong className="cfp-highlight">
            Type fast, the Call for Speakers closes on ???
          </strong>
          <br />
          <br />
          <br />
          <Button href="#">Submit a Proposal Now</Button>
        </Content>
      </Header>

      <Section light>
        <Content centered>
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
        </Content>
      </Section>
    </Layout>
  );
};
