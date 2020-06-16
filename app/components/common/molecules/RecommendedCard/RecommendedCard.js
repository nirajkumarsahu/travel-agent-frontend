import React from "react";
import StartingPrice from "components/common/atoms/StartingPrice";
import Heading from "components/common/atoms/Heading";
import ReviewRating from "components/common/atoms/ReviewRating";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import IconText from "components/common/atoms/IconText";
import Image from "components/common/atoms/Image";
import Span from "components/common/atoms/Span";
import Anchor from "components/common/atoms/Anchor";
import styles from "./RecommendedCard.style";

const RecommendedCard = props => {
  const { className, cardData, getSVG } = props;
  const {
    hotelname,
    location,
    imgurl,
    review,
    rating,
    startingFrom,
    startingPrice
  } = cardData;
  const SvgmapPin = getSVG("mapPin");
  return (
    <div className={`${className}`}>
      <Anchor
        className="hotel-link"
        to="www.google.com"
        target="_blank"
        rel="noreferrer"
      />
      <Image imgUrl={imgurl} altText={hotelname} />
      <div className="hotel-details flex">
        <Heading tag="h3" type="h2">
          {hotelname}
        </Heading>

        <div className="rating-and-price">
          <SvgmapPin />
          <IconText className="location" nameText={location} />
          <ReviewRating review={review} ratings={rating} />
        </div>

        <div className="price-per-night">
          <Span tag="span" price>
            {startingFrom}
          </Span>
          <StartingPrice price={startingPrice} />
        </div>
      </div>
    </div>
  );
};

RecommendedCard.propTypes = {
  className: PropTypes.string,
  cardData: PropTypes.instanceOf(Object).isRequired,
  getSVG: PropTypes.string.isRequired
};

RecommendedCard.defaultProps = {
  className: ""
};

export default styledHOC(RecommendedCard, styles);
