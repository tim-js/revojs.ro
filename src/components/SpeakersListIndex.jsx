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

        return (
          <li key={speaker.id} className={css}>
            <Link
              to={`/${edition}/speakers/${speaker.id}`}
              className="index-speakers-link"
            >
              <CardSpeaker data={speaker} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
