/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import styles from "./StartingPrice.style";
import Span from "../Span";

const StartingPrice = props => {
  const { price, className } = props;

  return (
    <Span tag="span" className={className}>
      <strong>₹{price}</strong>/night
    </Span>
  );
};

StartingPrice.propTypes = {
  price: PropTypes.string.isRequired,
  className: PropTypes.string
};

StartingPrice.defaultProps = {
  className: ""
};

export default styledHOC(StartingPrice, styles);
