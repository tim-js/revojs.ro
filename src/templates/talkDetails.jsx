import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "@components/Layout";
import Talk from "./Talk";

export default props => {
  const {
    talksJson: { talk, abstract, speakers },
    speakerImages
  } = props.data;

  const speakersData = speakers.map(speaker => {
    const image = speakerImages.edges.find(e =>
      speaker.image.includes(e.node.base)
    );
    return { ...speaker, image: image.node };
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
        firstname
        lastname
        bio
        image
        twitter
        title
        company
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
