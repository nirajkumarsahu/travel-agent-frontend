/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import Anchor from "components/common/atoms/Anchor";
import Image from "components/common/atoms/Image";
import Span from "components/common/atoms/Span";
import Heading from "components/common/atoms/Heading";

import styles from "./BlogCard.style";

const BlogCards = props => {
  const { className, img, url, landmark, title, date } = props;
  const listItems = landmark.map(elm => (
    <Span tag="span" tagInfo>
      {elm}
    </Span>
  ));
  return (
    <Anchor className={className} to={url}>
      <Image imgUrl={img} altText="travel" />
      <div className="caption-wrapper">
        <div className="tag-wrapper">{listItems}</div>
        <Heading tag="h3" type="h3">
          {title}
        </Heading>
        <Span tag="span" date>
          {date}
        </Span>
      </div>
    </Anchor>
  );
};

BlogCards.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  landmark: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default styledHOC(BlogCards, styles);
