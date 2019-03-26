import React from "react";
import PropTypes from "prop-types";

import "./input.scss";

const Input = (props) => {
  return (
    <input className="input" {...props} value={props.value ? props.value : ""} />
  );
};

Input.propTypes = {
  value: PropTypes.string
};

export default Input;
