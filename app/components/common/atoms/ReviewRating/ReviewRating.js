/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import styles from "./ReviewRating.style";
import Span from "../Span";

const ReviewRating = props => {
  const { review, ratings, className } = props;

  return (
    <div className={className}>
      <Span tag="strong">{review}</Span>
      <Span tag="span">{ratings} ratings</Span>
    </div>
  );
};

ReviewRating.propTypes = {
  review: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired,
  className: PropTypes.string
};

ReviewRating.defaultProps = {
  className: ""
};

export default styledHOC(ReviewRating, styles);
