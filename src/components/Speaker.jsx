import React from "react";
import Img from "gatsby-image";

import "./speaker.scss";

export default props => {
  return (
    <section className="speaker">
      <Img
        fluid={props.image.node.image.fluid}
        alt=""
        className="speaker-img"
      />
      <div className="speaker-info">
        <div className="speaker-info-inner">
          <h2 className="speaker-name">
            {props.data.firstname}<br />
            {props.data.lastname}
          </h2>
          <span className="speaker-title">{props.data.title}</span>
          <span className="speaker-company">{props.data.company}</span>
        </div>
      </div>
    </section>
  );
};
