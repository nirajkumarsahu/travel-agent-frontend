import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Paragraph from "components/common/atoms/Paragraph";
import Iframe from "components/common/atoms/Iframe";
import Anchor from "components/common/atoms/Anchor";
import { getCurrentDate } from "lib/utils";
import styles from "./GuestVideoTile.style";

const GuestReviewTile = props => {
  const {
    className,
    data: {
      url,
      userName,
      reviewedOn,
      propertyName,
      propertyCity,
      propertyUrl,
      cityUrl
    }
  } = props;
  return (
    <div className={className}>
      <div className="inner-container">
        <Iframe url={url} width="600" height="320" className="video-wrapper" />
        <div className="flex user-details vertical-center ">
          <span className="user-letter">{userName[0]}</span>
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
              Reviewed on{getCurrentDate(reviewedOn)}
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
