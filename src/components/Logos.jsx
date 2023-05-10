import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import "./logos.scss";

const Logos = ({ list = [], small, ...props }) => {
  let classes = `logos-list`;

  if (small) {
    classes += " logos-list--small";
  }

  return (
    <ul className={classes} {...props}>
      {list.map((logo) => {
        const image = require(`@assets/${logo.image}`).default;

        let logoClasses = "";

        if (!!logo.premium) {
          logoClasses += " is-premium";
        }
        if (!!logo.title) {
          logoClasses += " is-wide";
        }

        return (
          <li key={logo.name} className={logoClasses}>
            <OutboundLink
              href={logo.url}
              className="logo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image} alt={logo.name} width="100%" />
              {logo?.title?.length > 0 && (
                <span className="logo-title">{logo.title}</span>
              )}
            </OutboundLink>
          </li>
        );
      })}
    </ul>
  );
};

Logos.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  small: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Logos;
