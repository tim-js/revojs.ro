import React from "react";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Note from "@components/Note";
// import { SubmitCFP } from "@components/CTA";
// import Subscribe from "@components/Subscribe";

import "./cfp.scss";

// const CFP_OPEN = "17th of April";
// const CFP_CLOSE = "17th of June";

const CfpPage = () => {
  return (
    <Layout title="revo.js Call for Papers">
      <Header type="main" image="cfp-image">
        <h1>Call For Papers</h1>
        <br />
        <strong className="cfp-important light-faded mono">
          <span className="highlight">CFP has closed on the 17th of June.</span>
          {/* <span className="highlight">{CFP_CLOSE}.</span>
          <br />
          <span>
            You can submit more than proposal.
          </span> */}
          {/* Better prepare! <br />
          CFP opens on the <span className="highlight">{CFP_OPEN}.</span> */}
        </strong>
        <br />
        <br />

        {/* <SubmitCFP /> */}

        {/* <a href="#topics" className="cfp-cta">
          <Button>View our Topics</Button>
        </a> */}
      </Header>

      <Section light>
        <Content centered>
          <Note>
            {/* <p>
              Do you have a technical presentation that can change minds,
              perspectives, work approaches, or why not, even the mood of JS
              programmers?
            </p> */}

            {/* <p>Stay tuned to share it!</p>
            <p>
              The Call for Papers opens on the{" "}
              <strong className="highlight mono">{CFP_OPEN}</strong>.
            </p> */}

            {/* <p>
              This is a call out to all members of the JavaScript community who
              have a memorable talk that can stir up change. Submit your talk
              proposals until the <strong>17th of June</strong> and hopefully
              we’ll meet on the 3rd and 4th of October in Timisoara.
            </p> */}
            <p>
              We've received <strong>92 proposals</strong>, which is a lot more
              than we've initially expected.
            </p>
            {/* <p>
              We're currently thoroughly reviewing all proposals and we're
              planning to annouce the selected speakers in Mid-July.
            </p> */}
          </Note>

          {/* <br />
          <br />
          <SubmitCFP white /> */}

          {/* <section>
            <h2>Stay up to date!</h2>
            <p>Subscribe to find out when Call for Papers starts:</p>
            <Subscribe light list="cfp" />
          </section> */}

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
              <li>Mobile, Desktop, Embedded or Hardware JS</li>
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
              The standard duration for all talks is 25-30 minutes. For a more
              dynamic routine, we’ll also throw in a few shorter or longer
              presentations, if applicable.
            </p>
            <p>
              Since we’ll be on a tight schedule, we’ll enforce the time limits
              rigorously. We strongly suggest that you time your presentation
              accordingly in advance.
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

          <section>
            <h2>Need help?</h2>

            <p>
              We know that putting together a winning talk proposal can be
              daunting. But count on us! We’re happy to help and guide you all
              the way with:
            </p>
            <ul>
              <li>Brainstorming ideas</li>
              <li>Proposal submission</li>
              <li>Slides or live code preparation</li>
              <li>Talk delivery on stage</li>
            </ul>

            <p>
              We’re here to help you nail the JS talk! Don’t be shy, get in
              touch:
              <br />
              <a
                href="mailto:info@revojs.ro?subject=[help cfp]"
                className="mono"
              >
                <strong>info@revojs.ro</strong>
              </a>{" "}
              (just please don’t use this email to submit your proposal).
            </p>
          </section>

          <section>
            <h2>Perks for selected talks</h2>

            <p>If your proposal gets picked, here’s what we’ll do:</p>

            <ul className="bullet">
              <li>Cover all your travel expenses</li>
              <li>
                Offer 4 nights accommodation close to the conference venue (if
                you’d like to stay longer, we can help you arrange things, just
                let us know)
              </li>
              <li>
                Upgrade your room to a double one in case you want to bring
                someone along for support (the conference ticket for an extra
                person will not be included, though)
              </li>
              <li>
                Give you free entrance at all the talks and happenings during
                the conference
              </li>
              <li>
                Take you on a trip outside Timisoara on Saturday; we’ll tag
                along
              </li>
              <li>Take you out at a speakers’ dinner</li>
              <li>Get you involved in other activities around the event</li>
            </ul>

            <h3>Does your company have your back?</h3>
            <p>
              If your employer wants to cover your travel expenses and
              accommodation, we’d be happy to list them as partners. The money
              saved will be invested into the general running of the conference
              and scholarships for attendees from underrepresented groups.
            </p>
          </section>

          <section>
            <h2>Video recordings</h2>

            <p>
              We plan to record all talks and publish them online for free,
              along with a recording of the slide deck, live demo, and any
              on-presenter-screen activity. We do this for the benefit of the
              larger JS community and those who can’t make it to the conference.
            </p>

            <p>
              We hope you agree with us, but if you are uncomfortable with this
              in any way, let us know and we will work things out. Note that
              we'll disable comments on our published videos by default.
            </p>

            <p>
              Finally, since you retain full ownership of your slides and
              recording,{" "}
              <strong>
                we’d like to ask you to make your materials and recording
                available under a Creative Commons (we default to non-commercial
                reuse) or other open source license
              </strong>
              .
            </p>
          </section>

          <section>
            <h2>Code of Conduct</h2>

            <p>
              Our Code of Conduct aims to create a safe and welcoming space for
              our community members, and to protect every attendee, staff member
              and speaker from harassment.
            </p>

            <p>
              We thus need you to read, understand, and comply with our{" "}
              <Link to="/code-of-conduct/">
                <strong>Code of Conduct</strong>
              </Link>
              .
            </p>
          </section>

          <br />
          <br />

          {/* <SubmitCFP white /> */}
        </Content>
      </Section>
    </Layout>
  );
};

export default CfpPage;
