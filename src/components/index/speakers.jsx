import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Speaker from "@components/Speaker";

import "./speakers.scss";

const Speakers = ({ data }) => {
  const { allSpeakersJson, speakerImages } = data;
  const speakers = allSpeakersJson.edges.map(e => e.node);

  return (
    <section id="speakers" className="speakers-content">
      <h1 className="speakers-title">Speakers</h1>
      <ul className="speakers-list">
        {speakers.map(speaker => {
          const speakerImageFluid = speakerImages.edges.find(e =>
            speaker.image.includes(e.node.base)
          );

          return (
            <li key={speaker.id}>
              {/* <Link to={`/speakers/${speaker.id}`} className="speakers-link"> */}
              <Speaker data={speaker} image={speakerImageFluid} />
              {/* </Link> */}
            </li>
          );
        })}
      </ul>
      <p className="speakers-more mono">
        <strong>More speakers will be announced soon</strong>
        <br />
        <br />
        <strong className="highlight">Stay Tuned</strong>
      </p>
    </section>
  );
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
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
          speakerImages: allFile(
            filter: { relativePath: { glob: "speakers/*" } }
          ) {
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
      `}
      render={data => <Speakers data={data} {...props} />}
    />
  );
};
