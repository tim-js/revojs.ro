import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Img from "../components/Img";

export default props => {
  const {
    speakersJson: { name, description, image }
  } = props.data;

  return (
    <Layout>
      <Helmet>
        <title>{name}</title>
      </Helmet>

      <h1>{name}</h1>
      <p>{description}</p>
      <Img src={image} alt={name} height="50" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    speakersJson(id: { eq: $id }) {
      name
      description
      image
    }
  }
`;
