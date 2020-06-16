import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Anchor from "components/common/atoms/Anchor";
import CalendarDay from "components/common/atoms/CalendarDay";
import { allMonths } from "global/constants";
import styles from "./Calendar.style";
import { desktopDays } from "./Calendar.config";

const Calendar = props => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const lastDate = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDate() - 1
  );

  const createCalander = () => {
    const { selectedMonth, selectedYear, isMobile } = props;
    const startDay = new Date(selectedYear, selectedMonth, 1).getDay();
    const lastDateOfSelectedMonth = new Date(
      selectedYear,
      selectedMonth + 1,
      0
    ).getDate();
    let zeroRow = [];
    const firstRow = [];
    const secondRow = [];
    const thirdRow = [];
    const fourthRow = [];
    const fifthRow = [];
    let sixthRow = [];

    const commonDayProps = {
      selectedMonth,
      selectedYear,
      isMobile
    };

    for (let i = 0; i < 36; i++) {
      if (i < startDay - 1) {
        firstRow.push(<td />);
      } else if (i < 7) {
        firstRow.push(
          <CalendarDay displayDate={i - startDay + 2} {...commonDayProps} />
        );
      } else if (i > 7 && i <= 14) {
        secondRow.push(
          <CalendarDay displayDate={i - startDay + 1} {...commonDayProps} />
        );
      } else if (i > 14 && i <= 21) {
        thirdRow.push(
          <CalendarDay displayDate={i - startDay + 1} {...commonDayProps} />
        );
      } else if (i > 21 && i <= 28) {
        fourthRow.push(
          <CalendarDay displayDate={i - startDay + 1} {...commonDayProps} />
        );
      } else if (i > 28 && i - startDay + 1 <= lastDateOfSelectedMonth) {
        fifthRow.push(
          <CalendarDay displayDate={i - startDay + 1} {...commonDayProps} />
        );
      }
    }
    if (startDay === 0) {
      zeroRow = [
        <td />,
        <td />,
        <td />,
        <td />,
        <td />,
        <td />,
        <CalendarDay displayDate={1} {...commonDayProps} />
      ];
    }
    if (startDay === 6 && lastDateOfSelectedMonth === 31) {
      sixthRow = [<CalendarDay displayDate={31} {...commonDayProps} />];
    }
    return (
      <tbody>
        {zeroRow.length ? <tr>{zeroRow}</tr> : null}
        <tr>{firstRow}</tr>
        <tr>{secondRow}</tr>
        <tr>{thirdRow}</tr>
        <tr>{fourthRow}</tr>
        <tr>{fifthRow}</tr>
        {sixthRow.length ? <tr>{sixthRow}</tr> : null}
      </tbody>
    );
  };

  const {
    selectedYear,
    selectedMonth,
    changeCalender,
    prev,
    next,
    className,
    getSVG
  } = props;
  const SvgPrev = getSVG("prevArrow");
  const SvgNext = getSVG("nextArrow");
  return (
    <div className={className}>
      <table>
        <thead>
          <tr>
            {prev ? (
              <th
                className={
                  new Date(selectedYear, selectedMonth) <=
                  new Date(currentYear, currentMonth)
                    ? "disabled"
                    : ""
                }
                onClick={e => changeCalender(e, "prev")}
                colSpan="1"
              >
                <Anchor>
                  <SvgPrev />
                </Anchor>
              </th>
            ) : (
              <th />
            )}
            <th colSpan="5" align="center">
              {`${allMonths[selectedMonth]} ${selectedYear}`}
            </th>
            {next ? (
              <th
                className={
                  new Date(selectedYear, selectedMonth + 1) >
                  new Date(lastDate.getFullYear(), lastDate.getMonth())
                    ? "disabled"
                    : ""
                }
                onClick={e => changeCalender(e, "next")}
                colSpan="1"
              >
                <Anchor>
                  <SvgNext />
                </Anchor>
              </th>
            ) : (
              <th />
            )}
          </tr>

          <tr>
            {Object.keys(desktopDays).map(val => {
              return <th value={val}>{desktopDays[val]}</th>;
            })}
          </tr>
        </thead>
        {createCalander()}
        <tfoot>
          <tr />
        </tfoot>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  className: PropTypes.string,
  selectedYear: PropTypes.number.isRequired,
  selectedMonth: PropTypes.number.isRequired,
  changeCalender: PropTypes.func.isRequired,
  prev: PropTypes.bool.isRequired,
  next: PropTypes.bool.isRequired,
  getSVG: PropTypes.func.isRequired,
  //  eslint-disable-next-line
  isMobile: PropTypes.bool
};

Calendar.defaultProps = {
  isMobile: false,
  className: ""
};
export default styledHOC(Calendar, styles);
