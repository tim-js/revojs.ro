import React from "react";
import { Link } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";

export default () => {
  return (
    <Layout title="About revo.js">
      <Header centered type="secondary">
        <h1 className="about-title">About revo.js</h1>
      </Header>

      <Section light className="blog-post">
        <Content centered>
          <section>
            <h2>What’s revo.js all about?</h2>

            <p>
              revo.js is a not-for-profit event taking place between the 3rd and
              4th of October 2019 in Timișoara, Romania. The conference aims to
              bring JavaScript enthusiasts two full days of tech-focused talks,
              community networking and thought-provoking ideas meant to stir up
              change, the only const there is.
            </p>

            <ul className="bullet">
              <li>2 full days</li>
              <li>single track conference</li>
              <li>community driven, not-for-profit event</li>
              <li>16+ international speakers</li>
              <li>300 participants</li>
            </ul>
          </section>
          <p>
            When we talk about revo.js, we like to describe it in 3 short
            phrases: <br />
            <strong>
              Technology focused. Community driven. JavaScript conference.
            </strong>
          </p>
          <p>
            Also, you might have seen our tagline here and there: <br />
            <strong>Change is the only const</strong>
          </p>
          <hr />
          <p>
            In the following paragraphs, we would like to motivate the above
            descriptions by sharing with you:
          </p>
          <ol>
            <li>
              <a href="#how-did-revojs-come-to-be">
                How did revo.js come to be?
              </a>
            </li>
            <li>
              <a href="#why-are-we-organizing-this-conference">
                Why are we organizing this conference?
              </a>
            </li>

            <li>
              <a href="#what-topics-are-we-interested-in">
                What topics are we interested in?
              </a>
            </li>
            <li>
              <a href="#how-do-we-plan-to-cover-the-costs">
                How do we plan to cover the costs?
              </a>
            </li>
            <li>
              <a href="#what-type-of-talks-and-speakers-are-we-looking-for">
                What type of talks and speakers are we looking for?
              </a>
            </li>
            <li>
              <a href="#what-does-the-tagline-mean">
                What does the tagline mean?
              </a>
            </li>
            <li>
              <a href="#why-revojs">Why revo.js?</a>
            </li>
          </ol>

          <section>
            <h2 id="how-did-revojs-come-to-be">How did revo.js come to be?</h2>

            <p>
              Ever since 2013 we've been organizing{" "}
              <a
                href="https://timjs.ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                tim.js
              </a>
              , a monthly JavaScript meetup in Timisoara. We've been tackling
              the idea of organizing a bigger event for more than 3 years now,
              but we knew that it would take a huge amount of effort, and there
              was nobody to take the lead.
            </p>

            <p>
              What actually triggered us to talk seriously about the conference
              was a series of 3 factors:
            </p>

            <ol>
              <li>
                We recognized <strong>the need</strong> inside our community, as
                more and more members kept asking for such an event.
              </li>
              <li>
                We were <strong>inspired by</strong> by the{" "}
                <a
                  href="https://jsheroes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JSHeroes
                </a>{" "}
                organizers and their attitude towards open-source conferences;
              </li>
              <li>
                We received <strong>a helping hand</strong> from our friends at{" "}
                <a
                  href="https://banatit.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BanatIT
                </a>
                , who have a lot of experience in organizing various tech
                events.
              </li>
            </ol>

            <hr />

            <p>
              We all wanted a local JavaScript conference, so instead of just
              waiting for somebody to organize it, took the matter in our own
              hands.
            </p>
          </section>

          <section>
            <h2 id="why-are-we-organizing-this-conference">
              Why are we organizing this conference?
            </h2>

            <p>You might ask yourselves:</p>
            <blockquote>
              Aren't there enough JavaScript conferences out there?
            </blockquote>

            <p>
              According to <strong>confs.tech</strong>, there are between 1 and
              5{" "}
              <a
                href="https://confs.tech/javascript"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript conferences
              </a>{" "}
              in the world every single week. So, from a global point of view,
              the answer is{" "}
              <strong>
                <em>
                  "No, there is no need for yet another JavaScript conference"
                </em>
              </strong>
              .
            </p>
            <p>
              But the <strong>local community</strong> is in great need of this.
              Not many developers can afford to attend conferences in other
              countries.
            </p>
            <p>
              So why not bring the speakers here in Timisoara, instead? This
              way, many more people can benefit and attend the event.
            </p>
          </section>

          <section>
            <h2 id="what-topics-are-we-interested-in">
              What topics are we interested in?
            </h2>
            <p>
              revo.js is a <strong>JavaScript conference</strong> dedicated to
              the entire JS ecosystem. This includes but is not limited to:
            </p>
            <ul>
              <li>
                <strong>Web Standards</strong>: DOM and Browser APIs,
                ECMAScript, WebAssembly, Accessibility, etc;
              </li>
              <li>
                <strong>Node.js</strong>: Server-side JS, Package management,
                Databases, Serverless, etc;
              </li>
              <li>
                <strong>Frameworks &amp; Libraries</strong> or any utilities
                that may help during development;
              </li>
              <li>
                <strong>Graphics</strong>: CSS, Animations, 2D &amp; 3D, SVG,
                Canvas, WebGL, VR, AR;
              </li>
              <li>
                <strong>Tools</strong> for better Developer eXperience;
              </li>
              <li>
                <strong>Code Design</strong>: Best practices, Design patterns
                and high-level architecture;
              </li>
              <li>
                <strong>Hardware</strong>: IoT, House appliances, Crazy hacks;
              </li>
              <li>
                <strong>Other topics related to JS</strong>: Security,
                Performance, Testing, Deployment, etc.
              </li>
            </ul>
            <p>
              We intend o have a maximum of 2 talks in the same topic category.
            </p>
            <hr />
            <p>
              We also plan on tackling some non-technical topics, if they are at
              least tangential to JavaScript, such as:
            </p>
            <ul>
              <li>open source, communities; </li>
              <li>development culture, soft skills; </li>
              <li>teaching, learning, etc.</li>
            </ul>
            <p>
              However, these topics will not cover more than 20% of the talks.
            </p>
            <hr />

            <p>
              Generally speaking, we are not looking for topics regarding
              management, leadership or general software development not related
              to JavaScript, Front-end or UI development. It would dilute our
              scope and we believe there are other events that do a better job
              at specifically tackling these areas.
            </p>
          </section>
          <section>
            <h2 id="how-do-we-plan-to-cover-the-costs">
              How do we plan to cover the costs?
            </h2>
            <p>
              revo.js is a <strong>community driven</strong> event. What does
              this mean and how does this make it different from other types of
              conferences?
            </p>
            <ul>
              <li>
                We are not looking to make a profit, so the tickets' prices are
                low.
              </li>
              <li>
                We put a lot of effort into it because our only purpose is to
                serve the entire community and deliver a great event for
                everybody: <strong>attendees</strong>, <strong>speakers</strong>
                , <strong>sponsors</strong> and <strong>partners</strong>.
              </li>
            </ul>
            <h3>Let's talk money</h3>
            <p>
              Our initial estimated budget was 60K EUR. We expected to raise 40K
              from sponsors and 20K from selling tickets.
            </p>
            <p>
              In case we will make a profit out of the event, we will redirect
              it in causes that will benefit the entire community. Some examples
              are:
            </p>
            <ul>
              <li>
                <strong>donate part of it to various causes</strong>: open
                source, diversity support, or anybody who could use money more
                than we do;
              </li>
              <li>
                <strong>make the local JavaScript meetup even better</strong>,
                by bringing speakers from outside Timisoara;
              </li>
              <li>invest it into a future edition.</li>
            </ul>
            <p>
              We want to be as transparent as possible and thus we'll keep you
              updated in case the conference makes a profit. At that given
              moment, we'll tell you more about the exact causes the extra money
              will be used for.
            </p>
          </section>

          <section>
            <h2 id="what-type-of-talks-and-speakers-are-we-looking-for">
              What type of talks and speakers are we looking for?
            </h2>
            <p>
              revo.js is <strong>Technology focused</strong> so you should
              expect the vast majority of talks to be technical. They should
              either <strong>teach</strong>, <strong>inspire</strong> and/or{" "}
              <strong>entertain</strong>. The ideal talk is a combination of all
              3.
            </p>

            <section>
              <h3>Teach</h3>
              <p>
                We all want to learn something new when we attend a conference,
                whether it's:
              </p>
              <ul>
                <li>a fundamental language feature; </li>
                <li>a new standard API; </li>
                <li>how a particular concept works; </li>
                <li>a new library that you've worked on;</li>
                <li>valuable tips &amp; tricks;</li>
                <li>actionable pieces of advice;</li>
                <li>
                  something we can apply to our projects the very next day.
                </li>
              </ul>
            </section>

            <section>
              <h3>Inspire</h3>
              <p>
                From time to time, we all need some inspiration and motivation,
                such as:
              </p>
              <ul>
                <li>
                  getting a new perspective or a mind shift that we never
                  considered before;
                </li>
                <li>
                  finding out about out-of-the-box applications using everyday
                  tools;
                </li>
                <li>witnessing creative usage of web technologies.</li>
              </ul>
            </section>
            <section>
              <h3>Entertain</h3>
              <p>
                We all want to have a good time, smile or even laugh our heads
                off, so any talk that can mix usefulness with entertainment,
                will be prioritized.
              </p>
            </section>

            <hr />

            <p>
              The <strong>types of speakers</strong> you should expect to see on
              stage vary from:
            </p>
            <ul>
              <li>people with vast experience in certain areas;</li>
              <li>developers passionate about specific topics; </li>
              <li>open source maintainers; </li>
              <li>advocates for various technologies and tools;</li>{" "}
              <li>technical speakers with a sense of humor.</li>
            </ul>

            <hr />

            <p>
              Another important aspect is the <strong>delivery</strong>, so
              speakers are expected to have prior stage experience or at least a
              lot of confidence.
            </p>
            <p>
              This doesn't mean that we selected only speakers who have attended
              international conferences. We accepted various types of speakers
              and even speakers who have recorded themselves at home in order to
              show us their delivery skills.
            </p>
            <p>We looked for speakers that are:</p>
            <ul>
              <li>comfortable in front of a crowd;</li>
              <li>coherent;</li>
              <li>funny.</li>
            </ul>

            <hr />

            <p>
              What are we trying to <strong>avoid</strong>?
            </p>
            <ul>
              <li>
                <em>"Intro to framework/library X"</em> type of talks. They are
                more suitable for meetups and we plan on having workshops that
                will cover such content.
              </li>
              <li>
                Subjects that have been presented many times before at other
                conferences.
              </li>
              <li>
                Topics that are highly focused on a very particular problem,
                that very few attendees might benefit from.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="what-does-the-tagline-mean">What does the tagline mean?</h2>
            <p>
              JavaScript is currently during its teenage years, so it's very
              unstable, dynamic and energetic. That's not going to change any
              time soon.
            </p>
            <p>
              So, instead of being constantly frustrated because of this, we
              should all accept the fact that{" "}
              <strong>
                things will <em>change</em>
              </strong>
              . Resistance is futile.
            </p>
            <hr />
            <p>
              Also, <strong>change</strong> is beneficial. We, as developers,
              are constantly changing. Whenever we talk to a new colleague or
              learn a new language/framework/technology, we change bit by bit.
              Every project we work on and every team we work with will change
              the way we think, behave and write code.
            </p>
            <p>
              It's only because of <em>change</em> that we got here today, not
              using{" "}
              <strong>
                <code>GOTO</code>
              </strong>{" "}
              statements anymore and building mobile apps using JavaScript.
            </p>
            <hr />
            <blockquote>
              Change is not bad. Change means evolution. <br />
              And it's the only <strong>const</strong>.
            </blockquote>
          </section>

          <section>
            <h2 id="why-revojs">Why revo.js?</h2>
            <p>
              As you might have guessed, revo.js is short for{" "}
              <strong>JavaScript Revolution</strong>.
            </p>

            <section>
              <h3>Why "Revolution"?</h3>{" "}
              <p>
                Timisoara is known as the city where the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Romanian_Revolution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the 1989 Romanian Revolution started
                </a>{" "}
                started. It's something that we're proud of and makes us
                identify ourselves with the concept of{" "}
                <strong>changing something bad into something good</strong>.
              </p>
            </section>

            <section>
              <h3>Ok, but why "revo"?</h3>
              <p>
                Here in Timisoara, we like to shorten (some) words by
                pronouncing only the first 2 syllables. For instance "Timi",
                instead of Timisoara.
              </p>
            </section>

            <section>
              <h3>So, what are we planning to revolutionize?</h3>
              <p>
                We'll take things one step at a time. We believe that all
                revolutions start small and are very isolated in the beginning.
                But if their cause is just, they will naturally expand and grow.
              </p>
              <p>
                This first edition is mostly an experiment for us, as we’re
                trying to understand what it takes to organize such an event. We
                have experience attending conferences both as participants and
                as speakers, so we're trying to create an eclectic event by
                implementing the good things we came across and avoiding the not
                so good things.
              </p>
              <p>
                We also focused a lot on{" "}
                <Link to="/blog/conference-content-accessibility">
                  <strong>accessibility</strong>
                </Link>{" "}
                mainly because Romania still has a long way to go when it comes
                to it.
              </p>
            </section>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
