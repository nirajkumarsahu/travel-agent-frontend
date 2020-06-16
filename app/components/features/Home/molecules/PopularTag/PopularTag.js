import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import Anchor from "components/common/atoms/Anchor";
import Span from "components/common/atoms/Span";

import styles from "./PopularTag.styles";

const PopularTag = props => {
  const { className, title, data = [] } = props;
  const textGA =
    // eslint-disable-next-line eqeqeq
    title == "Explore by Interest"
      ? "Homepage Explore Interest Tags Clicked"
      : "Homepage Explore City Tags Clicked";
  const tagData = data.map(tag => {
    return (
      <Anchor
        to={tag.url}
        handleLinkClick={() =>
          pushToDataLayer("HomePage", `${textGA}`, `${tag.url}`)
        }
      >
        {tag.name}
      </Anchor>
    );
  });
  return (
    <div className={className}>
      <Span tag="strong" popularTitle>
        {title}
      </Span>
      {tagData}
    </div>
  );
};

PopularTag.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
};

export default styledHOC(PopularTag, styles);
