import React from "react";
import PropTypes from "prop-types";

const StoreBadge = ({ type }) => {
  if (type === "apple") {
    return <a href="https://apple.com">apple</a>;
  } else {
    return <a href="https://google.com">google</a>;
  }
};

StoreBadge.propTypes = {};

export default StoreBadge;
