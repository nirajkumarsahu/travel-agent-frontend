import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import styles from "./BrandFeature.style";

const svgMapper = {
  "fabhotel-best-review-icon": "topReviewedHotels",
  "fabhotel-prime-location-icon": "centrallyLocated",
  "fabhotel-wifi-fab": "freeWifiYellow",
  "fabexpress-low-price": "lowestPrice",
  "fabexpress-bed-icon": "hygenicRooms",
  "fabexpress-wifi-fab": "freeWifiRed",
  "fabescape-umbrella-icon": "spaciousRoom",
  "fabescape-food-icon": "dayNightService",
  "fabescape-hospitality-icon": "hospitableStaff",
  "fabhotelprime-interior-icon": "interprevArrowiorPrime",
  "fabhotelprime-equipped-icon": "equippedPrime",
  "fabhotelprime-trained-staff": "trainedStaffPrime"
};

const BrandFeature = props => {
  const { className, svgKey, text, getSVG } = props;
  const FeatureIcon = getSVG(svgMapper[svgKey]);

  return (
    <li className={className}>
      <FeatureIcon /> {text}
    </li>
  );
};

BrandFeature.propTypes = {
  svgKey: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired
};

BrandFeature.defaultProps = {
  className: ""
};

export default styledHOC(BrandFeature, styles);
