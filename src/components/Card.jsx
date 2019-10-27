import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

const Card = ({ img, children, white, heading, className }) => {
  const _theme = white ? "card--white" : "";

  return (
    <section className={`card ${_theme} ${className}`}>
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
  img: PropTypes.node,
  heading: PropTypes.node,
  children: PropTypes.node,
};

export default Card;
