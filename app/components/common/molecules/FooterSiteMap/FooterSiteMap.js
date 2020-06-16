import React from "react";
import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import PropTypes from "prop-types";
import Anchor from "components/common/atoms/Anchor";
import Heading from "components/common/atoms/Heading";
import styles from "./FooterSiteMap.style";

const FooterSiteMap = props => {
  const { className, anchorList, headingText, pageName } = props;
  const siteMapAnchor = anchorList.map(anchorListItem => (
    <li className="hello">
      <Anchor
        target="_blank"
        rel="noopener"
        to={anchorListItem.url}
        handleLinkClick={() =>
          pushToDataLayer(
            `Footer (${pageName})`,
            `${anchorListItem.anchorText} Clicked`,
            `${anchorListItem.url}`
          )
        }
      >
        {anchorListItem.anchorText}
      </Anchor>
    </li>
  ));
  return (
    <div className={className}>
      <Heading tag="h4" type="h5">
        {headingText}
      </Heading>
      <ul className={className}>{siteMapAnchor}</ul>
    </div>
  );
};

FooterSiteMap.propTypes = {
  className: PropTypes.string,
  headingText: PropTypes.string.isRequired,
  anchorList: PropTypes.instanceOf(Object).isRequired
};

FooterSiteMap.defaultProps = {
  className: ""
};

export default styledHOC(FooterSiteMap, styles);
