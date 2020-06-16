import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import styles from "./BookingDuration.style";

const BookingDuration = props => {
  const { className, fromDate, toDate, getSVG } = props;
  const SvgRightArrowCircle = getSVG("rightArrowCircle");
  return (
    <div className={`${className} flex`}>
      <span>{new Date(fromDate).toDateString().substring(4, 11)}</span>
      <span className="inline-block circle-icon">
        <SvgRightArrowCircle className="icon" />
      </span>
      <span>{new Date(toDate).toDateString().substring(4, 11)}</span>
    </div>
  );
};
BookingDuration.propTypes = {
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired
};

BookingDuration.defaultProps = {
  className: ""
};

export default styledHOC(BookingDuration, styles);
