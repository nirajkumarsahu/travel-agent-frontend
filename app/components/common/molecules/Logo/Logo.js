import React from "react";
import PropTypes from "prop-types";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import StyledLogo from "./Logo.style";

const Logo = props => {
  // eslint-disable-next-line react/prop-types
  const { getSVG, pageName } = props;
  const SvgLogo = getSVG("fabLogo");
  return (
    <StyledLogo
      GEventInfo={{ id: 1 }}
      handleLinkClick={() =>
        pushToDataLayer(`Header (${pageName})`, "Main Logo Clicked")
      }
      className="inline-block header-logo"
      to="/"
    >
      <SvgLogo />
    </StyledLogo>
  );
};

Logo.propTypes = {
  getSVG: PropTypes.func.isRequired
};

export default Logo;
