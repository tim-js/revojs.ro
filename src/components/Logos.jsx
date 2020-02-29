import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import "./logos.scss";

const Logos = ({ list = [], small, ...props }) => {
  let classes = `logos-list`;

  if (small) {
    classes += " logos-list--small";
  }

  return (
    <ul className={classes} {...props}>
      {list.map(logo => {
        const image = require(`@assets/${logo.image}`);

        let logoClasses = "";

        if (!!logo.premium) {
          logoClasses += " is-premium";
        }
        if (!!logo.wide) {
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
  wide: PropTypes.bool
};

export default Logos;
