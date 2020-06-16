import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";

import { allMonths, API_URLS } from "global/constants";
import SearchInput from "components/common/molecules/SearchInput";
import DatePicker from "components/common/organisms/DatePicker";
import DropDown from "components/common/atoms/DropDown";
import Button from "components/common/atoms/Button";
import Heading from "components/common/atoms/Heading";
import RecentSearch from "components/features/Home/molecules/RecentSearch";
import {
  isEmptyObject,
  getCookie,
  titleCase,
  getDateInDDMMYYY
} from "lib/utils";
import Image from "components/common/atoms/Image";
import styles from "./SearchBox.style";
import { fetchSearchData } from "./SearchBox.actions";
import { guestDropDownArray, optionalFields } from "./SearchBox.constants";

const extendedBookingTime = 4;

let today = new Date();
if (
  today <=
  new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    extendedBookingTime
  )
) {
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
}
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const tomorrow = new Date(
  `${currentYear}-${currentMonth + 1}-${today.getDate()}`
);
tomorrow.setDate(tomorrow.getDate() + 1);

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addressValue: "",
      selectedAddress: {},
      probableAddress: {},
      fromDate: `${today.getDate()}-${currentMonth}-${currentYear}`, // set default date is today
      toDate: `${tomorrow.getDate()}-${tomorrow.getMonth()}-${tomorrow.getFullYear()}`, // set default date is tomorrow
      selectedGuests: guestDropDownArray[0],
      isGoogle: false,
      isDropDownOpen: false,
      isValidAddress: true,
      isDatePickerOpen: false,
      guestDropDownFocus: false,
      isGuestDropDownOpen: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.overlayClose);
    this.initialisePrefilledData();
  }

  // TOD0 - Code Cleanup - This additional cookie logic will be removed once SRP is made live
  // Below commentedCode will be added as part of function later on

  // this.setStateFromLocalStorage("addressValue");
  // this.setStateFromLocalStorage("selectedAddress", JSON.parse);
  // this.setStateFromLocalStorage("selectedGuests", JSON.parse);
  // this.setStateFromLocalStorage("fromDate");
  // this.setStateFromLocalStorage("toDate");
  // this.setStateFromLocalStorage("isGoogle", this.isGoogleCallback);

  initialisePrefilledData = () => {
    // TODO -- Code To be Removed --- START
    const locality = getCookie("fav_locality");
    let latLng = getCookie("fav_latlng");
    const city = getCookie("fav_city");
    const guests = getCookie("guests");
    // let checkIn = getCookie("checkIn");
    // let checkOut = getCookie("checkOut");
    // const today  =  new Date(getDateInDDMMYYY(new Date()));
    // const checkInDateObject = new Date(checkIn);
    // const checkOutDateObject = new Date(checkOut);

    // if(checkInDateObject){
    //   if(checkInDateObject < today){
    //     checkIn = getDateInDDMMYYY(new Date());
    //   }
    // }
    // if(checkOutDateObject){
    //   if(checkInDateObject <= today){
    //     checkOut =  getDateInDDMMYYY(today.setDate(today.getDate() + 1))
    //   }
    // }

    const addressValue = locality || city || "";

    if (addressValue) {
      const addressForInput = this.filterValue(true, addressValue, "+");
      // const addressForLink = this.filterValue(true, addressValue, "+", "-");
      const filteredCity = this.filterValue(true, city, "+", "-");
      const filteredLocality = this.filterValue(true, locality, "+", "-");
      latLng = this.filterValue(false, latLng, "%2C");
      const link = `/search?city=${filteredCity}&locality=${
        locality.toLowerCase() === city.toLowerCase() ? "" : filteredLocality
      }&propertyLatitude=${latLng && latLng[0]}&propertyLongitude=${latLng &&
        latLng[1]}`;
      const { selectedAddress } = this.state;
      this.setState({
        addressValue: titleCase(decodeURIComponent(addressForInput)),
        selectedAddress: {
          ...selectedAddress,
          heading: titleCase(decodeURIComponent(addressForInput)),
          subHeading: titleCase(
            decodeURIComponent(this.filterValue(true, locality, "+"))
          ),
          link
        }
      });
    }
    // if (checkIn && checkOut) {
    //   this.setState({
    //     fromDate: checkIn,
    //     toDate: checkOut
    //   });
    // }
    if (guests) {
      this.setState({
        selectedGuests: { text: `${guests} guests`, value: guests }
      });
    }
  };

  filterValue = (joinFlag = true, value, splitWith, joinWith = " ") => {
    if (value) {
      const splitArray = value.split(splitWith);
      return joinFlag ? splitArray.join(joinWith) : splitArray;
    }
    return "";
  };
  // TODO -- Code To be Removed --- END

  isGoogleCallback = value => {
    return value === "true";
  };

  setStateFromLocalStorage = (fieldKey, callback) => {
    let preStoredValue = localStorage.getItem(fieldKey);
    preStoredValue = preStoredValue === "null" ? "" : preStoredValue;
    if (callback) preStoredValue = callback(preStoredValue);
    if (preStoredValue) this.setState({ [fieldKey]: preStoredValue });
  };

  changeDate = (fromDate, toDate, isDatePickerClose) => {
    let { isGuestDropDownOpen } = this.state;
    if (isDatePickerClose) {
      isGuestDropDownOpen = true;
    }
    this.setState({
      fromDate,
      toDate,
      isDatePickerOpen: false,
      isGuestDropDownOpen
    });
  };

  onAddressSelect = (addressObject, googleFlag = false, isCloseDropDown) => {
    let { isDatePickerOpen } = this.state;
    if (!isCloseDropDown) {
      isDatePickerOpen = true;
    }
    this.setState({
      selectedAddress: addressObject,
      isGoogle: googleFlag,
      probableAddress: {},
      isDatePickerOpen
    });
  };

  onGuestSelect = (guestObject, focusFlag = true) => {
    document.body.classList.remove("overlay-open");
    this.setState({ selectedGuests: guestObject }, () => {
      if (focusFlag) this.node.focus();
    });
  };

  setProbableAddress = probableAddressObject => {
    this.setState({ probableAddress: probableAddressObject });
  };

  onAddressChange = value => {
    this.setState({ addressValue: value, isValidAddress: true });
  };

  handleDropDown = flag => {
    this.setState({ isDropDownOpen: flag });
  };

  checkAddressValidity = addressValue => {
    if (addressValue === "") {
      this.setState({ isValidAddress: false });
    } else {
      this.setState({ isValidAddress: true });
    }
  };

  setSelectedAddress = (addressObject = {}) => {
    this.setState({ selectedAddress: addressObject });
  };

  fetchSearchPage = () => {
    document.body.classList.remove("overlay-open");
    const {
      isGoogle,
      addressValue,
      selectedGuests: guests,
      selectedAddress,
      probableAddress,
      fromDate,
      toDate
    } = this.state;
    if (addressValue === "") {
      this.checkAddressValidity(addressValue);
      return;
    }
    const { searchData } = this.props;
    const addressObject = isEmptyObject(probableAddress)
      ? selectedAddress
      : probableAddress;
    // eslint-disable-next-line
    let { link, heading } = addressObject;
    if (!link) {
      link = `/search?locationsearch=${encodeURIComponent(addressValue)}`;
    }
    const { value: guestValue } = guests;
    const checkIn = fromDate.split("-");
    const checkOut = toDate.split("-");

    const checkInDate = `${checkIn[0]}+${allMonths[checkIn[1]]}+${checkIn[2]}`;
    const checkOutDate = `${checkOut[0]}+${allMonths[checkOut[1]]}+${
      checkOut[2]
    }`;
    let redirectUrl = `${API_URLS.sbtDomain}${link}&checkIn=${checkInDate}&checkOut=${checkOutDate}&guests=${guestValue}&as_from_google=${isGoogle}`;
    // eslint-disable-next-line
    Object.keys(optionalFields).map(field => {
      if (
        !isEmptyObject(addressObject) &&
        (searchData[field] || searchData[field] === 0)
      ) {
        redirectUrl = `${redirectUrl}&${optionalFields[field]}=${searchData[field]}`;
      }
    });

    if (isEmptyObject(addressObject))
      redirectUrl = `${redirectUrl}&location_text=${encodeURIComponent(
        addressValue
      )}&locality=${encodeURIComponent(addressValue)}`; // Create valid URL in case of empty search

    localStorage.setItem("redirectUrl", redirectUrl);
    localStorage.setItem("addressValue", addressValue);
    localStorage.setItem("fromDate", fromDate);
    localStorage.setItem("toDate", toDate);
    localStorage.setItem("selectedGuests", JSON.stringify(guests));
    localStorage.setItem("isGoogle", isGoogle);
    localStorage.setItem("selectedAddress", JSON.stringify(addressObject));
    window.location.href = redirectUrl;
  };

  changeGuestDropDownState = (isGuestDropDownOpen, guestDropDownFocus) => {
    this.setState({ isGuestDropDownOpen, guestDropDownFocus });
  };

  setRefs = node => {
    this.node = node;
  };

  overlayOpen = e => {
    if (this.buttonNode && !this.buttonNode.contains(e.target)) {
      document.body.classList.add("overlay-open");
      if (window.innerHeight < 650) {
        // eslint-disable-next-line
        this.parentNode &&
          this.parentNode.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  overlayClose = e => {
    if (this.overlayNode && this.overlayNode.contains(e.target)) {
      return;
    }
    document.body.classList.remove("overlay-open");
  };

  render() {
    const {
      fetchSearchDataFunc,
      cities,
      searchData = {},
      svgLoaded,
      className,
      noOfHotels,
      getSVG
    } = this.props;
    const {
      selectedGuests,
      addressValue,
      isDropDownOpen,
      isValidAddress,
      isDatePickerOpen,
      guestDropDownFocus,
      fromDate,
      toDate,
      selectedAddress,
      isGuestDropDownOpen
    } = this.state;
    const { suggestions } = searchData;
    // const mobSearchOpen = isDropDownOpen && isMobile;
    // const mobSearchClass = mobSearchOpen ? "mob-search-open" : "";
    return (
      <div
        className={className}
        // eslint-disable-next-line no-return-assign
        ref={countingRef => (this.countingRef = countingRef)}
      >
        <Image
          className="banner-background"
          imgUrl="static/images/banner-background.jpg"
          altText="banner Background"
        />
        <div className="container">
          <div className="title-wrapper">
            {noOfHotels && (
              <Heading tag="h1" type="h1">
                Book a FabHotel -{" "}
                <span className="inline-block guest-name">
                  Choose from {noOfHotels} Budget Hotels in India
                </span>
              </Heading>
            )}
          </div>
          <div
            ref={node => {
              this.overlayNode = node;
            }}
            onFocus={this.overlayOpen}
            className={`${
              !isValidAddress ? "form-error" : ""
            } flex search-wrapper`}
          >
            <div className="search-top">
              <SearchInput
                onAddressSelect={this.onAddressSelect}
                fetchSearchDataFunc={fetchSearchDataFunc}
                cities={cities}
                searchData={suggestions}
                className="header-search"
                getSVG={getSVG}
                setParentSelectedAddress={this.setSelectedAddress}
                changeParentAddress={this.onAddressChange}
                setProbableAddress={this.setProbableAddress}
                addressValue={addressValue}
                isDropDownOpen={isDropDownOpen}
                handleDropDown={this.handleDropDown}
                svgLoaded={svgLoaded}
                isError={!isValidAddress && !isDropDownOpen}
                errorMessage="Please enter a valid address"
              />
              <DatePicker
                changeDate={this.changeDate}
                extendedBookingTime={extendedBookingTime}
                getSVG={getSVG}
                className="header-datepicker"
                svgLoaded={svgLoaded}
                setStateFromLocalStorage={this.setStateFromLocalStorage}
                isDatePickerOpen={isDatePickerOpen}
              />
              <DropDown
                handleTextView={text => text.split(" ")[0]}
                selectedItem={selectedGuests}
                options={guestDropDownArray}
                onSelect={this.onGuestSelect}
                label="Guests"
                className="header-dropdown"
                getSVG={getSVG}
                modalHeading="Select the no. of guests"
                modalOnMobile
                tabIndex="0"
                guestDropDownFocus={guestDropDownFocus}
                isGuestDropDownOpen={isGuestDropDownOpen}
                changeGuestDropDownState={this.changeGuestDropDownState}
              />
            </div>
            <div
              ref={node => {
                this.buttonNode = node;
              }}
              className="search-bottom"
            >
              <Button
                onClick={() =>
                  this.fetchSearchPage({
                    guests: selectedGuests,
                    address: selectedAddress,
                    from: fromDate,
                    to: toDate
                  })
                }
                setRefs={this.setRefs}
                tabIndex="0"
              >
                {" "}
                Search{" "}
              </Button>
            </div>
          </div>
          <RecentSearch getSVG={getSVG} />
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    homePage: {
      searchBoxReducer: { searchData }
    }
  } = state;
  return {
    searchData
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearchDataFunc: (searchKeyword, callback) => {
    dispatch(fetchSearchData({ value: searchKeyword, callback }));
  }
});

SearchBox.propTypes = {
  fetchSearchDataFunc: PropTypes.func.isRequired,
  searchData: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  cities: PropTypes.instanceOf(Object),
  getSVG: PropTypes.func,
  svgLoaded: PropTypes.bool,
  noOfHotels: PropTypes.string.isRequired
};

SearchBox.defaultProps = {
  searchData: {},
  className: "",
  cities: [],
  getSVG: () => {},
  svgLoaded: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledHOC(SearchBox, styles));
