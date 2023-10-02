import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "@components/Layout";
import Talk from "./Talk";

const SpeakerDetails = (props) => {
  const { speakersJson, allTalksJson, file } = props.data;
  const { pageContext } = props;

  const speakerData = {
    ...speakersJson,
    image: file,
  };

  const filteredTalks = allTalksJson.edges
    .map((e) => e.node)
    .filter((talk) => pageContext.talks.includes(talk.talkId));

  const talkData = {
    slots: filteredTalks,
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

export default SpeakerDetails;

export const pageQuery = graphql`
  query ($id: String!, $image: String!) {
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
      talks {
        talkId
      }
    }
    allTalksJson(limit: 1000) {
      edges {
        node {
          talkId
          talk
          abstract
        }
      }
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
