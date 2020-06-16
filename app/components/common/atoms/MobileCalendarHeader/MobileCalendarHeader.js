import React from "react";
import PropTypes from "prop-types";
import { allMonths } from "global/constants";
import styledHOC from "lib/styledHOC";
import styles from "./MobileCalendarHeader.style";

const MobileCalendarHeader = props => {
  const {
    selectDateLocation,
    resetDates,
    closeDatePickerModal,
    fromMonth,
    fromDay,
    isCheckOutSelected,
    isCheckInSelected,
    toDay,
    toMonth,
    className
  } = props;

  return (
    <div className={`visible-phone ${className}`}>
      {/* eslint-disable */}
      <div className="flex vertical-center date-picker-top">
        <span onClick={resetDates} className="backArrow">
          Back
        </span>
        <span
          className={`mobile-date-val ${isCheckInSelected && "active"}`}
          onClick={e => selectDateLocation(e, "from", true)}
        >
          {`${fromDay} ${allMonths[fromMonth]}`}
        </span>
        -
        <span
          onClick={e => selectDateLocation(e, "to", true)}
          className={`mobile-date-val ${isCheckOutSelected && "active"}`}
        >
          {`${toDay} ${allMonths[toMonth]}`}
        </span>
        <span onClick={closeDatePickerModal} className="done">
          Done
        </span>
      </div>
      <div className="date-picker-day">
        <table>
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
        </table>
      </div>
      {/* eslint-disable */}
    </div>
  );
};

MobileCalendarHeader.propTypes = {
  className: PropTypes.string,
  selectDateLocation: PropTypes.func.isRequired,
  resetDates: PropTypes.func.isRequired,
  closeDatePickerModal: PropTypes.func.isRequired,
  fromMonth: PropTypes.string.isRequired,
  fromDay: PropTypes.string.isRequired,
  isCheckOutSelected: PropTypes.bool.isRequired,
  isCheckInSelected: PropTypes.bool.isRequired,
  toDay: PropTypes.string.isRequired,
  toMonth: PropTypes.string.isRequired
};

MobileCalendarHeader.defaultProps = {
  className: ""
};

export default styledHOC(MobileCalendarHeader, styles);
