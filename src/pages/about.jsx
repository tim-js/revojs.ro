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
              4th of October 2019 at Consiliul Județean Timiș. The conference
              aims to bring JavaScript enthusiasts two full days of tech-focused
              talks, community networking and thought-provoking ideas meant to
              stir up change, the only const there is.
            </p>

            <ul className="bullet">
              <li>2 days, single track conference</li>
              <li>community driven, not-for-profit event</li>
              <li>16+ international speakers</li>
              <li>300 participants</li>
            </ul>
          </section>
          <p>
            When we talk about revo.js, we like to describe it in 3 short
            sentences: <br />
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
            In the next paragraphs, we would like to motivate the above
            descriptions by sharing with you:
          </p>
          <ol>
            <li>
              <a href="#how-did-revojs-came-to-be">
                How did revo.js came to be?
              </a>
            </li>
            <li>
              <a href="#why-do-we-organize-this-conference">
                Why do we organize this conference?
              </a>
            </li>

            <li>
              <a href="#what-topics-are-we-interested-in">
                What topics are we interested in?
              </a>
            </li>
            <li>
              <a href="#how-do-we-plan-to-cover-all-the-costs">
                How do we plan to cover all the costs?
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
              <a href="#where-does-revojs-come-from">
                Where does revo.js come from?
              </a>
            </li>
          </ol>
          <section>
            <h2 id="how-did-revojs-came-to-be">How did revo.js came to be?</h2>

            <p>
              Since 2013 we've been organizing{" "}
              <a
                href="https://timjs.ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                tim.js
              </a>
              , a monthly JavaScript meetup in Timisoara. We've been tackling
              with the idea of having a bigger event for more than 3 years, but
              we knew that it takes a huge amount of effort to organize a
              conference, and there was nobody to take the lead.
            </p>

            <p>
              What actually triggered us to talk seriously about the conference
              was a series of 3 factors:
            </p>

            <ul>
              <li>
                we saw <strong>the need</strong> from our community members, who
                were asking for such an event;
              </li>
              <li>
                we got <strong>the motivation</strong> from the organizers of{" "}
                <a
                  href="https://jsheroes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JSHeroes
                </a>{" "}
                and their attitude towards open-source conferences;
              </li>
              <li>
                we've received <strong>a helping hand</strong> from our friends
                from{" "}
                <a
                  href="https://banatit.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BanatIT
                </a>
                , which have a lot of experience in organizing various tech
                events;
              </li>
            </ul>

            <hr />

            <p>
              We all wanted a local JavaScript conference, so instead of just
              waiting for somebody to organize it, we said that maybe it's up to
              us to do it.
            </p>
          </section>
          <section>
            <h2 id="why-do-we-organize-this-conference">
              Why do we organize this conference?
            </h2>

            <p>You might be thinking:</p>
            <blockquote>Aren't there enough JavaScript conferences?</blockquote>

            <p>
              If you look it up, there are between 1 and 5{" "}
              <a
                href="https://confs.tech/javascript"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript conferences
              </a>{" "}
              in the world every single week. So, globally speaking, the simple
              answer is <strong>No</strong>. There isn't a need for another
              JavaScript conference.
            </p>
            <p>
              But in the <strong>local community</strong> the need is huge. Not
              many developers afford to attend conferences in other countries.
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
                that help you during development;
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
              We intend not to have more than 2 talks from the same topic
              category.
            </p>
            <hr />
            <p>
              We also plan to touch on other non-technical topics, if they are
              at least tangential to JavaScript, such as:
            </p>
            <ul>
              <li>open source, communities; </li>
              <li>development culture, soft skills; </li>
              <li>teaching, learning, etc;</li>
            </ul>
            <p>
              However, these topics would not cover more than 20% of the talks.
            </p>
            <hr />

            <p>
              Generally speaking, we are not looking for topics regarding
              management, leadership or general software development not related
              to JavaScript, Front-end or UI development. It would spread our
              scope too much, plus there are plenty other events dedicated to
              these topics.
            </p>
          </section>
          <section>
            <h2 id="how-do-we-plan-to-cover-all-the-costs">
              How do we plan to cover all the costs?
            </h2>

            <p>
              revo.js is also a <strong>Community driven</strong> event. What
              does this mean and how is this different from other types of
              conferences?
            </p>
            <ul>
              <li>
                we are not looking to make a profit, so the ticket prices are
                low;
              </li>
              <li>
                we put a lot of effort into it because our only purpose is to
                make a great event for everybody, <strong>attendees</strong>,{" "}
                <strong>speakers</strong>, <strong>sponsors</strong> and{" "}
                <strong>partners</strong>;
              </li>
            </ul>

            <hr />
            <p>
              Our initial estimated budget was 60K EUR. We expected to raise 40K
              from sponsors and 20K from tickets. In case we would make a profit
              after the event, there are so many things to do with the extra
              money:
            </p>
            <ul>
              <li>
                donate part of it for various causes: open source, diversity
                support, or anybody who could use money more than we do;
              </li>
              <li>
                make the local JavaScript meetup even better, by bringing
                speakers from outside Timisoara;
              </li>
              <li>invest it into a future edition.</li>
            </ul>
          </section>
          <section>
            <h2 id="what-type-of-talks-and-speakers-are-we-looking-for">
              What type of talks and speakers are we looking for?
            </h2>
            <p>
              revo.js is <strong>Technology focused</strong> so you should
              expect the vast majority of talks to be technical. They should
              either <strong>teach</strong>, <strong>inspire</strong> and/or{" "}
              <strong>entertain</strong>. If all 3 apply, then that's the ideal
              talk.
            </p>
            <section>
              <h3>Teach</h3>
              <p>
                We all want to learn something new when we attend a conference,
                weather it's:
              </p>
              <ul>
                <li>a fundamental language feature; </li>
                <li>an exotic utility library; </li>
                <li>how a particular concept works; </li>
                <li>
                  a new library that you've worked on and the problems that it
                  solves;
                </li>
                <li>
                  something that I can apply on my project the very next day.
                </li>
              </ul>
            </section>
            <section>
              <h3>Inspire</h3>
              <p>
                We all want to be inspired and motivated in many different ways,
                such as:
              </p>
              <ul>
                <li>
                  presenting a new perspective or a mind shift that you never
                  thought before;{" "}
                </li>
                <li>out-of-the-box applications using everyday tools; </li>
                <li>creative usage of web technologies;</li>
              </ul>
            </section>
            <section>
              <h3>Entertain</h3>
              <p>
                We all want to have a good time, smile or even laugh our heads
                off, so any talk that can mix usefulness with entertainment,
                will have a priority.
              </p>
            </section>
            <hr />
            <p>
              The types of <strong>speakers</strong> you should expect vary
              from:
            </p>
            <ul>
              <li>
                people with vast experience in the topic they will talk about;{" "}
              </li>
              <li>developers passionate about a specific topic; </li>
              <li>open source maintainers; </li>
              <li>advocates for various technologies and tools;</li>{" "}
              <li>entertaining speakers.</li>
            </ul>
            <hr />
            <p>
              Another important aspect is the <strong>delivery</strong>, so
              speakers are expected to have prior stage experience. This doesn't
              mean you have to have attended all the big conferences around the
              world. You could record yourself at work or even in your own
              apartment.
            </p>
            <p>We are looking for speakers that are either:</p>
            <ul>
              <li>comfortable in front of a crowd;</li>
              <li>coherent;</li>
              <li>funny;</li>
            </ul>

            <hr />

            <p>
              What we try to <strong>avoid</strong>?
            </p>
            <ul>
              <li>
                <em>"Intro to framework/library X"</em> type of talks. They are
                more suited for meetups and we plan to have workshops that would
                cover such content;
              </li>
              <li>
                Subjects that have been presented many times before at other
                conferences;
              </li>
              <li>
                Highly focused topics on a very particular problem that very few
                attendees might benefit from.
              </li>
            </ul>
          </section>
          <section>
            <h2 id="what-does-the-tagline-meanZ">
              What does the tagline mean?
            </h2>
            <p>
              JavaScript is currently during its teenage, so it's very unstable,
              dynamic and energetic. That's not gonna change any time soon.
            </p>
            <p>
              So, instead of complaining about this, let's accept the fact that{" "}
              <strong>
                things will <em>change</em>
              </strong>
              . Resistance is futile and we cannot fight its nature.
            </p>
            <hr />
            <p>
              Also, <strong>change</strong> is benefic. We, as developers, are
              constantly changing. Whenever you talk to a new colleague, learn a
              new language, framework or technology, you change bit by bit.
              Every project you work on and every team you work with will change
              the way you think, behave and write code.
            </p>
            <p>
              It's only because of "change" that we got here today, where we
              don't use goto statements anymore and build mobile apps using
              JavaScript.
            </p>
            <hr />
            <blockquote>
              Change is not bad. Change means evolution. <br />
              And it's the only <strong>const</strong>.
            </blockquote>
          </section>
          <section>
            <h2 id="where-does-revojs-come-from">
              Where does revo.js come from?
            </h2>
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
                  Romanian Communism Revolution
                </a>{" "}
                started. It's something that we're proud of and would like to
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
              <section>
                <h3>So, what are you planning to revolutionize?</h3>
              </section>
              <p>
                Actually not too much. We believe that all revolutions start
                small and very isolated. But if their cause is just, they will
                naturally expand and grow.
              </p>
              <p>
                This first edition is mostly an experiment for us, to understand
                what it takes to organize such an event. We have experience
                attending conferences both as participants and as speakers, so
                we try to create an eclectic event by taking all the good things
                from other conferences and avoid the things that should be
                avoided.
              </p>
              <p>
                However, we put a lot of focus on{" "}
                <Link to="/blog/conference-content-accessibility">
                  <strong>accessibility</strong>
                </Link>{" "}
                mainly because Romania lacks of it and we need to change that.
              </p>
            </section>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
