import React from "react";
import { StaticQuery, graphql /*, Link */ } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import Content from "@components/Content";
// import Section from "@components/Section";
import SpeakersListIndex from "@components/SpeakersListIndex";
import Separator2023 from "@components/Separator2023";
import Title2020 from "@components/Title2020";
// import Button from "@components/Button";
import Text from "@components/Text";
// import { PurchaseTicket } from "@components/CTA";

import { getEdition } from "@utils";

import * as styles from "./speakers.module.scss";

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

  // const mc = allSpeakersJson.edges
  //   .map(e => e.node)
  //   .filter(speaker => !speaker.talkId)
  //   .filter(speaker => speaker.edition === edition)
  //   .map(speaker => {
  //     const speakerImage = getImage(speaker.image);

  //     return {
  //       ...speaker,
  //       speakerImage
  //     };
  //   });

  return (
    <Layout title="revo.js Speakers" noFooterSeparation>
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.speakersImage}`}>Speakers</h1>

        <br />

        <div className="subtitle2023">
          More speakers to be announced soon. Keep an eye on this page.
        </div>
      </Header>

      <br />
      <br />
      <br />
      <br />

      <SpeakersListIndex speakers={speakers} edition={edition} />

      <br />
      <br />
      <br />
      <br />

      <Separator2023 />

      {/* <Section style={{ paddingTop: 0 }}>
        <Content centered style={{ textAlign: "center" }}>
          <h2>revo.js 2020 will be hosted by:</h2>
        </Content>
      </Section>

      <SpeakersListIndex speakers={mc} edition={edition} />
      <br />
      <br />
      <br />
      <br /> */}

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

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
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
      render={(data) => <Speakers data={data} {...props} />}
    />
  );
};
