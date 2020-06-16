import React from "react";
import PropTypes from "prop-types";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";

import Anchor from "components/common/atoms/Anchor";
import Image from "components/common/atoms/Image";
import styledHOC from "lib/styledHOC";
import styles from "./DealCard.style";

const DealCard = props => {
  const {
    className,
    pageName,
    cardData: { url, img }
  } = props;
  return (
    <div className={className}>
      <Anchor
        to={url}
        className="inline-block"
        handleLinkClick={() =>
          pushToDataLayer(
            `Deals (${pageName})`,
            `Homepage Deals Banner Clicked`,
            `${url}`
          )
        }
      >
        <Image imgUrl={img} altText="Deals" />
        {/* <img src={img} alt="deals" /> */}
      </Anchor>
    </div>
  );
};

DealCard.propTypes = {
  cardData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired
};

export default styledHOC(DealCard, styles);
