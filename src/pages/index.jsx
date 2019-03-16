import React from "react";
// import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

import Speaker from "../components/Speaker";

import "./index.scss";

export default props => {
  const { allSpeakersJson, speakerImages } = props.data;
  const speakers = allSpeakersJson.edges.map(e => e.node);

  return (
    <>
      <h1 href="/" className="logo">
        <img src="logo-revojs.svg" alt="revo.js" height="64" />
      </h1>

      <main role="main">
        <header className="splash">
          <h2>
            A two-day JavaScript{" "}
            <strong className="highlight">conference</strong>
          </h2>
          <time className="heading" dateTime="2019-10-03">
            Oct.3-4.2019
          </time>
          <span className="location">Timisoara, RO</span>
        </header>

        <div className="content">
          <ul className="speakers-list">
            {speakers.map(speaker => {
              const speakerImageFluid = speakerImages.edges.find(e =>
                speaker.image.includes(e.node.base)
              );

              return (
                <li key={speaker.id}>
                  <Link
                    to={`/speakers/${speaker.id}`}
                    className="speakers-link"
                  >
                    <Speaker data={speaker} image={speakerImageFluid} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <p className="copyright">&copy; revo.js 2019. All rights reserved.</p>
    </>
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
          title
          company
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
