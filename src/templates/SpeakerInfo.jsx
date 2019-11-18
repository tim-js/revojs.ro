import React from "react";

import "./SpeakerInfo.scss";

export default function Speaker(props) {
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
      {twitter && (
        <a
          className="speaker-twitter"
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitter}
        </a>
      )}
    </>
  );
}
