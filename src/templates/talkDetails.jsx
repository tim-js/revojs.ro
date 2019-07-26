import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "@components/Layout";
import Talk from "./Talk";

export default props => {
  const {
    talksJson: { talk, abstract, speakers },
    allSpeakersJson,
    speakerImages
  } = props.data;

  const speakersData = speakers.map(speaker => {
    const speakerDetails = allSpeakersJson.edges.find(
      e => e.node.id === speaker.id
    ).node;
    const image = speakerImages.edges.find(e =>
      speakerDetails.image.includes(e.node.base)
    );
    return { ...speakerDetails, image: image.node };
  });

  const talkData = {
    talk,
    abstract,
    speakers: speakersData
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

export const pageQuery = graphql`
  query($id: String!) {
    talksJson(id: { eq: $id }) {
      id
      talk
      abstract
      speakers {
        id
      }
    }
    allSpeakersJson {
      edges {
        node {
          id
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
          image: childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
