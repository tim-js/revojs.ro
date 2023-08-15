import React from "react";
import PropTypes from "prop-types";

const COLORS = {
  "white": "#ffffff",
  "orange": "var(--primary)",
  "grey": "var(--light-faded)",
}

export const RevoSymbol = ({ color = "orange" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.11 215.11" style={{ display: "block", color: COLORS[color] }}>
      <path fill="currentColor"
        d="M2,106.29V258.13H153.84l63.27-63.27V43H65.27Zm75.92,63.27V118.94h75.92v25.31H103.23v50.62H77.92V169.56Z"
        transform="translate(-2 -43.02)" />
    </svg>
  );
};

RevoSymbol.propTypes = {
  color: PropTypes.oneOf(["white", "orange", "grey"]),
};
