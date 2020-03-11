import React from "react";
import { StaticQuery, graphql /*, Link */ } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import SpeakersListIndex from "@components/SpeakersListIndex";
import Separator2020 from "@components/Separator2020";
import Title2020 from "@components/Title2020";
// import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";

import { getEdition } from "@utils";

import "./speakers.scss";

const Speakers = props => {
  const { allSpeakersJson, speakerImages, allTalksJson } = props.data;
  const edition = getEdition();

  function getTalk(id) {
    return allTalksJson.edges.find(t => t.node.id === id);
  }

  function getImage(image) {
    return speakerImages.edges.find(e => image.includes(e.node.base));
  }

  const speakers = allSpeakersJson.edges
    .map(e => e.node)
    .filter(speaker => speaker.talkId)
    .filter(speaker => speaker.edition === edition)
    .map(speaker => {
      const { talk, abstract } = getTalk(speaker.talkId) || {};
      const speakerImage = getImage(speaker.image) || {};

      return {
        ...speaker,
        talk,
        abstract,
        speakerImage
      };
    });

  const mc = allSpeakersJson.edges
    .map(e => e.node)
    .filter(speaker => !speaker.talkId)
    .filter(speaker => speaker.edition === edition)
    .map(speaker => {
      const speakerImage = getImage(speaker.image);

      return {
        ...speaker,
        speakerImage
      };
    });

  return (
    <Layout title="revo.js Speakers" noFooterSeparation>
      <Header type="main" centered>
        <Title2020>speakers</Title2020>

        <div className="subtitle2020">
          Meet part of our international crew of change. <br />
          More speakers will be annouced soon. <br />
          Stay tuned...
          <br />
        </div>
      </Header>

      <SpeakersListIndex speakers={speakers} edition={edition} />

      <br />
      <br />
      <Separator2020 />

      <Section style={{ paddingTop: 0 }}>
        <Content centered style={{ textAlign: "center" }}>
          <h2>revo.js 2020 will be hosted by:</h2>
        </Content>
      </Section>

      <SpeakersListIndex speakers={mc} edition={edition} />
      <br />
      <br />
      <br />
      <br />

      {/* <Section light>
        <Content centered style={{ textAlign: "center" }}>
          <p>Don't miss your chance to meet these wonderful speakers.</p>
          <br />
          <PurchaseTicket white />
          <Link to="/agenda">
            <Button white>View the Agenda</Button>
          </Link>
        </Content>
      </Section> */}
    </Layout>
  );
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSpeakersJson {
            edges {
              node {
                id
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
                id
                talk
                abstract
                speakers {
                  id
                }
              }
            }
          }
          speakerImages: allFile(
            filter: { relativePath: { glob: "speakers/*" } }
          ) {
            edges {
              node {
                base
                image: childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 600, grayscale: false) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <Speakers data={data} {...props} />}
    />
  );
};
