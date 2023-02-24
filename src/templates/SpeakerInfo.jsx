import React from "react";

import styles from "./SpeakerInfo.module.scss";

export default function Speaker(props) {
  const { firstname, lastname, title, company, twitter, mastodon } = props.speaker;
  const companyText = company ? ` at ${company}` : "";

  return (
    <>
      <h1 className={styles.speaker_name}>
        {firstname} {lastname}
      </h1>
      <span className={styles.speaker_title}>
        {title} {companyText}
      </span>
      <br />
      {twitter && (
        <a
          className={`${styles.social} ${styles.twitter}`}
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitter}
        </a>
      )}
      {mastodon && (
        <a
        className={`${styles.social} ${styles.mastodon}`}
          href={mastodon}
          target="_blank"
          rel="noopener noreferrer"
        >
          {mastodon.split("://").pop()}
        </a>
      )}
    </>
  );
}
