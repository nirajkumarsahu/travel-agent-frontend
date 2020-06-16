import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Anchor from "components/common/atoms/Anchor";
import Heading from "components/common/atoms/Heading";
import Span from "components/common/atoms/Span";
import Paragraph from "components/common/atoms/Paragraph";
import styles from "./FooterHotelsLinkResponsive.style";

const FooterHotelsLinkResponsive = props => {
  const { className, compData: { seo, title, description } = {} } = props;
  const locationList = (((seo || [])[0] || {}).data || []).map(location => {
    return (
      <li>
        <Anchor target="_blank" rel="noopener" to={location.url}>
          {location.url === "/hotels-near-me" ? (
            ""
          ) : (
            <span className="hotels-in">Hotels in </span>
          )}
          <Span tag="strong">{location.subTitle}</Span>
        </Anchor>
      </li>
    );
  });

  const locationHeading = ((seo || [])[0] || {}).title || "";
  return (
    <div className={className}>
      <div className="hotel-locations">
        <Heading tag="h3" type="h3" className="hidden-phone">
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
    </div>
  );
};

FooterHotelsLinkResponsive.propTypes = {
  className: PropTypes.string,
  compData: PropTypes.string.isRequired
};

FooterHotelsLinkResponsive.defaultProps = {
  className: ""
};

export default styledHOC(FooterHotelsLinkResponsive, styles);
