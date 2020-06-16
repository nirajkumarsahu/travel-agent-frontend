import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Input from "components/common/atoms/Input";
import SearchDropDown from "components/common/atoms/SearchDropDown";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ENTER_KEY,
  TAB_KEY
} from "global/constants";
import {
  FAB_SEARCH,
  GOOGLE_SEARCH,
  DEFAULT_SEARCH,
  placeDetailsFields,
  countryRestrictions
} from "./SearchInput.constants";
import StyledSearchInput from "./SearchInput.style";

class SearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.service = {};
    const { cities } = props;
    this.state = {
      suggestionArray: cities || [],
      isGoogleSuggestion: false,
      selectedAddress: {},
      addressListNode: -1
    };
    this.node = React.createRef();
    this.textInput = React.createRef();
    this.googleNode = React.createRef();
  }

  componentDidMount() {
    // eslint-disable-next-line
    this.service.autocomplete = new google.maps.places.AutocompleteService();
    const googleNode = this.googleNode.current;
    // eslint-disable-next-line
    this.service.placeDetails = new google.maps.places.PlacesService(
      googleNode
    );
    document.addEventListener("mousedown", this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, false);
  }

  updateSuggestionArray = addressValue => {
    const { cities, searchData, setProbableAddress } = this.props;

    if (addressValue && searchData && searchData.length === 0) {
      this.service.autocomplete.getPlacePredictions(
        {
          input: addressValue,
          types: ["geocode"],
          componentRestrictions: { country: countryRestrictions }
        },
        this.getGoogleSuggestions
      );
      return;
    }
    const type =
      searchData && searchData.length > 0 && addressValue !== ""
        ? FAB_SEARCH
        : DEFAULT_SEARCH;
    const suggestionArray = this.getSuggestionArray(
      addressValue,
      cities,
      searchData,
      type
    );
    this.setState({ suggestionArray, isGoogleSuggestion: false }, () => {
      if (suggestionArray && suggestionArray[0])
        setProbableAddress((suggestionArray && suggestionArray[0]) || {});
    });
  };

  getGoogleSuggestions = predictions => {
    let predictionArray = [];
    const {
      addressValue,
      cities,
      setProbableAddress,
      setParentSelectedAddress
    } = this.props;
    let googleFlag = true;
    // eslint-disable-next-line
    if (predictions === null) {
      googleFlag = false;
    } else {
      predictionArray = this.getSuggestionArray(
        addressValue,
        cities,
        predictions,
        GOOGLE_SEARCH
      );
      googleFlag = true;
    }
    this.setState(
      {
        suggestionArray: predictionArray,
        isGoogleSuggestion: googleFlag
      },
      () => {
        if (predictionArray && predictionArray[0]) {
          this.getGooglePlaceDetails(
            predictionArray[0].id,
            setProbableAddress,
            predictionArray[0],
            true,
            true,
            false
          );
        } else {
          setProbableAddress({});
          setParentSelectedAddress({}); // to set the selected address in parent
        }
      }
    );
  };

  addressChange = (value, newSearch = true) => {
    const { fetchSearchDataFunc } = this.props;
    if (value && newSearch) {
      fetchSearchDataFunc(value, () => {
        this.updateSuggestionArray(value);
      });
    } else if (newSearch) {
      this.updateSuggestionArray(value);
    }
  };

  handleClickOutside = e => {
    const { handleDropDown } = this.props;
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    // outside click
    handleDropDown(false);
    this.setState({ addressListNode: -1 });
  };

  onSelect = addressObj => {
    this.setState({ selectedAddress: addressObj }, () => {
      this.handleSelectedAddress();
    });
  };

  getGooglePlaceDetails = (
    placeId,
    callback,
    addressObj,
    dropDownFlag = false,
    newSearch = true,
    changeInputFlag,
    isCloseDropDown = false
  ) => {
    this.service.placeDetails.getDetails(
      {
        fields: placeDetailsFields,
        placeId
      },
      (placeResult, status) => {
        this.refineSelectedAddress(
          placeResult,
          status,
          callback,
          addressObj,
          dropDownFlag,
          newSearch,
          changeInputFlag,
          isCloseDropDown
        );
      }
    );
  };

  handleSelectedAddress = (
    dropDownFlag = false,
    newSearch = true,
    isCloseDropDown = false
  ) => {
    const { onAddressSelect } = this.props;
    const { isGoogleSuggestion, selectedAddress } = this.state;
    const { heading, id } = selectedAddress;
    if (isGoogleSuggestion) {
      this.getGooglePlaceDetails(
        id,
        onAddressSelect,
        selectedAddress,
        dropDownFlag,
        newSearch,
        true,
        isCloseDropDown
      );
      return;
    }
    this.onInputChange(heading, dropDownFlag, newSearch);
    onAddressSelect(selectedAddress, isGoogleSuggestion, isCloseDropDown);
  };

  getSuggestionArray = (addressValue, cities, searchData, searchType) => {
    let refinedData = [];
    switch (searchType) {
      case FAB_SEARCH:
        refinedData = searchData.map(searchItem => {
          const {
            description: heading,
            subHeading,
            turl: link,
            enty
          } = searchItem;
          return { heading, subHeading, link, id: "", enty };
        });
        break;
      case GOOGLE_SEARCH:
        refinedData = searchData.map(searchItem => {
          const {
            structured_formatting: searchObject,
            place_id: placeId
          } = searchItem;
          const {
            main_text: heading,
            secondary_text: subHeading
          } = searchObject;
          return { heading, subHeading, link: "", id: placeId };
        });
        break;
      default:
        refinedData =
          cities &&
          cities.map(city => {
            const { name: heading, availableHotels } = city;
            return {
              heading,
              subHeading: "",
              link: `/search?locationsearch=${heading}&city=${heading}&nearCity=${heading}`,
              id: "",
              availableHotels
            };
          });
    }
    return refinedData;
  };

  refineSelectedAddress = (
    placeResult,
    status,
    callback,
    addressObj,
    dropDownFlag,
    newSearch,
    changeInputFlag = false,
    isCloseDropDown = false
  ) => {
    // eslint-disable-next-line
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      return;
    }
    const { isGoogleSuggestion } = this.state;
    const { heading } = addressObj;
    const {
      geometry: { location },
      address_components: addressComps,
      formatted_address: formattedAdd
    } = placeResult;
    const lat = location.lat();
    const lng = location.lng();
    let cityName = "";
    let locality = "";
    for (let i = 0; i < addressComps.length; i++) {
      const addressType = addressComps[i].types[0];
      switch (addressType) {
        case "locality":
          cityName = addressComps[i].short_name;
          break;
        case "administrative_area_level_2":
          cityName = addressComps[i].long_name;
          break;
        default:
          break;
      }
    }
    if (formattedAdd) {
      const formattedAddArray = formattedAdd.split(",");
      if (formattedAddArray[0] !== cityName) {
        [locality] = formattedAddArray;
      } else {
        locality = cityName;
      }
    } else {
      locality = addressComps[0].short_name;
    }
    cityName = cityName.replace(/\s+/g, "-");
    locality = locality.replace(/\s+/g, "-");
    const link = `/search?city=${cityName}&locality=${
      locality.toLowerCase() === cityName.toLowerCase() ? "" : locality
    }&propertyLatitude=${lat}&propertyLongitude=${lng}`;
    const refinedAddress = {
      ...addressObj,
      link
    };
    if (changeInputFlag) this.onInputChange(heading, dropDownFlag, newSearch);
    callback(refinedAddress || {}, isGoogleSuggestion, isCloseDropDown);
  };

  onInputChange = (value, dropDownFlag = true, newSearch) => {
    const { changeParentAddress, handleDropDown } = this.props;
    changeParentAddress(value);
    handleDropDown(dropDownFlag);
    if (value === "") {
      this.setState({ addressListNode: -1 });
    }
    this.addressChange(value, newSearch);
  };

  onKeyDown = e => {
    const { keyCode } = e;
    const { addressListNode, suggestionArray } = this.state;
    const { isDropDownOpen, handleDropDown } = this.props;
    switch (keyCode) {
      case ARROW_DOWN_KEY:
        if (isDropDownOpen && suggestionArray.length > addressListNode + 1) {
          this.setState(
            {
              addressListNode: addressListNode + 1,
              selectedAddress: suggestionArray[addressListNode + 1]
            },
            () => {
              this.handleSelectedAddress(true, false, true);
            }
          );
        }
        break;
      case ARROW_UP_KEY:
        if (isDropDownOpen && addressListNode > 0) {
          this.setState(
            {
              addressListNode: addressListNode - 1,
              selectedAddress: suggestionArray[addressListNode - 1]
            },
            () => {
              this.handleSelectedAddress(true, false, true);
            }
          );
        }
        break;
      case ENTER_KEY:
        this.handleSelectedAddress(false, false);
        break;
      case TAB_KEY:
        handleDropDown(false);
        break;
      default:
        break;
    }
  };

  clearField = e => {
    e.stopPropagation();
    document.getElementById("autocomplete").value = "";
    document.getElementById("autocomplete").focus();
  };

  render() {
    const {
      addressValue,
      getSVG,
      isDropDownOpen,
      className,
      handleDropDown,
      mobSearchOpen,
      isError,
      errorMessage
    } = this.props;
    const { suggestionArray, addressListNode, isGoogleSuggestion } = this.state;
    const SearchIcon = getSVG("search");
    return (
      <StyledSearchInput
        ref={node => {
          this.node = node;
        }}
        className={`${className} ${mobSearchOpen ? "mob-open-wrapper" : ""}`}
      >
        <div ref={this.googleNode} />
        <SearchIcon />
        <Input
          setRef={this.textInput}
          onChange={e =>
            this.onInputChange(e.target.value === " " ? "" : e.target.value)
          }
          id="autocomplete"
          placeholder="Enter a City, Locality or Landmark"
          name="Enter a City, Locality or Landmark"
          type="text"
          value={addressValue}
          onFocus={e => this.onInputChange(e.target.value)}
          onKeyDown={e => this.onKeyDown(e)}
          className={`top-search-input ${
            mobSearchOpen ? "mobile-search-open" : ""
          }`}
          autoComplete={false}
          isError={isError}
          errorMessage={errorMessage}
        />
        {addressValue ? (
          <button
            className="close"
            type="button"
            onClick={e => {
              this.clearField(e);
            }}
          >
            <span className="icon bar1" />
            <span className="icon bar2" />
          </button>
        ) : (
          ""
        )}
        {mobSearchOpen && (
          <button
            className="cancel-button"
            onClick={() => handleDropDown(false)}
            type="button"
          >
            Cancel
          </button>
        )}
        {isDropDownOpen && (
          <SearchDropDown
            optionArray={suggestionArray}
            onSelect={this.onSelect}
            handleDropDown={handleDropDown}
            selectedNode={addressListNode}
            googleTag={isGoogleSuggestion}
            getSVG={getSVG}
            className={`${mobSearchOpen ? "mob-dropdown-open" : ""}`}
          />
        )}
      </StyledSearchInput>
    );
  }
}

SearchInput.propTypes = {
  onAddressSelect: PropTypes.func.isRequired,
  addressValue: PropTypes.string.isRequired,
  changeParentAddress: PropTypes.func.isRequired,
  setParentSelectedAddress: PropTypes.func.isRequired,
  cities: PropTypes.instanceOf(Object),
  fetchSearchDataFunc: PropTypes.func.isRequired,
  searchData: PropTypes.instanceOf(Object),
  getSVG: PropTypes.func,
  className: PropTypes.string,
  handleDropDown: PropTypes.func.isRequired,
  isDropDownOpen: PropTypes.bool.isRequired,
  mobSearchOpen: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  setProbableAddress: PropTypes.func
};

SearchInput.defaultProps = {
  cities: [],
  searchData: [],
  getSVG: () => {},
  className: "",
  isError: false,
  setProbableAddress: () => {}
};

export default SearchInput;
