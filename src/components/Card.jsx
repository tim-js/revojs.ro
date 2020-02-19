import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

const Card = ({
  img,
  children,
  color = "primary",
  white,
  heading,
  className
}) => {
  const _theme = white ? "card--white" : "";

  return (
    <section
      className={`card ${_theme} ${className}`}
      // set a css color variable that's used inside the component
      style={{ ["--color"]: `var(--${color})` }}
    >
      <figure className="card-img">
        <div className="card-img-inner">{img}</div>
      </figure>
      <div className="card-info">
        <div className="card-info-inner">
          <h2 className="card-heading">{heading}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  white: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "accent", "accent60"]),
  img: PropTypes.node,
  heading: PropTypes.node,
  children: PropTypes.node
};

export default Card;
