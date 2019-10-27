import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import "./talkVideo.scss";

const TalkVideo = ({ video }) => {
  const speakersName = video.speakers
    .map(speaker => {
      return `${speaker.firstname} ${speaker.lastname}`;
    })
    .join(" & ");

  return (
    <OutboundLink
      className="talk-video-link"
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img
        fluid={video.talkImage.image.fluid}
        alt={`${speakersName} photo`}
        className="talk-video-image"
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
      }),
    ),
    talkImage: PropTypes.object,
  }),
};

export default TalkVideo;
