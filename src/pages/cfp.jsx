import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Button from "@components/Button";
import Note from "@components/Note";

import "./cfp.scss";

const CFP_OPEN = "17th of April";
// const CFP_CLOSE = "17th of June";

export default () => {
  return (
    <Layout>
      <Header type="main" image="cfp-image">
        <h1>Call For Papers</h1>
        <br />
        <strong className="highlight mono">
          {/* Type fast, the Call for Speakers closes on ??? */}
          Opens on the {CFP_OPEN}
        </strong>
        <br />
        <br />
        {/* <OutboundLink href="https://goo.gl/forms/YlqNgEnl9DLrtufx2">
          <Button>Submit your Proposal</Button>
        </OutboundLink> */}
        <a href="#topics">
          <Button>View our Topics</Button>
        </a>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              Do you have a technical presentation that can change minds,
              perspectives, work approaches, or why not, even the mood of JS
              programmers?
            </p>
            <p>Stay tuned to share it!</p>
            <p>
              The Call for Papers opens on the{" "}
              <strong className="highlight mono">{CFP_OPEN}</strong>.
            </p>
          </Note>

          <section id="topics">
            <h2>Topics</h2>
            <p>
              Is your talk JavaScript related? Then it’s a perfect fit! <br />
              Need a tighter description? Here are some additional hints:
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

            <h3>Language</h3>
            <p>
              <strong>English. Inglese. Engelsk. Angleško. Angolul.</strong>{" "}
              (but we’d love for you to teach us some words in your language
              too)
            </p>

            <h3>Duration</h3>
            <p>
              20 min talks are encouraged for a more dynamic event. We will also
              throw in 30 min talks and Lightning Talks for even more dynamism.
            </p>
            <p>
              However, we will be on a tight schedule and will enforce the time
              limits rigorously. We strongly suggest that you time your
              presentation accordingly in advance.
            </p>

            <h3>Attention to details</h3>
            <p>
              Make sure you care, and make sure we see you care. Content is king
              but formatting and correct spelling are the crown jewels that
              ensure a royal proposal. Make it shine or else you won’t make it
              to the throne (in this case, the stage of revo.js)
            </p>

            <h3>Abstract</h3>
            <p>
              Keep it short and simple. If you need more than two paragraphs to
              explain your talk, you’re not there yet. Change it up. Narrow your
              description or narrow the subjects you want to cover.
            </p>

            <h3>Delivery</h3>
            <p>
              Give us a taste of your delivery style by sharing a recording of
              any other talk you gave in the past (on a conference stage, at a
              local meetup, or in your living room).
            </p>
            <p>
              This is not mandatory but it will win you extra-extra points
              during the selection phase.
            </p>

            <h3>Originality</h3>
            <p>
              We generally discourage "second-hand" talks as we are looking for
              crisp and fresh content.
            </p>
            <p>
              However, if you have a talk that is top-notch, or is focused on a
              live experience, we would definitely want it on stage. In case you
              really-really want to present a talk for the second time, we
              encourage you to give it a twist (
              <strong className="mono">change</strong> is the key word) and make
              it feel `like brand new`.
            </p>
          </section>
          <br />
          <br />
          {/* <OutboundLink href="https://goo.gl/forms/YlqNgEnl9DLrtufx2">
            <Button white>Submit your Proposal</Button>
          </OutboundLink> */}
        </Content>
      </Section>
    </Layout>
  );
};
