import React from "react";
import Heading from "components/common/atoms/Heading";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Paragraph from "components/common/atoms/Paragraph";
import Anchor from "components/common/atoms/Anchor";
import styles from "./FooterWhiteBox.style";

const FooterWhiteBox = props => {
  const { className } = props;
  return (
    <div className={`${className} flex`}>
      <div className="box-content">
        <Heading tag="h2" type="h4">
          Partner with us and grow your Hotel business!
        </Heading>
        <Paragraph type="type2">
          We increase Occupancy, lower your Marketing Costs, and help provide
          Fabulous stays. More than 500 Hotel owners and 20 lakh customers
          believe in us
        </Paragraph>
      </div>

      <Anchor
        className="anchor-button"
        to="https://www.fabhotels.com/franchise-enquiry"
      >
        Be a Franchise
      </Anchor>
    </div>
  );
};

FooterWhiteBox.propTypes = {
  className: PropTypes.string
};

FooterWhiteBox.defaultProps = {
  className: ""
};

export default styledHOC(FooterWhiteBox, styles);
