import React from "react";
import { graphql } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Img from "gatsby-image";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Content from "@components/Content";

import SpeakerInfo from "./SpeakerInfo";

export default props => {
  const { invitationsJson, file } = props.data;

  const speaker = {
    ...invitationsJson,
    image: file
  };

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>
            revo.js {speaker.firstname} {speaker.lastname}
          </title>
        </Helmet>
      </HelmetProvider>

      <Section light className={`content-speaker`}>
        <Content centered>
          <figure className="speaker-image-wrapper">
            <div className="speaker-image" key={speaker.id}>
              <Img
                fluid={speaker.image.image.fluid}
                alt={`${speaker.firstname} ${speaker.lastname} photo`}
              />
            </div>
          </figure>
          <SpeakerInfo speaker={speaker} />

          <h2>Dear {speaker.firstname},</h2>
          <p>We are officially inviting you to be a speaker at revo.js 2020</p>

          <h2>revo.js 2019 After Movie</h2>
          <iframe
            title="revo.js 2019 After Movie"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/KY9ZVsGnTes"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </Content>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!, $image: String!) {
    invitationsJson(id: { eq: $id }) {
      id
      firstname
      lastname
      twitter
      title
      company
      image
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
