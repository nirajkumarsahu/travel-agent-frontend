import React from "react";
import PropTypes from "prop-types";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import styledHOC from "lib/styledHOC";
import Anchor from "components/common/atoms/Anchor";
import styles from "./HeaderLinks.style";

const HeaderLinks = props => {
  // eslint-disable-next-line react/prop-types
  const { className, getSVG, helpLineNumber, pageName } = props;
  const SvgPhone = getSVG("phone");
  const SvgMobile = getSVG("mobile");

  return (
    <div className={`${className} flex`}>
      <Anchor
        to="/corporate-enquiry"
        handleLinkClick={() =>
          pushToDataLayer(`Header (${pageName})`, "Corporate Enquiry Clicked")
        }
      >
        Corporate{" "}
      </Anchor>
      <Anchor
        to="/franchise-enquiry"
        handleLinkClick={() =>
          pushToDataLayer(`Header (${pageName})`, "Franchisee Clicked")
        }
      >
        Franchise
      </Anchor>
      <Anchor to="/refer-and-earn">Refer</Anchor>
      <Anchor
        className="phone-icon flex vertical-center"
        to={`tel:${helpLineNumber}`}
        handleLinkClick={() =>
          pushToDataLayer(`Header (${pageName})`, "Support Number Clicked")
        }
      >
        <span className="detail-tooltip">
          Need Help? Give us a call!
          <span>{helpLineNumber}</span>
        </span>
        <SvgPhone className="phone icon" />
      </Anchor>
      <Anchor to="/hotel-booking-app" className="mob-icon vertical-center flex">
        <span className="detail-tooltip">Download our app!</span>
        <SvgMobile className="mob icon" />
      </Anchor>
    </div>
  );
};

HeaderLinks.propTypes = {
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  helpLineNumber: PropTypes.string.isRequired
};

export default styledHOC(HeaderLinks, styles);
