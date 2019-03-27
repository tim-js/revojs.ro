import React from "react";
import Img from "gatsby-image";

import "./speaker.scss";

export default props => {
  return (
    <section className="speaker">
      <figure className="speaker-img">
        <div className="speaker-img-inner">
          <Img fluid={props.image.node.image.fluid} alt="" />
        </div>
      </figure>
      <div className="speaker-info">
        <div className="speaker-info-inner">
          <h2 className="speaker-name">
            {props.data.firstname}
            <br />
            {props.data.lastname}
          </h2>
          <span className="speaker-title">{props.data.title}</span>
          <span className="speaker-company">at {props.data.company}</span>
        </div>
      </div>
    </section>
  );
};
