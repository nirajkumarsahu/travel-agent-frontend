import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Anchor from "components/common/atoms/Anchor";
import Heading from "components/common/atoms/Heading";
import Span from "components/common/atoms/Span";
import Paragraph from "components/common/atoms/Paragraph";
import styles from "./FooterHotelsLink.style";

const FooterHotelsLink = props => {
  const { className, compData: { seo, title, description } = {} } = props;
  const locationList = (((seo || [])[0] || {}).data || []).map(location => {
    return (
      <li>
        <Anchor target="_blank" rel="noopener" to={location.url}>
          {location.url === "/hotels-near-me" ? "" : "Hotels in "}
          <Span tag="strong">{location.subTitle}</Span>
        </Anchor>
      </li>
    );
  });

  const locationHeading = ((seo || [])[0] || {}).title || "";
  return (
    <div className={className}>
      <div className="hotel-locations">
        <Heading tag="h3" type="h3">
          {locationHeading}
        </Heading>

        <ul>{locationList}</ul>
      </div>

      <div className="hotel-desc">
        <Heading tag="h2" type="h3">
          {title}
        </Heading>
        <Paragraph type="type2">{description}</Paragraph>
      </div>
      <div className="copyright">
        <p>&#9400; 2019 Casa2 Stays Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

FooterHotelsLink.propTypes = {
  className: PropTypes.string,
  compData: PropTypes.string.isRequired
};

FooterHotelsLink.defaultProps = {
  className: ""
};

export default styledHOC(FooterHotelsLink, styles);
