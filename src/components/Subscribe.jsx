import React, { useState } from "react";
import PropTypes from "prop-types";

import Arrow from "./Arrow";

import "./subscribe.scss";

const listIds = Object.freeze({
  cfp: "505f3f9eb9",
  default: "ec632308b8"
});

const Subscribe = props => {
  const [email, setEmail] = useState("");

  const _theme = props.light ? "subscribe-form--light" : "";
  const _centered = props.centered ? "subscribe-form--centered" : "";

  const listId = listIds[props.list] || listIds.default;

  return (
    <form
      action="https://revojs.us20.list-manage.com/subscribe"
      className={`subscribe-form ${_theme} ${_centered}`}
      method="GET"
    >
      <input
        aria-label="Your email address"
        className="subscribe-input"
        placeholder="Your email address"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        id="subscribe-email"
        name="EMAIL"
      />
      <input type="hidden" name="u" value="34c79aeaaf8573f6289982fdd" />
      <input type="hidden" name="id" value={listId} />
      <button className="subscribe-button" type="submit">
        <Arrow className="subscribe-button-arrow" light={props.light}>
          Subscribe
        </Arrow>
      </button>
    </form>
  );
};

Subscribe.propTypes = {
  list: PropTypes.oneOf(["cfp", "default"]),
  light: PropTypes.bool,
  centered: PropTypes.bool
};

Subscribe.defaultProps = {
  list: "default"
};

export default Subscribe;
