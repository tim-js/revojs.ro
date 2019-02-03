import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";

export default props => {
  const { allSpeakersJson, speakerImages } = props.data;
  const speakers = allSpeakersJson.edges.map(e => e.node);

  return (
    <Layout>
      <h1>Speakers</h1>

      <ul>
        {speakers.map(speaker => {
          const imageSizes = speakerImages.edges.find(e =>
            speaker.image.includes(e.node.base)
          );

          return (
            <li key={speaker.id}>
              <Link to={`/speakers/${speaker.id}`}>
                <Img fixed={imageSizes.node.image.fixed} alt="" />

                {speaker.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allSpeakersJson {
      edges {
        node {
          id
          name
          image
        }
      }
    }
    speakerImages: allFile(filter: { relativePath: { glob: "speakers/*" } }) {
      edges {
        node {
          base
          image: childImageSharp {
            fixed(width: 200, height: 200, grayscale: true) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
