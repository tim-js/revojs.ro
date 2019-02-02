import React from "react";
import { graphql } from "gatsby";

export default props => {
  const { description, name } = props.speaker;
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
};

export const speakerDetailFragment = graphql`
  fragment SpeakerDetail on SpeakersJson {
    name
    description
  }
`;
