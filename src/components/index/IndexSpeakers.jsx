import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import SpeakersListIndex from "@components/SpeakersListIndex";
import Button from "@components/Button";
import { getEdition } from "@utils";

import "./indexSpeakers.scss";

const Speakers = ({ data }) => {
  const { allSpeakersJson, speakerImages } = data;
  const edition = getEdition();
  const speakers = allSpeakersJson.edges
    .map((e) => e.node)
    .filter((speaker) => speaker.talkId)
    .filter((speaker) => speaker.edition === edition)
    .map((speaker) => {
      const speakerImage = getImage(speaker.image);

      return {
        ...speaker,
        speakerImage,
      };
    });
  const filteredRandomSpeakers = shuffle(speakers).filter((s, i) => i < 3);

  function shuffle(array) {
    return array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  function getImage(image) {
    return speakerImages.edges.find((e) => image.includes(e.node.base));
  }

  return (
    <section id="speakers">
      <h2 className="index-speakers-title revo-font">Speakers</h2>

      <SpeakersListIndex speakers={filteredRandomSpeakers} />

      <div
        className="index-speakers-more"
        style={{ textAlign: "center", marginTop: "5em" }}
      >
        <Link to={`/${edition}/speakers/`}>
          <Button>Meet the speakers</Button>
        </Link>
      </div>
    </section>
  );
};

const IndexSpeakers = (props) => {
  const data = useStaticQuery(graphql`
    {
      allSpeakersJson {
        edges {
          node {
            id
            speakerId
            slug
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
      speakerImages: allFile(filter: { relativePath: { glob: "speakers/*" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 400
                transformOptions: { grayscale: false }
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);

  return <Speakers data={data} {...props} />;
};

export default IndexSpeakers;
