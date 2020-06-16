import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Paragraph from "components/common/atoms/Paragraph";
import RatingValueDark from "components/common/atoms/RatingValueDark";
import Anchor from "components/common/atoms/Anchor";
import { getCurrentDate } from "lib/utils";
import styles from "./GuestReviewTile.style";

const GuestReviewTile = props => {
  const {
    className,
    data: {
      body,
      userName,
      reviewedOn,
      starRating,
      propertyName,
      propertyCity,
      propertyUrl,
      cityUrl
    }
  } = props;

  return (
    <div className={className}>
      <div className="inner-container">
        <Paragraph type="type10" isReadMore charcterLimit={200}>
          {body}
        </Paragraph>

        <div className="flex user-details vertical-center ">
          <RatingValueDark rateValue={starRating} className="review-rating" />
          <div className="user-name-location">
            <Paragraph>{userName}</Paragraph>
            <span className="user-loc">
              Stayed at{" "}
              <Anchor to={propertyUrl} target="_blank">
                {propertyName}
              </Anchor>
              ,
              <Anchor to={cityUrl} target="_blank">
                {" "}
                &nbsp;{propertyCity}
              </Anchor>
            </span>
            <span className="user-visited-date">
              Reviewed on {getCurrentDate(reviewedOn)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

GuestReviewTile.propTypes = {
  className: PropTypes.string,
  data: PropTypes.instanceOf(Object).isRequired
};

GuestReviewTile.defaultProps = {
  className: ""
};

export default styledHOC(GuestReviewTile, styles);
