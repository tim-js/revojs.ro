import React from "react";
import Img from "gatsby-image";

import "./speakerIndex.scss";

function Company(name) {
  if (!name) return null;
  return <span className="index-speaker-company">at {name}</span>;
}

export default props => {
  return (
    <section className="index-speaker">
      <figure className="index-speaker-img">
        <div className="index-speaker-img-inner">
          <Img fluid={props.image.node.image.fluid} alt="" />
        </div>
      </figure>
      <div className="index-speaker-info">
        <div className="index-speaker-info-inner">
          <h2 className="index-speaker-name">
            <span className="index-speaker-firstname">{props.data.firstname}</span>{" "}
            <span className="index-speaker-lastname">{props.data.lastname}</span>
          </h2>
          <span className="index-speaker-title">{props.data.title}</span>
          {Company(props.data.company)}
        </div>
      </div>
    </section>
  );
};
