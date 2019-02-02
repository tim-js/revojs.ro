import React from "react";

export default props => {
  const { src, ...rest } = props;
  return <img src={require(`../images/${src}`)} {...rest} />;
};
