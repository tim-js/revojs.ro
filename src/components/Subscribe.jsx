import React, { useState } from "react";
import PropTypes from "prop-types";

import "./subscribe.scss";

const Subscribe = props => {
  const [email, setEmail] = useState("");

  const _theme = props.light ? "subscribe-form--light" : "";
  const _centered = props.centered ? "subscribe-form--centered" : "";

  return (
    <form
      onSubmit={() => openSubscribePage(email, props.list)}
      className={`subscribe-form ${_theme} ${_centered}`}
    >
      <input
        className="subscribe-input"
        placeholder="Your email address"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        id="subscribe-email"
      />
      <button className="subscribe-button" type="submit">
        <span className="subscribe-arrow">Subscribe</span>
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

const listIds = Object.freeze({
  cfp: "57960db8f5",
  default: "ec632308b8"
});

function openSubscribePage(email, list) {
  const listId = listIds[list] || listIds.default;
  window.open(
    `https://revojs.us20.list-manage.com/subscribe?u=34c79aeaaf8573f6289982fdd&id=${listId}&EMAIL=${email}`
  );
}
