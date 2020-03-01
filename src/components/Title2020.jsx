import React from "react";
import "./Title2020.scss";

export default ({ children }) => {
  return (
    <h1 className="title2020" data-content={String(children)}>
      {children}
    </h1>
  );
};
