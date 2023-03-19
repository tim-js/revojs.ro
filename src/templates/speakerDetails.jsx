import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "@components/Layout";
import Talk from "./Talk";

export default (props) => {
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
  query ($id: String!, $image: String!, $talkId: String!) {
    speakersJson(speakerId: { eq: $id }) {
      speakerId
      firstname
      lastname
      twitter
      mastodon
      web
      title
      company
      bio
      image
    }
    talksJson(talkId: { eq: $talkId }) {
      talkId
      talk
      abstract
    }
    file(relativePath: { eq: $image }) {
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
`;
