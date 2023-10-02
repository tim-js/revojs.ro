import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Section from "@components/Section";
import Content from "@components/Content";
import Button from "@components/Button";
import { PurchaseTicket } from "@components/CTA";

import SpeakerInfo from "./SpeakerInfo";

import "./Talk.scss";

import { getEdition, currentEdition } from "@utils";

function getName(speakers) {
  return speakers.map((speaker) => `${speaker.firstname}'s`).join(" and ");
}

const TalkPage = (props) => {
  const { slots, speakers } = props.talk;

  const multiple = speakers.length > 1 ? " multiple" : "";

  const getTalkTitle = (talk, index) => {
    if (slots.length > 1) {
      return `${index + 1}. ${talk}`;
    }

    return talk;
  };

  return (
    <Section light className={`content-speaker ${multiple}`}>
      <Content centered>
        <figure className="speaker-image-wrapper">
          {speakers.map((speaker) => {
            return (
              <div className="speaker-image" key={speaker.speakerId}>
                <GatsbyImage
                  image={speaker.image.childImageSharp.gatsbyImageData}
                  alt={`${speaker.firstname} ${speaker.lastname} photo`}
                />
              </div>
            );
          })}
        </figure>
        {speakers.map((speaker) => (
          <SpeakerInfo key={speaker.speakerId} speaker={speaker} />
        ))}

        {slots?.map((slot, index) => (
          <div key={slot.talkId}>
            <br />
            <h2 id={slot.talkId}>{getTalkTitle(slot.talk, index)}</h2>
            <div dangerouslySetInnerHTML={{ __html: slot.abstract }} />
          </div>
        ))}
        {speakers.map((speaker) => (
          <React.Fragment key={speaker.speakerId}>
            <h2>About {speaker.firstname}</h2>
            <div dangerouslySetInnerHTML={{ __html: speaker.bio }} />
            {!!speaker.web && (
              <p>
                <a href={speaker.web} rel="noopener noreferrer">
                  {speaker.web}
                </a>
              </p>
            )}
          </React.Fragment>
        ))}
        {renderCTA(speakers)}
      </Content>
    </Section>
  );

  function renderCTA(speakers) {
    if (currentEdition !== getEdition()) {
      return null;
    }

    return (
      <>
        <br />
        <br />
        <Link to="/agenda">
          <Button white>View the Agenda</Button>
        </Link>

        {/* {talk && <h2>Want to see {getName(speakers)} talk?</h2>}
        <br />
        <PurchaseTicket white style={{ margin: 0 }} /> */}
      </>
    );
  }
};

export default TalkPage;
