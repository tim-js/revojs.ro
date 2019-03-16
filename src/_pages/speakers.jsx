import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Speaker from "../components/Speaker";

export default props => {
  const { allSpeakersJson, speakerImages } = props.data;
  const speakers = allSpeakersJson.edges.map(e => e.node);

  return (
    <Layout>
      <h1>Speakers</h1>

      <ul>
        {speakers.map(speaker => {
          const speakerImage = speakerImages.edges.find(e =>
            speaker.image.includes(e.node.base)
          );

          return (
            <li key={speaker.id}>
              <Link to={`/speakers/${speaker.id}`}>
                <Speaker data={speaker} image={speakerImage} />
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
          firstname
          lastname
          image
        }
      }
    }
    speakerImages: allFile(filter: { relativePath: { glob: "speakers/*" } }) {
      edges {
        node {
          base
          image: childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
