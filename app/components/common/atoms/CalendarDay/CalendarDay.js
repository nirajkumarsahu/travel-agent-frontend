import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import { MyContext } from "components/common/organisms/DatePicker/DatePicker";
import styles from "./CalendarDay.style";

const WithContext = Component => {
  return props => (
    <MyContext.Consumer>
      {value => <Component {...props} {...value} />}
    </MyContext.Consumer>
  );
};

const CalendarDay = props => {
  const {
    selectedMonth,
    selectedYear,
    fromDate,
    toDate,
    selectDate,
    isCheckOutSelected,
    onMouseEnter,
    onMouseLeave,
    isMouseOver,
    mouseOverDate,
    isMobile,
    extendedBookingTime,
    displayDate,
    className,
    keypadDate
  } = props;
  const todayDate = new Date();
  const lastDate = new Date(
    todayDate.getFullYear() + 1,
    todayDate.getMonth(),
    todayDate.getDate() - 1
  );
  let addClass = "";
  let selectedClass = "";
  let disabled = "";
  let keypadDateClass = "";
  const parsedSelectedMonth = parseInt(selectedMonth, 10) + 1;
  const nextDay = new Date(
    `${parsedSelectedMonth}/${displayDate}/${selectedYear}`
  );
  const parsedSelectedDate = new Date(
    `${parsedSelectedMonth}/${displayDate}/${selectedYear}`
  );
  let todayDateActive = "";
  if (
    todayDate.getDate() === displayDate &&
    todayDate.getMonth() === selectedMonth &&
    todayDate.getFullYear() === selectedYear
  ) {
    todayDateActive = "current-date";
  }
  nextDay.setDate(nextDay.getDate() + 1);
  let today = new Date();
  let isLastNightCheckIn = false;
  if (
    today <=
    new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      extendedBookingTime
    )
  ) {
    today = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
    );

    if (
      selectedYear === today.getFullYear() &&
      selectedMonth === today.getMonth() &&
      displayDate === today.getDate()
    ) {
      isLastNightCheckIn = true;
    }
  }
  if (
    nextDay <= today ||
    new Date(selectedYear, selectedMonth, displayDate) > lastDate
  ) {
    disabled = "disabled";
  }
  const newFromDate = fromDate.split("-");
  const [newFromDay, newFromMonth, newFromYear] = newFromDate;
  if (
    parseInt(newFromDay, 10) === displayDate &&
    parseInt(newFromMonth, 10) === selectedMonth &&
    parseInt(newFromYear, 10) === selectedYear
  ) {
    addClass = "start-date selected";
  }
  const newToDate = toDate.split("-");
  const [newToDay, newToMonth, newToYear] = newToDate;
  const parsedNewToDate = new Date(
    `${parseInt(newToMonth, 10) + 1}/${newToDay}/${newToYear}`
  );
  const parsedNewFromDate = new Date(
    `${parseInt(newFromMonth, 10) + 1}/${newFromDay}/${newFromYear}`
  );
  if (!isMouseOver) {
    if (
      parsedSelectedDate < parsedNewToDate &&
      parsedSelectedDate > parsedNewFromDate
    ) {
      selectedClass = "selected";
    }
  }

  if (
    parseInt(newToDay, 10) === displayDate &&
    parseInt(newToMonth, 10) === selectedMonth &&
    parseInt(newToYear, 10) === selectedYear
  ) {
    if (!isMouseOver) {
      addClass = "end-date selected";
    } else {
      const newMouseOverDate = mouseOverDate.split("-");
      const [
        newMouseOverDay,
        newMouseOverMonth,
        newMouseOverYear
      ] = newMouseOverDate;
      const parsedMouseOverDate = new Date(
        `${newMouseOverYear}/${parseInt(newMouseOverMonth, 10) +
          1}/${newMouseOverDay}`
      );
      if (parsedMouseOverDate <= parsedNewFromDate) {
        addClass = "end-date selected";
      }
    }
  }
  if (isMouseOver && isCheckOutSelected && !isMobile) {
    const newMouseOverDate = mouseOverDate.split("-");
    const [
      newMouseOverDay,
      newMouseOverMonth,
      newMouseOverYear
    ] = newMouseOverDate;
    const parsedMouseOverDate = new Date(
      `${parseInt(newMouseOverMonth, 10) +
        1}/${newMouseOverDay}/${newMouseOverYear}`
    );

    if (
      parseInt(newMouseOverDay, 10) === displayDate &&
      parseInt(newMouseOverMonth, 10) === selectedMonth &&
      parseInt(newMouseOverYear, 10) === selectedYear &&
      parsedMouseOverDate > parsedNewFromDate
    ) {
      addClass = "end-date selected";
    }
    if (
      parsedSelectedDate > parsedNewFromDate &&
      ((parsedNewFromDate < parsedMouseOverDate &&
        parsedSelectedDate < parsedMouseOverDate) ||
        (parsedNewFromDate >= parsedMouseOverDate &&
          parsedSelectedDate < parsedNewToDate))
    ) {
      selectedClass = "selected";
    }
  }

  keypadDateClass =
    keypadDate &&
    keypadDate === `${displayDate}-${selectedMonth}-${selectedYear}`
      ? "keypad-selected"
      : "";

  return (
    /*  eslint-disable */
    <td
      onClick={e => selectDate(e, displayDate, selectedMonth, selectedYear, isMobile)}
      onMouseLeave={e => onMouseLeave(e)}
      className={`${addClass} ${selectedClass} ${disabled} ${className} ${todayDateActive} ${keypadDateClass} ${isLastNightCheckIn && 'last-night-check-in'}`}
      onMouseEnter={e =>
        onMouseEnter(e, `${displayDate}-${selectedMonth}-${selectedYear}`, isMobile)
      }

    >
      {
        isLastNightCheckIn && <span className="tool-tip"><span className="tool-tip-text">Late night check-in available</span></span>
      }

      {displayDate}
    </td>
    /*  eslint-disable */
  );

}


CalendarDay.propTypes = {
  className: PropTypes.string,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  selectDate: PropTypes.func.isRequired,
  isCheckOutSelected: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isMouseOver: PropTypes.bool.isRequired,
  mouseOverDate: PropTypes.string.isRequired,
  selectedYear: PropTypes.number.isRequired,
  selectedMonth: PropTypes.number.isRequired,
  isMobile: PropTypes.bool,
  extendedBookingTime: PropTypes.number.isRequired,
  displayDate: PropTypes.number.isRequired,
  keypadDate: PropTypes.string
};

CalendarDay.defaultProps = {
  isMobile: false,
  className: "",
  keypadDate: null
};

export default styledHOC(WithContext(CalendarDay), styles);
