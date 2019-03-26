import React, { useState } from "react";

import "./subscribe.scss";

const Subscribe = props => {
  const [email, setEmail] = useState("");

  const _theme = props.light ? "subscribe-form--light" : "";
  const _centered = props.centered ? "subscribe-form--centered" : "";

  return (
    <form
      onSubmit={() => openSubscribePage(email)}
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

export default Subscribe;

function openSubscribePage(email) {
  window.open(
    `https://revojs.us20.list-manage.com/subscribe?u=34c79aeaaf8573f6289982fdd&id=ec632308b8&EMAIL=${email}`
  );
}
