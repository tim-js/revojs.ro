import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import * as styles from "./logosWrapped.module.scss";

const LogosWrapped = ({ list = [], size = "normal", ...props }) => {
  let _size = styles.logos_list__normal;

  if (size === "small") {
    _size = styles.logos_list__small;
  }

  if (size === "large") {
    _size = styles.logos_list__large;
  }

  return (
    <ul className={`${styles.logos_list} ${_size}`} {...props}>
      {list.map((logo) => {
        const image = require(`@assets/${logo.image}`).default;

        return (
          <li key={logo.name}>
            <OutboundLink
              href={logo.url}
              className={styles.logo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image} alt={logo.name} />
              {logo?.title?.length > 0 && (
                <span className={styles.logo_title}>{logo.title}</span>
              )}
            </OutboundLink>
          </li>
        );
      })}
    </ul>
  );
};

LogosWrapped.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.oneOf(["normal", "large", "small"]),
};

export default LogosWrapped;
