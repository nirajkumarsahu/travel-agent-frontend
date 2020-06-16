import React from "react";
import PropTypes from "prop-types";
import {
  allMonths,
  ENTER_KEY,
  ARROW_UP_KEY,
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY
} from "global/constants";
import styledHOC from "lib/styledHOC";
import Calendar from "components/common/atoms/Calendar";
import { checkViewPort, getCookie } from "lib/utils";
import MobileCalendarHeader from "components/common/atoms/MobileCalendarHeader";
import styles from "./DatePicker.style";
import {
  maximumMonthsToShow,
  monthDiff,
  defaultDesktopCalendarLength
} from "./DatePicker.config";

export const MyContext = React.createContext();

const defaultMobileCalandarLength = 2;

class DatePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    const { extendedBookingTime } = props;
    this.today = new Date();
    if (
      this.today <=
      new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate(),
        extendedBookingTime
      )
    ) {
      this.today = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate() - 1
      );
    }
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    const tomorrow = new Date(
      this.currentYear,
      this.currentMonth,
      this.today.getDate()
    );
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.lastDate = new Date(
      this.today.getFullYear() + 1,
      this.today.getMonth(),
      this.today.getDate() - 1
    );

    const initialFromDate = `${this.today.getDate()}-${this.currentMonth}-${
      this.currentYear
    }`;

    this.state = {
      selectedYear: this.currentYear,
      selectedMonth: this.currentMonth,
      isMouseOver: false,
      mouseOverDate: "",
      isCheckInSelected: false,
      isCheckOutSelected: false,
      tempFromDate: "",
      tempToDate: "",
      mobileCalandarLength: defaultMobileCalandarLength,
      fromDate: initialFromDate, // set default date is this.today
      toDate: `${tomorrow.getDate()}-${tomorrow.getMonth()}-${tomorrow.getFullYear()}`, // set default date is tomorrow
      isScroll: false,
      keypadDate: null
    };
    this.node = React.createRef();
    this.scrollDownRef = React.createRef();
    this.datepickerRef = React.createRef();
    this.checkViewPort = false;
  }

  componentDidMount() {
    // this.setFromToDateCookies();
    this.setInitialDateFromCookie();
    document.addEventListener("mousedown", this.handleClickOutside);
    this.checkForMobile();
  }

  componentDidUpdate() {
    const { scrollDownRef, checkViewPort, datepickerRef } = this;
    let { fromDate } = this.state;
    const { isScroll } = this.state;
    const { isDatePickerOpen } = this.props;
    fromDate = fromDate.split("-");
    const observer = new IntersectionObserver(this.onObserverTrigger, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });
    if (scrollDownRef.current) {
      observer.observe(scrollDownRef.current);
    }
    if (
      checkViewPort &&
      datepickerRef.current &&
      isScroll &&
      !datepickerRef.current.scrollTop
    ) {
      this[`calendar${fromDate[1]}${fromDate[2]}`].scrollIntoView();
    }
    if (isDatePickerOpen) {
      this.node.focus();
    }
  }

  // setFromToDateCookies = () => {
  //   let checkIn = getCookie("checkIn") || "";
  //   let checkOut = getCookie("checkOut") || "";

  //   if (checkIn) {
  //     const date = new Date(checkIn);
  //     checkIn = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  //   }
  //   if (checkOut) {
  //     const date = new Date(checkOut);
  //     checkOut = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  //   }
  //   if (checkIn && checkOut)
  //     this.setState({ fromDate: checkIn, toDate: checkOut });
  // };

  setInitialDateFromCookie = () => {
    let checkIn = getCookie("checkIn") || "";
    let checkOut = getCookie("checkOut") || "";
    let { fromDate, toDate } = this.state;
    if (checkIn && checkOut) {
      checkIn = checkIn.split("-");
      checkOut = checkOut.split("-");
      fromDate = fromDate.split("-");
      let newCheckIn = `${checkIn[2]}-${parseInt(checkIn[1]) - 1}-${
        checkIn[0]
      }`;
      const today = new Date();
      let newCheckOut = `${checkOut[2]}-${parseInt(checkOut[1]) - 1}-${
        checkOut[0]
      }`;
      console.log("newc", newCheckIn);
      if (new Date(checkIn[0], parseInt(checkIn[1]) - 1, checkIn[2]) < today) {
        newCheckIn = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
        console.log("newc1", newCheckIn);
      }
      if (
        new Date(checkOut[0], parseInt(checkOut[1]) - 1, checkOut[2]) < today
      ) {
        const tomorrow = new Date(
          today.getFullYear(),
          today.getMonth(),
          this.today.getDate()
        );
        tomorrow.setDate(tomorrow.getDate() + 1);
        newCheckOut = `${tomorrow.getDate()}-${tomorrow.getMonth()}-${tomorrow.getFullYear()}`;
      }
      console.log("newc2", newCheckIn);
      if (new Date())
        this.setState({
          fromDate: newCheckIn,
          toDate: newCheckOut
        });
    }
  };

  checkForMobile = () => {
    this.checkViewPort = checkViewPort();
  };

  onObserverTrigger = ([entry]) => {
    if (entry.intersectionRatio > 0 && this.checkViewPort) {
      const { mobileCalandarLength, selectedYear, selectedMonth } = this.state;
      if (
        mobileCalandarLength <
        maximumMonthsToShow -
          monthDiff(this.today, new Date(selectedYear, selectedMonth + 1))
      ) {
        this.setState({
          mobileCalandarLength: mobileCalandarLength + 1,
          isScroll: false
        });
      }
    }
  };

  selectDateLocation = (e, date, isMobile) => {
    // e.stopPropagation();
    const { changeDate } = this.props;
    const { isCheckOutSelected, isCheckInSelected, toDate } = this.state;
    let { selectedMonth, selectedYear, tempFromDate, tempToDate } = this.state;
    let { fromDate, isScroll } = this.state;
    if (!isCheckInSelected && !isCheckOutSelected && !this.checkViewPort) {
      fromDate = fromDate.split("-");
      selectedMonth = parseInt(fromDate[1], 10);
      selectedYear = parseInt(fromDate[2], 10);
    }
    if (!isMobile) {
      tempFromDate = fromDate;
      tempToDate = toDate;
    }
    if (this.checkViewPort) {
      isScroll = true;
    } else {
      isScroll = false;
    }
    switch (date) {
      case "from":
        if (!isCheckInSelected) {
          this.setState({
            isCheckInSelected: true,
            isCheckOutSelected: false,
            isMouseOver: false,
            tempFromDate,
            tempToDate,
            selectedYear,
            selectedMonth,
            isScroll,
            keypadDate: null
          });
        }
        break;
      case "to":
        if (!isCheckOutSelected) {
          this.setState(
            {
              isCheckInSelected: false,
              isCheckOutSelected: true,
              tempFromDate,
              tempToDate,
              selectedYear,
              selectedMonth,
              isScroll
            },
            changeDate(fromDate, toDate)
          );
        }

        break;

      default:
        break;
    }
  };

  // Select From or To date
  selectDate = (e, date, selectedMonth, selectedYear, isMobile) => {
    const { changeDate } = this.props;
    const {
      isCheckInSelected,
      isCheckOutSelected,
      toDate,
      fromDate
    } = this.state;
    if (isCheckInSelected) {
      let newTo = "";
      if (toDate) {
        const newToDate = toDate.split("-");
        if (
          new Date(`${selectedMonth + 1}/${date}/${selectedYear}`) >=
          new Date(
            `${parseInt(newToDate[1], 10) + 1}/${newToDate[0]}/${newToDate[2]}`
          )
        ) {
          const nextToDate = new Date(
            `${selectedYear}-${selectedMonth + 1}-${date}`
          );
          nextToDate.setDate(nextToDate.getDate() + 1).toString();
          newTo = `${nextToDate.getDate()}-${nextToDate.getMonth()}-${nextToDate.getFullYear()}`;
        }
      }
      this.setState(
        {
          isCheckInSelected: false,
          isCheckOutSelected: true,
          fromDate: `${date}-${selectedMonth}-${selectedYear}`,
          toDate: newTo || toDate,
          isScroll: false
        },
        changeDate(`${date}-${selectedMonth}-${selectedYear}`, newTo || toDate)
      );
    } else if (isCheckOutSelected) {
      if (fromDate !== `${date}-${selectedMonth}-${selectedYear}`) {
        let tempisCheckOutSelected = isCheckOutSelected;
        if (!isMobile) {
          tempisCheckOutSelected = false;
        }
        const parsedSelectedMonth = parseInt(selectedMonth, 10) + 1;
        let newFromDate = fromDate;
        let newToDate = `${date}-${selectedMonth}-${selectedYear}`;
        const [newFromDay, newFromMonth, newFromYear] = fromDate.split("-");
        if (
          new Date(`${parsedSelectedMonth}/${date}/${selectedYear}`) <
          new Date(
            `${parseInt(newFromMonth, 10) + 1}/${newFromDay}/${newFromYear}`
          )
        ) {
          newFromDate = `${date}-${selectedMonth}-${selectedYear}`;
          newToDate = new Date(selectedYear, selectedMonth, date + 1);
          newToDate = `${newToDate.getDate()}-${newToDate.getMonth()}-${newToDate.getFullYear()}`;
          tempisCheckOutSelected = true;
        }
        this.setState(
          {
            isCheckOutSelected: tempisCheckOutSelected,
            fromDate: newFromDate,
            toDate: newToDate,
            isScroll: false
          },
          changeDate(newFromDate, newToDate, !tempisCheckOutSelected)
        );
      }
    }
  };

  changeCalender = (e, calender) => {
    const { selectedMonth, selectedYear } = this.state;
    switch (calender) {
      case "prev":
        if (
          new Date(selectedYear, selectedMonth) >
          new Date(this.currentYear, this.currentMonth)
        ) {
          if (selectedMonth === 0) {
            this.setState({
              selectedMonth: 11,
              selectedYear: selectedYear - 1
            });
          } else {
            this.setState({
              selectedMonth: selectedMonth - 1
            });
          }
        }
        break;
      case "next":
        if (
          new Date(selectedYear, selectedMonth + 1) <
          new Date(this.lastDate.getFullYear(), this.lastDate.getMonth())
        ) {
          if (selectedMonth < 11) {
            this.setState({
              selectedMonth: selectedMonth + 1
            });
          } else {
            this.setState({
              selectedMonth: 0,
              selectedYear: selectedYear + 1
            });
          }
        }
        break;

      default:
        break;
    }
  };

  onMouseEnter = (e, value, isMobile) => {
    const { isCheckOutSelected } = this.state;
    if (!isMobile && isCheckOutSelected) {
      this.setState({ isMouseOver: true, mouseOverDate: value });
    }
  };

  onMouseLeave = () => {
    const { isCheckOutSelected } = this.state;
    if (isCheckOutSelected) {
      this.setState({ isMouseOver: false, mouseOverDate: null });
    }
  };

  handleClickOutside = e => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    const { fromDate, toDate } = this.state;
    const { changeDate } = this.props;
    this.setState(
      {
        isCheckInSelected: false,
        isCheckOutSelected: false
      },
      changeDate(fromDate, toDate)
    );
  };

  closeDatePickerModal = () => {
    const { fromDate, toDate } = this.state;
    const { changeDate } = this.props;
    this.setState({
      isCheckInSelected: false,
      isCheckOutSelected: false
    });
    changeDate(fromDate, toDate);
  };

  resetDates = () => {
    const { changeDate } = this.props;
    const { tempFromDate, tempToDate, fromDate, toDate } = this.state;
    if (fromDate !== tempFromDate || toDate !== tempToDate) {
      this.setState({
        isCheckInSelected: false,
        isCheckOutSelected: false,
        fromDate: tempFromDate,
        toDate: tempToDate
      });
      changeDate(tempFromDate, tempToDate);
    } else {
      this.setState({
        isCheckInSelected: false,
        isCheckOutSelected: false
      });
    }
  };

  onKeyDown = e => {
    const {
      fromDate,
      toDate,
      isCheckInSelected,
      isCheckOutSelected,
      selectedYear,
      selectedMonth
    } = this.state;
    let { keypadDate } = this.state;
    if (!keypadDate) {
      if (isCheckInSelected) {
        keypadDate = fromDate;
      }
      if (isCheckOutSelected) {
        keypadDate = toDate;
      }
    }
    const keypadDateSplit = keypadDate.split("-");
    const parsedKeypadDate = new Date(
      keypadDateSplit[2],
      keypadDateSplit[1],
      keypadDateSplit[0]
    );
    switch (e.keyCode) {
      case ENTER_KEY:
        {
          const { changeDate } = this.props;
          if (isCheckInSelected) {
            const toDateSplit = toDate.split("-");
            const parsedToDate = new Date(
              toDateSplit[2],
              toDateSplit[1],
              toDateSplit[0]
            );
            let finalToDate = toDate;
            if (parsedKeypadDate >= parsedToDate) {
              parsedKeypadDate.setDate(parsedKeypadDate.getDate() + 1);
              finalToDate = `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`;
            }
            this.setState(
              {
                isCheckInSelected: false,
                isCheckOutSelected: true,
                fromDate: keypadDate,
                toDate: finalToDate,
                keypadDate: finalToDate
              },
              changeDate(fromDate, toDate)
            );
          } else if (isCheckOutSelected) {
            const fromDateSplit = fromDate.split("-");
            const parsedFromDate = new Date(
              fromDateSplit[2],
              fromDateSplit[1],
              fromDateSplit[0]
            );
            let finalFromDate = fromDate;
            let finalToDate = keypadDate;
            let isClose = false;
            if (parsedKeypadDate <= parsedFromDate) {
              finalFromDate = `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`;
              parsedKeypadDate.setDate(parsedKeypadDate.getDate() + 1);
              finalToDate = `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`;
              isClose = true;
            }
            this.setState(
              {
                isCheckInSelected: false,
                isCheckOutSelected: isClose,
                fromDate: finalFromDate,
                toDate: finalToDate
              },
              changeDate(fromDate, toDate, !isClose)
            );
          }
        }
        break;
      case ARROW_UP_KEY:
        parsedKeypadDate.setDate(parsedKeypadDate.getDate() - 7);
        if (
          new Date(
            this.today.getFullYear(),
            this.today.getMonth(),
            this.today.getDate()
          ) <= parsedKeypadDate
        ) {
          const currentDate = new Date(selectedYear, selectedMonth);
          const checkKeyPadMonth = new Date(
            parsedKeypadDate.getFullYear(),
            parsedKeypadDate.getMonth()
          );
          if (checkKeyPadMonth < currentDate) {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`,
              selectedMonth: currentDate.getMonth() - 1,
              selectedYear: currentDate.getFullYear()
            });
          } else {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`
            });
          }
        }

        break;
      case ARROW_DOWN_KEY:
        parsedKeypadDate.setDate(parsedKeypadDate.getDate() + 7);
        if (parsedKeypadDate <= this.lastDate) {
          const currentDate = new Date(selectedYear, selectedMonth + 1);
          const checkKeyPadMonth = new Date(
            parsedKeypadDate.getFullYear(),
            parsedKeypadDate.getMonth()
          );
          if (checkKeyPadMonth > currentDate) {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`,
              selectedMonth: currentDate.getMonth(),
              selectedYear: currentDate.getFullYear()
            });
          } else {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`
            });
          }
        }

        break;
      case ARROW_LEFT_KEY:
        if (this.today < parsedKeypadDate) {
          parsedKeypadDate.setDate(parsedKeypadDate.getDate() - 1);
          const currentDate = new Date(selectedYear, selectedMonth);
          const checkKeyPadMonth = new Date(
            parsedKeypadDate.getFullYear(),
            parsedKeypadDate.getMonth()
          );
          if (checkKeyPadMonth < currentDate) {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`,
              selectedMonth: currentDate.getMonth() - 1,
              selectedYear: currentDate.getFullYear()
            });
          } else {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`
            });
          }
        }

        break;
      case ARROW_RIGHT_KEY:
        parsedKeypadDate.setDate(parsedKeypadDate.getDate() + 1);
        if (parsedKeypadDate <= this.lastDate) {
          const currentDate = new Date(selectedYear, selectedMonth + 1);
          const checkKeyPadMonth = new Date(
            parsedKeypadDate.getFullYear(),
            parsedKeypadDate.getMonth()
          );
          if (checkKeyPadMonth > currentDate) {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`,
              selectedMonth: currentDate.getMonth(),
              selectedYear: currentDate.getFullYear()
            });
          } else {
            this.setState({
              keypadDate: `${parsedKeypadDate.getDate()}-${parsedKeypadDate.getMonth()}-${parsedKeypadDate.getFullYear()}`
            });
          }
        }

        break;
      default:
        break;
    }
  };

  render() {
    const { className, extendedBookingTime, getSVG, noOfCalendar } = this.props;
    const {
      selectedYear,
      selectedMonth,
      isMouseOver,
      mouseOverDate,
      isCheckInSelected,
      isCheckOutSelected,
      mobileCalandarLength,
      fromDate,
      toDate,
      keypadDate
    } = this.state;
    const [fromDay, fromMonth] = fromDate.split("-");
    const [toDay, toMonth] = toDate.split("-");
    const mobileCalendarArray = [];
    const desktopCalendarArray = [];
    const DateSeparator = getSVG("rightArrowCircle");
    const DownArrow = getSVG("downArrow");

    for (let i = 0; i < mobileCalandarLength; i++) {
      const currentDate = new Date(selectedYear, selectedMonth + i);
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      if (i === mobileCalandarLength - 1) {
        mobileCalendarArray.push(<div ref={this.scrollDownRef} />);
      }
      mobileCalendarArray.push(
        /* eslint-disable */
        <div
          ref={calNode =>
            (this[`calendar${currentMonth}${currentYear}`] = calNode)
          }
          className="calendar-wrapper"
        >
          <Calendar
            selectedYear={currentYear}
            selectedMonth={currentMonth}
            changeCalender={this.changeCalender}
            isMobile
            prev={false}
            next={false}
            getSVG={getSVG}
          />
        </div>
        /* eslint-disable */
      );
    }
    for (let i = 0; i < noOfCalendar; i++) {
      let isNextActive = false;
      let className = "";
      if (i === noOfCalendar - 1) {
        isNextActive = true;
        className = `${className} to-calender`
      }
      if (i === 0) {
        className = `${className} from-calender`
      }
      desktopCalendarArray.push(
        <Calendar
          selectedYear={new Date(selectedYear, selectedMonth + i).getFullYear()}
          selectedMonth={new Date(selectedYear, selectedMonth + i).getMonth()}
          changeCalender={this.changeCalender}
          prev={i === 0 ? true : false}
          next={isNextActive}
          getSVG={getSVG}
          className={className}
        />
      );
    }

    return (
      <div className={className}>
        {/* eslint-disable */}
        <div
          className="datepicker-parent"
          ref={node => {
            this.node = node;
          }}
          tabIndex="0"
          onFocus={e => this.selectDateLocation(e, "from")}
          onBlur={e => this.closeDatePickerModal()}
          onKeyDown={this.onKeyDown}
        >
          <div className="shadow-box">
            <div
              className={`date-input ${isCheckInSelected && "active"}`}
              onClick={e => this.selectDateLocation(e, "from")}
            >
              Check In
              <span className="date-val">
                {`${fromDay} ${allMonths[fromMonth]}`}
                <DownArrow />
              </span>
            </div>
            <span className="separator-arrow">
              <DateSeparator />
            </span>
            <div
              className={`date-input checkout-date ${isCheckOutSelected &&
                "active"}`}
              onClick={e => this.selectDateLocation(e, "to")}
            >
              Check Out
              <span className="date-val">
                {`${toDay} ${allMonths[toMonth]}`}
                <DownArrow />
              </span>
            </div>
          </div>
          {((isCheckInSelected || isCheckOutSelected)) && (
            <div className="datepicker-container">
              <MobileCalendarHeader
                selectDateLocation={this.selectDateLocation}
                resetDates={this.resetDates}
                closeDatePickerModal={this.closeDatePickerModal}
                fromMonth={fromMonth}
                fromDay={fromDay}
                isCheckInSelected={isCheckInSelected}
                isCheckOutSelected={isCheckOutSelected}
                toDay={toDay}
                toMonth={toMonth}
              />
              <span ref={this.datepickerRef} className="datepicker-wrapper">
                <MyContext.Provider
                  value={{
                    fromDate,
                    toDate,
                    selectDate: this.selectDate,
                    isCheckOutSelected,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    isMouseOver,
                    mouseOverDate,
                    extendedBookingTime,
                    keypadDate
                  }}
                >
                  {desktopCalendarArray}
                  {mobileCalendarArray}
                </MyContext.Provider>

                {/* eslint-disable */}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  className: PropTypes.string,
  changeDate: PropTypes.func.isRequired,
  extendedBookingTime: PropTypes.number.isRequired,
  getSVG: PropTypes.func,
  noOfCalendar: PropTypes.number,
  isDatePickerOpen: PropTypes.bool
};

DatePicker.defaultProps = {
  getSVG: () => { },
  noOfCalendar: defaultDesktopCalendarLength,
  className: "",
  isDatePickerOpen: false
};
export default styledHOC(DatePicker, styles);
