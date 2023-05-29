import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import Content from "@components/Content";
import Button from "@components/Button";
import Note from "@components/Note";
import { SubmitCFP } from "@components/CTA";
import Subscribe from "@components/Subscribe";
// import Text from "@components/Text";

import * as styles from "./cfp.module.scss";

const CFP_OPEN = "April 3rd";
const CFP_CLOSE = "June 4th (23:59 EEST)";

const CfpPage = () => {
  return (
    <Layout title="revo.js Call for Papers">
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.cfp_image}`}>Call for Papers</h1>
        <div className="subtitle2023">The Call for Papers is open until {CFP_CLOSE}</div>

        <div className={styles.cta}>
          <SubmitCFP />
        </div>

        {/* <a href="#subscribe-cfp" className={styles.cta}>
          <Button>Subscribe for updates</Button>
        </a> */}
      </Header>

      <Section light>
        <Content centered>
          <Note>
            {/* <p>
              Do you have a technical presentation that can change minds,
              perspectives, work approaches, or why not, even the mood of JS
              programmers?
            </p>
            <p>
              Stay tuned to share it!{" "}
              <strong>The Call for Papers starts on <span className="accent">{CFP_OPEN} 2023</span></strong>.
            </p> */}

            <p>
              This is a call out to all members of the JavaScript community who
              have a memorable talk that can stir up change. Submit your talk
              proposals until <strong>{CFP_CLOSE}</strong> and hopefully
              we’ll meet in October in Timisoara.
            </p>

            <br />

            <p>
              The selected talks will be announced at the beginning of August.
            </p>

            {/* <p>
              We've received <strong>92 proposals</strong>, which is a lot more
              than we've initially expected.
            </p>
            <p>
              We're currently thoroughly reviewing all proposals and we're
              planning to annouce the selected speakers in Mid-July.
            </p> */}

            <br />
            <br />
            <br />

            <p style={{ fontSize: "1.5em" }}>
              revo.js’ main theme in 2023 is <br />
              <strong className="mono">
                <span className="highlight">re</span>think.{" "}
                <span className="highlight">re</span>visit.{" "}
                <span className="highlight">re</span>volve.
              </strong>
            </p>

            <br />

            <p>That means we’re encouraging presentations that:</p>

            <ul className="bullet">
              <li>
                <strong>
                  Examine the current de-facto solutions with a critical eye
                </strong>{" "}
                and analyse alternative approaches.
              </li>
              <li>
                <strong>Revisit classical or old-fashioned practices</strong>{" "}
                that are still applicable today.
              </li>
              <li>
                Scrutinise whether (and when){" "}
                <strong>
                  today’s complexity is a necessity or a commodity
                </strong>
                .
              </li>
            </ul>
          </Note>

          <p>
            <strong className="accent">NOTE:</strong> Not every talk is
            mandatory to touch upon the central theme. Your talk's primary focus
            should be to deliver quality, relevant content in an engaging
            manner. However, proposals that fit the theme will get extra points
            during the CFP selection.
          </p>

          <br />
          <SubmitCFP white />

          {/* <section id="subscribe-cfp">
            <br />
            <br />
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
              <li>Crazy ideas &amp; out-of-the-box approaches;</li>
              <li>Re-thinking best practices;</li>
              <li>Tips and tricks for daily use;</li>
              <li>Tools &amp; solutions for a better developer experience;</li>
              <li>Any other topic that makes your heart beat faster.</li>
            </ul>
          </section>

          <section>
            <h2>Guidelines</h2>

            <h3>Language</h3>
            <p>
              <strong>English. Inglese. Engelsk. Angleško. Angolul.</strong>
              <br />
              But we’d love for you to teach us some words in your native
              language too.
            </p>

            <h3>Duration</h3>
            <p>
              The standard duration for all talks is <strong>30 minutes</strong>
              .
              Since we’ll be on a tight schedule, we strongly suggest that you
              time your presentation accordingly in advance.
            </p>

            <h3>Attention to details</h3>
            <p>
              Make sure you care, and make sure we see you care. Content is king
              but formatting and correct spelling are the crown jewels that
              ensure a royal proposal.
            </p>

            <h3>Abstract</h3>
            <p>
              Keep it short and simple. If you need more than two paragraphs to
              explain your talk, you’re not there yet. Narrow your description
              or narrow the subjects you want to cover.
            </p>
            <p>
              Ask yourself "
              <strong>
                What should the attendees walk away with after the talk?
              </strong>
              ". Uncovering the takeaways will help you discover what your talk
              is really about.
            </p>

            <h3>Delivery</h3>
            <p>
              Give us a taste of your delivery style by sharing a recording of
              any other talk you gave in the past (on a conference stage, at a
              local meetup, or in your living room).
            </p>
            <p>
              <i>
                This is not mandatory, but it will win you extra-extra points
                during the selection phase.
              </i>
            </p>

            <h3>Originality</h3>
            <p>
              We generally discourage "second-hand" talks as we are looking for{" "}
              <strong>crisp and fresh content</strong>.
            </p>
            <p>
              However, if you have a great talk that required a lot of
              preparation, or is focused on a live experience, we would
              definitely want it on stage. We encourage you to give it a twist,
              adapt it for our audience and make it `feel like brand new`.
            </p>
          </section>

          <section>
            <h2>Need help?</h2>

            <p>
              We know that putting together a winning talk proposal can be
              daunting. But count on us! We’re happy to help and guide you all
              the way with:
            </p>
            <ul className="bullet">
              <li>Proposal submission;</li>
              <li>Slides or live code preparation;</li>
              <li>Talk delivery on stage.</li>
            </ul>

            <p>
              <strong>We’re here to help you nail the revo.js talk!</strong>
              <br />
              Don’t be shy, get in touch:{" "}
              <a href="mailto:info@revojs.ro?subject=[help cfp]">
                <span>info@revojs.ro</span>
              </a>
              <br />
              <br />
              <i className="accent">
                (Please don’t use this email to submit your proposal).
              </i>
            </p>
          </section>

          <section>
            <h2>What do we offer?</h2>

            <p>If your proposal gets picked, here’s what we’ll do:</p>

            <ul className="bullet">
              <li>
                Cover all your <strong>travel expenses</strong>;
              </li>
              <li>
                Offer <strong>4 nights accommodation</strong> close to the
                conference venue (if you’d like to stay longer, we can help you
                arrange things, just let us know);
              </li>
              <li>
                Upgrade your room to a double one in case you want to bring
                someone along for support;
              </li>
              <li>
                Provide you with <strong>free entrance</strong> at all the talks
                and related events during the conference;
              </li>
              <li>
                Invite you out to a <strong>speakers’ dinner</strong> Wednesday
                evening, before the conference.
              </li>
              <li>
                Take you on a <strong>trip outside Timisoara</strong> on
                Saturday, with the organizing team;
              </li>
            </ul>

            <h3>Does your company have your back?</h3>
            <p>
              If your employer wants to cover your travel and/or accommodation
              expenses, we’d be happy to list them as partners. The money saved
              will be invested into the general running of the conference and{" "}
              <Link to="/2020/scholarships">
                <strong>scholarships</strong>
              </Link>{" "}
              for attendees from underrepresented groups.
            </p>
          </section>

          <section>
            <h2>Video recordings</h2>

            <p>
              We would like to record all talks and{" "}
              <OutboundLink
                href="https://www.youtube.com/playlist?list=PL701JjUqw62nHoRho4RJ3KJSLCRG08r1Z"
                target="_blank"
                rel="noopener noreferrer"
              >
                publish them online
              </OutboundLink>{" "}
              for free, along with a recording of the slide deck, live demo, and
              any on-presenter-screen activity. We want to do this for the
              benefit of the larger JS community and those who can’t make it to
              the conference.
            </p>

            <p>
              Since you retain full ownership of your slides and recording, we’d
              like to ask you to{" "}
              <strong>
                make your materials and recordings available under a Creative
                Commons
              </strong>{" "}
              or other open source license, in order for us to be able to share
              them.
            </p>

            <p>
              If you are uncomfortable with this in any way, let us know and we
              will work things out. Note that we’ll disable comments on our
              published videos by default.
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
         

          <SubmitCFP white />
        </Content>
      </Section>
    </Layout>
  );
};

export default CfpPage;
