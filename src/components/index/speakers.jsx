import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import SpeakersListIndex from "@components/SpeakersListIndex";
import Subscribe from "@components/Subscribe";
import Button from "@components/Button";

import "./speakers.scss";

const Speakers = ({ data }) => {
  const { allSpeakersJson, speakerImages } = data;
  const speakers = allSpeakersJson.edges
    .map(e => e.node)
    .filter(speaker => speaker.talkId)
    .map(speaker => {
      const speakerImage = getImage(speaker.image);

      return {
        ...speaker,
        speakerImage
      };
    });
  const filteredRandomSpeakers = shuffle(speakers).filter((s, i) => i < 3);

  function shuffle(array) {
    return array.sort(function() {
      return 0.5 - Math.random();
    });
  }

  function getImage(image) {
    return speakerImages.edges.find(e => image.includes(e.node.base));
  }

  return (
    <section id="speakers" className="index-speakers-content">
      <h1 className="index-speakers-title">Speakers</h1>

      <SpeakersListIndex speakers={filteredRandomSpeakers} />

      {/* <p className="index-speakers-more mono">
        <strong>More speakers will be announced soon</strong>
        <br />
        <br />
        <strong className="highlight">Stay Tuned</strong>
      </p> */}

      <div
        className="index-speakers-more"
        style={{ textAlign: "center", marginTop: "5em" }}
      >
        <Link to="/speakers">
          <Button>Meet all the speakers</Button>
        </Link>

        <div style={{ paddingTop: "96px" }} id="subscribe">
          <p style={{ textAlign: "center" }}>
            Subscribe to stay on top the latest changes and revo.news:
          </p>
          <Subscribe centered />
        </div>
      </div>
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
                talkId
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
