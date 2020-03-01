import React from "react";
import { Link } from "gatsby";

import CardSpeaker from "@components/CardSpeaker";

import "./speakersListIndex.scss";
import { getEdition } from "@utils";

export default ({ speakers }) => {
  const edition = getEdition();

  return (
    <ul className="index-speakers-list">
      {speakers.map((speaker, i) => {
        let css = undefined;

        if (i === speakers.length - 1 && i % 2 === 0) {
          css = "last-odd";
        }

        let color = "primary";
        if (edition === 2020) {
          i % 3 === 1 && (color = "accent60");
          i % 3 === 2 && (color = "accent");
        }

        return (
          <li key={speaker.id} className={css}>
            <Link
              to={`/${edition}/speakers/${speaker.slug}`}
              className="index-speakers-link"
            >
              <CardSpeaker data={speaker} color={color} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
