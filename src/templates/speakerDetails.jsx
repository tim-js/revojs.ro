import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Img from "gatsby-image";

import Layout from "@components/Layout";
import Content from "@components/Content";
import Section from "@components/Section";
import { PurchaseTicket } from "@components/CTA";

import "./speakerDetails.scss";

export default props => {
  const {
    speakersJson: {
      firstname,
      lastname,
      description,
      talk,
      abstract,
      twitter,
      title,
      company
    },
    file
  } = props.data;

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>
            revo.js {firstname} {lastname}
          </title>
        </Helmet>
      </HelmetProvider>

      <Section light className="content-speaker">
        <Content centered>
          <figure className="speaker-image">
            <Img fluid={file.image.fluid} alt="" />
          </figure>
          <h1>
            {firstname} {lastname}
          </h1>
          <br />
          <span className="speaker-title">
            {title} at {company}
          </span>
          <br />
          <a
            className="speaker-twitter"
            href={`https://twitter.com/${twitter}`}
          >
            @{twitter}
          </a>
          <br />
          <br />

          <h2>{talk}</h2>
          <div dangerouslySetInnerHTML={{ __html: abstract }} />

          <h2>About {firstname}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />

          <h2>Want to see {firstname}'s talk?</h2>
          <PurchaseTicket white style={{ margin: 0 }} />
        </Content>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!, $image: String!) {
    speakersJson(id: { eq: $id }) {
      firstname
      lastname
      twitter
      title
      company
      description
      image
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
