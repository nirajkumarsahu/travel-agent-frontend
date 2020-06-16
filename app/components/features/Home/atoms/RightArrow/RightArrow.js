import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import styles from "./RightArrow.style";

const RightArrow = props => {
  const { className } = props;
  return <span className={className} />;
};

RightArrow.propTypes = {
  className: PropTypes.string.isRequired
};

export default styledHOC(RightArrow, styles);
