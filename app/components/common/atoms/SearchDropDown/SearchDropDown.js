/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";

import StyledSearchDropDown from "./SearchDropDown.style";

const locationSvgMapper = {
  "Business Park": "businessPark",
  Property: "property",
  "Metro Station": "metroStation",
  "Railway Station": "railwayStation",
  Airport: "airport",
  Hospital: "hospital",
  location: "mapPin"
};

const SearchDropDown = props => {
  const {
    className,
    optionArray = [],
    onSelect,
    selectedNode,
    googleTag,
    getSVG
  } = props;
  if ((optionArray || []).length === 0) return null;
  return (
    <StyledSearchDropDown className={`${className} dropdown-effect`}>
      <ul>
        {optionArray &&
          optionArray.map((item, index) => {
            const { heading, subHeading, availableHotels, enty } = item;
            const SvgLocation = getSVG(locationSvgMapper[enty] || "mapPin");
            return (
              <li
                value={heading}
                onClick={() => onSelect(item)}
                className={selectedNode === index && "selected"}
              >
                <span className="inline-block list">
                  <span className="inline-block map-pin">
                    <SvgLocation className="icon" />
                  </span>

                  <span className="heading">{heading}</span>
                  {availableHotels && (
                    <span className="count-location">
                      {availableHotels} Fabhotels
                    </span>
                  )}
                  <span className="sub-heading">{subHeading}</span>
                </span>
              </li>
            );
          })}
      </ul>
      {googleTag && (
        <img
          src="static/images/powered_by_google_on_white.png"
          alt="powered-by-google"
          className="google-image"
        />
      )}
    </StyledSearchDropDown>
  );
};

SearchDropDown.propTypes = {
  onSelect: PropTypes.func,
  className: PropTypes.string,
  optionArray: PropTypes.instanceOf(Object),
  selectedNode: PropTypes.number.isRequired,
  googleTag: PropTypes.number,
  getSVG: PropTypes.func
};

SearchDropDown.defaultProps = {
  onSelect: () => {},
  className: "",
  optionArray: [],
  googleTag: false,
  getSVG: () => {}
};

export default SearchDropDown;
