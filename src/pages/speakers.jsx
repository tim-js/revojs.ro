import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Img from "../components/Img";

export default props => {
  const { allSpeakersJson } = props.data;
  const speakers = allSpeakersJson.edges.map(e => e.node);

  return (
    <Layout>
      <h1>Speakers</h1>

      <ul>
        {speakers.map(speaker => (
          <li key={speaker.id}>
            <Link to={`/speakers/${speaker.id}`}>
              <Img src={speaker.image} alt={speaker.name} height="50" />

              {speaker.name}
            </Link>
          </li>
        ))}
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
  }
`;
