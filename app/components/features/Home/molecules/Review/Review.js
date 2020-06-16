import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import Paragraph from "components/common/atoms/Paragraph";
import Anchor from "components/common/atoms/Anchor";
import { getCurrentDate } from "lib/utils";

import styles from "./Review.style";

const Review = props => {
  const {
    className,
    getSVG,
    cardData: {
      id,
      body,
      userName,
      propertyName,
      reviewedOn,
      propertyCity,
      propertyUrl,
      cityUrl
    } = {}
  } = props;

  const SvgUser = getSVG("userAvatar");
  return (
    <div className={className}>
      <div key={id} className="child-div">
        <div className="review-container">
          <Paragraph className="description" type="type1">
            {body}
          </Paragraph>
          <SvgUser />
          <Paragraph className="user" type="type4">
            {userName}
          </Paragraph>

          <Paragraph className="stay-detail" type="type6">
            <Anchor to={propertyUrl} target="_blank">
              {propertyName}
            </Anchor>
            ,{" "}
            <Anchor to={cityUrl} target="_blank">
              {propertyCity}
            </Anchor>
          </Paragraph>

          <Paragraph className="stay-detail" type="type6">
            {getCurrentDate(reviewedOn)}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  className: PropTypes.string.isRequired,
  cardData: PropTypes.instanceOf(Object).isRequired,
  getSVG: PropTypes.func.isRequired
};

export default styledHOC(Review, styles);
