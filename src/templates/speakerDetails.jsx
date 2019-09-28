import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "@components/Layout";
import Talk from "./Talk";

export default props => {
  const { speakersJson, talksJson, file } = props.data;

  const speakerData = {
    ...speakersJson,
    image: file,
  };

  const talkData = {
    ...talksJson,
    speakers: [speakerData],
  };

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>
            revo.js {speakersJson.firstname} {speakersJson.lastname}
          </title>
        </Helmet>
      </HelmetProvider>

      <Talk talk={talkData} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!, $image: String!, $talkId: String!) {
    speakersJson(id: { eq: $id }) {
      id
      firstname
      lastname
      twitter
      title
      company
      bio
      image
    }

    talksJson(id: { eq: $talkId }) {
      id
      talk
      abstract
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
