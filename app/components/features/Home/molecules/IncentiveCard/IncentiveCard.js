/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Heading from "components/common/atoms/Heading";
import styles from "./IncentiveCard.style";

const IncentiveCard = props => {
  const { className, cardData, getSVG } = props;
  const { name, description, img } = cardData;
  const Svg = getSVG(img);
  return (
    <div className={className}>
      <Svg />
      <Heading tag="h4" type="h3">
        {name}
      </Heading>
      <small>{description}</small>
    </div>
  );
};

IncentiveCard.propTypes = {
  getSVG: PropTypes.func,
  cardData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired
};

IncentiveCard.defaultProps = {
  getSVG: () => {}
};

export default styledHOC(IncentiveCard, styles);
