import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import SpeakersListIndex from "@components/SpeakersListIndex";
import Button from "@components/Button";
import { getEdition } from "@utils";

import "./indexSpeakers.scss";

const Speakers = ({ data }) => {
  const { allSpeakersJson, speakerImages } = data;
  const edition = getEdition();
  const speakers = allSpeakersJson.edges
    .map(e => e.node)
    // .filter(speaker => speaker.talkId)
    .filter(speaker => speaker.edition === edition)
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
        <Link to={`/${edition}/speakers`}>
          <Button>Meet all the speakers</Button>
        </Link>
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
                edition
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
