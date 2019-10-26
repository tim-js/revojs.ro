import React from "react";
import { StaticQuery, graphql /*, Link*/ } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import Content from "@components/Content";
// import Section from "@components/Section";
// import SpeakersListIndex from "@components/SpeakersListIndex";
// import Separator from "@components/Separator";
// import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";

// import { getEdition } from "@utils";

import "./speakers.scss";

const Speakers = props => {
  // const { allSpeakersJson, speakerImages, allTalksJson } = props.data;
  // const edition = getEdition();

  // function getTalk(id) {
  //   return allTalksJson.edges.find(t => t.node.id === id);
  // }

  // function getImage(image) {
  //   return speakerImages.edges.find(e => image.includes(e.node.base));
  // }

  // const speakers = allSpeakersJson.edges
  //   .map(e => e.node)
  //   .filter(speaker => speaker.talkId)
  //   .filter(speaker => speaker.edition === edition)
  //   .map(speaker => {
  //     const { talk, abstract } = getTalk(speaker.talkId) || {};
  //     const speakerImage = getImage(speaker.image) || {};

  //     return {
  //       ...speaker,
  //       talk,
  //       abstract,
  //       speakerImage,
  //     };
  //   });

  // const mc = allSpeakersJson.edges
  //   .map(e => e.node)
  //   .filter(speaker => !speaker.talkId)
  //   .map(speaker => {
  //     const speakerImage = getImage(speaker.image);

  //     return {
  //       ...speaker,
  //       speakerImage,
  //     };
  //   });

  return (
    <Layout title="revo.js Speakers" noFooterSeparation>
      <Header type="main" image="speakers-image">
        <h1>Speakers</h1>
        <br />
        <strong className="speakers-important light-faded mono">
          {/* <span className="highlight">
            Meet our international crew of change.
          </span>
          <br />
          <span>{speakers.length} speakers from 12 countries.</span> */}
          <span>
            Speakers will be annouced soon. <br /> Stay tuned...
          </span>
        </strong>
      </Header>

      {/* <SpeakersListIndex speakers={speakers} edition={edition} /> */}

      {/* <Separator />

      <Section style={{ paddingTop: 0 }}>
        <Content centered style={{ textAlign: "center" }}>
          <h2>revo.js 2020 will be hosted by:</h2>
        </Content>
      </Section>

      <SpeakersListIndex speakers={mc} edition={edition} /> */}

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
                  fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
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
