/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

import Anchor from "components/common/atoms/Anchor";
import Image from "components/common/atoms/Image";
import styledHOC from "lib/styledHOC";
import styles from "./PromotionWidget.style";

const PromotionWidget = props => {
  const {
    className,
    data: { action: { url, text, textColor } = {}, img, subTitle, title }
  } = props;

  return (
    <div className={className}>
      <Anchor to={url}>
        <Image imgUrl={img} altText="Promotion Widget" />
        <div className="banner-text">
          {title && title.text && (
            <h4 style={{ color: title.color }}>{title.text}</h4>
          )}
          {subTitle && subTitle.text && (
            <span className="sub-title" style={{ color: subTitle.color }}>
              {subTitle.text}
            </span>
          )}
          {text && (
            <span className="know-more" style={{ color: textColor }}>
              {text}
            </span>
          )}
        </div>
      </Anchor>
    </div>
  );
};

PromotionWidget.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired
};

export default styledHOC(PromotionWidget, styles);
