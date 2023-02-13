import React from "react";
import Img from "gatsby-image";

import Card from "./Card";

import "./cardSpeaker.scss";

function displayCompany(name) {
  if (!name) return null;
  return <span className="card-speaker-company">at {name}</span>;
}

export default props => {
  return (
    <Card
      color={props.color}
      className="card-speaker"
      img={<Img fluid={props.data.speakerImage.node.image.fluid} alt={`${props.data.firstname} ${props.data.lastname} photo`} />}
      heading={
        <>
          <span className="card-speaker-name">{props.data.firstname}</span>{" "}
          <span className="card-speaker-name">{props.data.lastname}</span>
        </>
      }
    >
      <span className="card-speaker-title">{props.data.title}</span>
      {displayCompany(props.data.company)}
    </Card>
  );
};
