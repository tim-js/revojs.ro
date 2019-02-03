import React from "react";
import PropTypes from "prop-types";

const Img = props => {
  const { src, alt, ...rest } = props;
  return <img src={require(`../images/${src}`)} alt={alt} {...rest} />;
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Img.defaultProps = {
  alt: ""
};

export default Img;
