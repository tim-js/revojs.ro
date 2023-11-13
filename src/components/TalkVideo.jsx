import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import "./talkVideo.scss";

const TalkVideo = ({ video, className }) => {
  const speakersName = video.speakers
    .map((speaker) => {
      return `${speaker.firstname} ${speaker.lastname}`;
    })
    .join(" & ");

  return (
    <OutboundLink
      className={`${className} talk-video-link`}
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GatsbyImage
        image={video.talkImage.childImageSharp.gatsbyImageData}
        alt={`${speakersName} photo`}
        className={className ? "" : "talk-video-image"}
      />
      <strong className="talk-video-speaker">{speakersName}</strong>
      <span className="talk-video-title">{video.title}</span>
    </OutboundLink>
  );
};

TalkVideo.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        firstname: PropTypes.string,
        lastname: PropTypes.string,
      })
    ),
    talkImage: PropTypes.object,
  }),
};

export default TalkVideo;
