import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import SpeakerDetails from "../components/SpeakerDetails";

export default props => {
  const { speakersJson } = props.data;

  return (
    <Layout>
      <Helmet>
        <title>{speakersJson.name}</title>
      </Helmet>
      <SpeakerDetails speaker={speakersJson} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    speakersJson(id: { eq: $id }) {
      ...SpeakerDetail
    }
  }
`;
