import React from "react";
import "./Title2020.scss";

export default ({ children, size = 11 }) => {
  return (
    <h1
      className="title2020"
      data-content={String(children)}
      style={{ fontSize: `${size}vw` }}
    >
      {children}
    </h1>
  );
};
