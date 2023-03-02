import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Img from "gatsby-image";

import Button from "@components/Button";
import Layout from "@components/Layout";
import Section from "@components/Section";
import Content from "@components/Content";

// import SpeakerInfo from "./SpeakerInfo";

import { currentEdition } from "@utils";

export default (props) => {
  const { invitationsJson, file } = props.data;
  const lastEdition = currentEdition - 1;

  const speaker = {
    ...invitationsJson,
    image: file,
  };

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>
            revo.js {speaker.firstname} {speaker.lastname} Invitation
          </title>
        </Helmet>
      </HelmetProvider>

      <Section light className={`content-speaker`}>
        <Content centered>
          <figure className="speaker-image-wrapper">
            <div className="speaker-image" key={speaker.speakerId}>
              <Img
                fluid={speaker.image.image.fluid}
                alt={`${speaker.firstname} ${speaker.lastname} photo`}
              />
            </div>
          </figure>
          {/* <SpeakerInfo speaker={speaker} /> */}

          <h1>Dear {speaker.firstname},</h1>
          <p>
            We said it once, but we’ll say it again:{" "}
            <strong>
              we’d be honored to have you on stage at revo.js 2020
            </strong>
            .
          </p>
          <p>
            Your presence as a speaker would help us raise the bar for what’s
            already a successful JavaScript conference.
          </p>
          <p>
            In hope you’ll say <strong>"yes"</strong> to our invitation, here
            are all the key details.
          </p>

          <h2>About the conference</h2>
          <ul className="bullet">
            <li>
              <strong>Two-day, single track</strong>, technology focused
              JavaScript conference;
            </li>
            <li>
              Community driven, <strong>not-for-profit event</strong>;
            </li>
            <li>
              Taking place on <strong>8th-9th October 2020</strong>, in
              Timișoara, Romania;
            </li>
            <li>
              <strong>16+ speakers</strong>, half invited, half selected through
              CFP;
            </li>
            <li>260+ attendees.</li>
          </ul>

          <h2>What we're offering</h2>
          <ul className="bullet">
            <li>
              Full cover of <strong>travel expenses</strong>;
            </li>
            <li>
              Full cover of <strong>accommodation expenses</strong> for the
              whole stay;
            </li>
            <li>Free access to the conference and all related events;</li>
            <li>
              <strong>Speakers' meet &amp; greet dinner</strong>, one day before
              the event;
            </li>
            <li>
              <strong>Saturday field trip</strong> with the core revo.js team,
              after the event.
            </li>
          </ul>
          <a
            href={`mailto:info@revojs.ro?subject=revo.speaker ${speaker.firstname} ${speaker.lastname}`}
          >
            <Button white>Become a revo.speaker</Button>
          </a>

          <h2>Last edition’s vibes</h2>
          <p>
            The first edition of revo.js was beyond our wildest dreams. We
            couldn’t have done it without our{" "}
            <strong>
              <a
                href={`/${lastEdition}/speakers/`}
                className="index-speakers-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                amazing crew of speakers
              </a>
            </strong>
            , who were not only gifted presenters, but also great people.
          </p>

          <p>
            Don’t take our word for it, see for yourself. Our{" "}
            <strong>
              <a
                href={`/${lastEdition}/media/`}
                className="index-speakers-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                media page
              </a>
            </strong>{" "}
            speaks tons in pictures and the after-movie below is an excellent
            start to understand the vibe.
          </p>

          <p>We’d love you to join this growing circle of revo.friends!</p>

          <br />
          <br />

          <iframe
            title="revo.js 2019 After Movie"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/KY9ZVsGnTes"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
          <br />
          <br />
          <br />

          <a
            href={`mailto:info@revojs.ro?subject=revo.speaker ${speaker.firstname} ${speaker.lastname}`}
          >
            <Button white>Join revo.js 2020</Button>
          </a>
        </Content>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!, $image: String!) {
    invitationsJson(inviteId: { eq: $id }) {
      inviteId
      firstname
      lastname
      twitter
      title
      company
      image
    }

    file(relativePath: { eq: $image }) {
      base
      image: childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
