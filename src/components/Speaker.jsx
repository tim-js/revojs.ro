import React from "react";
import Img from "gatsby-image";

import "./speaker.scss";

const Company = name => (name ? `at ${name}` : null);

export default props => {
  let classes = `speaker ${props.type}`;
  if (props.first) {
    classes += " first";
  }

  return (
    <section className={classes}>
      <figure className="speaker-img">
        <div className="speaker-img-inner">
          <Img fluid={props.image.node.image.fluid} alt="" />
        </div>
      </figure>
      <div className="speaker-info">
        <h2 className="speaker-name">
          {props.data.firstname} {props.data.lastname}
        </h2>
        <span className="speaker-title">
          {props.data.title} {Company(props.data.company)}
        </span>
        <h3 className="speaker-talk">{props.data.talk}</h3>
      </div>
    </section>
  );
};
