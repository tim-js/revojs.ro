import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import SpeakersListIndex from "@components/SpeakersListIndex";
import Separator from "@components/Separator";
import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";

import { getEdition } from "@utils";

import "./speakers.scss";

const Speakers = (props) => {
  const { allSpeakersJson, speakerImages, allTalksJson } = props.data;
  const edition = getEdition();

  function getTalk(id) {
    return allTalksJson.edges.find((t) => t.node.talkId === id);
  }

  function getImage(image) {
    return speakerImages.edges.find((e) => image.includes(e.node.base));
  }

  const speakers = allSpeakersJson.edges
    .map((e) => e.node)
    .filter((speaker) => speaker.talkId)
    .filter((speaker) => speaker.edition === edition)
    .map((speaker) => {
      const { talk, abstract } = getTalk(speaker.talkId) || {};
      const speakerImage = getImage(speaker.image) || {};

      return {
        ...speaker,
        talk,
        abstract,
        speakerImage,
      };
    });

  const mc = allSpeakersJson.edges
    .map((e) => e.node)
    .filter((speaker) => !speaker.talkId)
    .filter((speaker) => speaker.edition === edition)
    .map((speaker) => {
      const speakerImage = getImage(speaker.image);

      return {
        ...speaker,
        speakerImage,
      };
    });

  return (
    <Layout title="revo.js Speakers">
      <Header type="main" image="speakers-image">
        <h1>Speakers</h1>
        <br />
        <strong className="speakers-important light-faded mono">
          <span className="highlight">
            Meet our international crew of change.
          </span>
          <br />
          <span>{speakers.length} speakers from 12 countries.</span>
        </strong>
      </Header>

      {/* <Section light>
        <Content centered style={{ textAlign: "center" }}>
          <h1>Meet the speakers</h1>
          <br />
          <br />
          <br />
        </Content>
      </Section> */}

      <SpeakersListIndex speakers={speakers} edition={edition} />

      <Separator />

      <Section style={{ paddingTop: 0 }}>
        <Content centered style={{ textAlign: "center" }}>
          <h2>revo.js 2019 was hosted by:</h2>
        </Content>
      </Section>

      <SpeakersListIndex speakers={mc} edition={edition} />

      {/* <ul className="speakers-list">
        {speakers.map((speaker, index) => {
          const speakerImageFluid = speakerImages.edges.find(e =>
            speaker.image.includes(e.node.base)
          );

          const type = (index + offset) % 2 === 0 ? "odd" : "even";

          return (
            <li key={speaker.id}>
              <Link to={`/speakers/${speaker.id}`} className="speakers-link">
                <Speaker
                  data={speaker}
                  image={speakerImageFluid}
                  type={type}
                  first={index === 0}
                />
              </Link>
            </li>
          );
        })}
      </ul> */}

      <Section light>
        <Content centered style={{ textAlign: "center" }}>
          {/* <p>Don't miss your chance to meet these wonderful speakers.</p>
          <br />
          <PurchaseTicket white /> */}
          <Link to={`/${edition}/agenda`}>
            <Button white>View the Agenda</Button>
          </Link>
        </Content>
      </Section>
    </Layout>
  );
};

const SpeakersPage = (props) => {
  const data = useStaticQuery(graphql`
    {
      allSpeakersJson {
        edges {
          node {
            speakerId
            slug
            firstname
            lastname
            image
            title
            company
            talkId
            edition
          }
        }
      }
      allTalksJson {
        edges {
          node {
            talkId
            talk
            abstract
            speakers {
              speakerId
            }
          }
        }
      }
      speakerImages: allFile(filter: { relativePath: { glob: "speakers/*" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 400
                transformOptions: { grayscale: true }
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);
  return <Speakers data={data} {...props} />;
};

export default SpeakersPage;
