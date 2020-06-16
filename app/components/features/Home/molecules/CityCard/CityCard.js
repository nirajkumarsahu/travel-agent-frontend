import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import Image from "components/common/atoms/Image";
import Anchor from "components/common/atoms/Anchor";
import { toCommas } from "lib/utils";
import styles from "./CityCard.style";

const CitiesCard = props => {
  const { className, cardData: { name, img, avgPrice, url } = {} } = props;

  return (
    <div className={className}>
      <Anchor
        to={url}
        handleLinkClick={() =>
          pushToDataLayer(
            `Homepage`,
            `Homepage Quick Search City Clicked`,
            `${name}`
          )
        }
      >
        {/* <img src={img} alt={url} /> */}
        <Image imgUrl={img} altText={url} />
        <span className="hotel-details">
          <span className="hotel-location">{name}</span>
          <span className="price">
            Avg. Price: <strong>&#8377;{toCommas(avgPrice)}</strong>
          </span>
        </span>
      </Anchor>
    </div>
  );
};

CitiesCard.propTypes = {
  cardData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired
};

export default styledHOC(CitiesCard, styles);
