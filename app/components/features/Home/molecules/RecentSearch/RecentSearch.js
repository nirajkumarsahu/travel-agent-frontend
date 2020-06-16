/* eslint-disable no-unreachable */
import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Anchor from "components/common/atoms/Anchor";
import Span from "components/common/atoms/Span";
import Heading from "components/common/atoms/Heading";
import styles from "./RecentSearch.style";

const RecentSearch = props => {
  const { className, getSVG, url } = props;
  const RightChevron = getSVG("rightChevron");
  return null;
  return (
    <div className={`${className} recent-items`}>
      <Heading type="h3" tag="h2">
        Recent Searches
      </Heading>

      <div className="recent-items-wrap flex vertical-center">
        <Anchor className="search-item" to={url}>
          <Span tag="strong">Lokhandwala, Mumbai</Span>
          <Span tag="span">11Jun - 13Jun, 2 Guests</Span>
          <RightChevron />
        </Anchor>

        <Anchor className="search-item" to={url}>
          <Span tag="strong">Lokhandwala, Mumbai</Span>
          <Span tag="span">11Jun - 13Jun, 2 Guests</Span>
          <RightChevron />
        </Anchor>
      </div>
    </div>
  );
};

RecentSearch.propTypes = {
  getSVG: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default styledHOC(RecentSearch, styles);
