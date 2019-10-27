import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Card from "./Card";

import "./cardPhotos.scss";

export default ({ href, img, heading }) => {
  return (
    <OutboundLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-photos-link"
    >
      <Card white className="" img={img} heading={heading}></Card>
    </OutboundLink>
  );
};
