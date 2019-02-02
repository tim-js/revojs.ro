import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SpeakerDetails from "../components/SpeakerDetails";

export default props => {
  // const { name } = props.pageContext;
  return (
    <Layout>
      {/* <h1>Speaker {name}</h1> */}
      <SpeakerDetails speaker={props.data.speakersJson} />
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
