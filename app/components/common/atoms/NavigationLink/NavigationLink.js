import React from "react";
import PropTypes from "prop-types";

import {
  StyledNavigationButton,
  StyledNavigationLink
} from "./NavigationLink.style";

const NavigationLink = props => {
  const { name, url, getSVG, styleType } = props;
  const NavigationIcon = getSVG("navPointer");
  const NavigationType =
    styleType === "button" ? StyledNavigationButton : StyledNavigationLink;
  return (
    <NavigationType url={url}>
      <span className="nav-icon inline-block">
        <NavigationIcon className="icon" />
      </span>
      {name}
    </NavigationType>
  );
};

NavigationLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  getSVG: PropTypes.func,
  styleType: PropTypes.string
};

NavigationLink.defaultProps = {
  getSVG: () => {},
  styleType: ""
};

export default NavigationLink;
