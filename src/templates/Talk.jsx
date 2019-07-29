import React from "react";
import Img from "gatsby-image";

import Section from "@components/Section";
import Content from "@components/Content";
import { PurchaseTicket } from "@components/CTA";

import "./Talk.scss";

function getName(speakers) {
  return speakers.map(speaker => `${speaker.firstname}'s`).join(" and ");
}

function Speaker(props) {
  const { firstname, lastname, title, company, twitter } = props.speaker;
  const companyText = company ? ` at ${company}` : "";

  return (
    <>
      <h1 className="speaker-name">
        {firstname} {lastname}
      </h1>
      <span className="speaker-title">
        {title} {companyText}
      </span>
      <br />
      <a className="speaker-twitter" href={`https://twitter.com/${twitter}`}>
        {twitter}
      </a>
    </>
  );
}

export default props => {
  const { talk, abstract, speakers } = props.talk;

  const multiple = speakers.length > 1 ? " multiple" : "";

  return (
    <Section light className={`content-speaker ${multiple}`}>
      <Content centered>
        <figure className="speaker-image-wrapper">
          {speakers.map(speaker => {
            return (
              <div className="speaker-image" key={speaker.id}>
                <Img
                  fluid={speaker.image.image.fluid}
                  alt={`${speaker.firstname} ${speaker.lastname} photo`}
                />
              </div>
            );
          })}
        </figure>

        {speakers.map(speaker => (
          <Speaker key={speaker.id} speaker={speaker} />
        ))}

        <br />
        <br />

        <h2>{talk}</h2>
        <div dangerouslySetInnerHTML={{ __html: abstract }} />

        {speakers.map(speaker => (
          <React.Fragment key={speaker.id}>
            <h2>About {speaker.firstname}</h2>
            <div dangerouslySetInnerHTML={{ __html: speaker.bio }} />
          </React.Fragment>
        ))}

        <br />
        <br />
        {talk && <h2>Want to see {getName(speakers)} talk?</h2>}
        <br />
        <PurchaseTicket white style={{ margin: 0 }} />
      </Content>
    </Section>
  );
};
