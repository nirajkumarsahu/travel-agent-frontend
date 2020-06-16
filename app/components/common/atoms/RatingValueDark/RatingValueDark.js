import React from "react";
import PropTypes from "prop-types";
import styleHOC from "lib/styledHOC";
import styles from "./RatingValueDark.style";
import Span from "../Span";

const RatingValueDark = props => {
  const { className, rateValue } = props;
  return (
    <Span tag="span" className={className}>
      {rateValue}
    </Span>
  );
};

RatingValueDark.propTypes = {
  className: PropTypes.string,
  rateValue: PropTypes.number.isRequired
};

RatingValueDark.defaultProps = {
  className: ""
};

export default styleHOC(RatingValueDark, styles);
