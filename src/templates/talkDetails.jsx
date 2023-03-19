import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "@components/Layout";
import Talk from "./Talk";

const TalkDetails = (props) => {
  const {
    talksJson: { talk, abstract, speakers },
    allSpeakersJson,
    speakerImages,
  } = props.data;

  const speakersData = speakers.map((speaker) => {
    const speakerDetails = allSpeakersJson.edges.find(
      (e) => e.node.speakerId === speaker.speakerId
    ).node;
    const image = speakerImages.edges.find((e) =>
      speakerDetails.image.includes(e.node.base)
    );
    return { ...speakerDetails, image: image.node };
  });

  const talkData = {
    talk,
    abstract,
    speakers: speakersData,
  };

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>revo.js {talk}</title>
        </Helmet>
      </HelmetProvider>

      <Talk talk={talkData} />
    </Layout>
  );
};

export default TalkDetails;

export const pageQuery = graphql`
  query ($id: String!) {
    talksJson(talkId: { eq: $id }) {
      talkId
      talk
      abstract
      speakers {
        speakerId
      }
    }
    allSpeakersJson {
      edges {
        node {
          speakerId
          firstname
          lastname
          image
          title
          company
          twitter
          bio
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
              transformOptions: { grayscale: false }
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;
