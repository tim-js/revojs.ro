import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Img from "gatsby-image";

import Layout from "@components/Layout";

export default props => {
  const {
    speakersJson: { firstname, lastname, description },
    file
  } = props.data;

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>
            {firstname} {lastname}
          </title>
        </Helmet>
      </HelmetProvider>

      <h1>
        {firstname} {lastname}
      </h1>
      <p>{description}</p>
      <Img fixed={file.image.fixed} alt="" />
    </Layout>
  );
};

/*
export const pageQuery = graphql`
  query($id: String!, $image: String!) {
    speakersJson(id: { eq: $id }) {
      firstname
      lastname
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
*/
