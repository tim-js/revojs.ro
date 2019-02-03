import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";

import Layout from "../components/Layout";

export default props => {
  const {
    speakersJson: { name, description },
    file
  } = props.data;

  return (
    <Layout>
      <Helmet>
        <title>{name}</title>
      </Helmet>

      <h1>{name}</h1>
      <p>{description}</p>
      <Img fixed={file.image.fixed} alt="" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!, $image: String!) {
    speakersJson(id: { eq: $id }) {
      name
      description
      image
    }
    file(relativePath: { eq: $image }) {
      base
      image: childImageSharp {
        fixed(width: 400, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
