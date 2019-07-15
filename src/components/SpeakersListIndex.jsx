import React from "react";
import { Link } from "gatsby";

import SpeakerIndex from "@components/SpeakerIndex";

import "./speakersListIndex.scss";

export default ({ speakers, images }) => {
  return (
    <ul className="index-speakers-list">
      {speakers.map((speaker, i) => {
        const speakerImageFluid = images.edges.find(e =>
          speaker.image.includes(e.node.base)
        );

        let css = undefined;
        if (i === speakers.length - 1 && i % 2 === 0) {
          css = "last-odd";
        }

        return (
          <li key={speaker.id} className={css}>
            <Link
              to={`/speakers/${speaker.id}`}
              className="index-speakers-link"
            >
              <SpeakerIndex data={speaker} image={speakerImageFluid} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
