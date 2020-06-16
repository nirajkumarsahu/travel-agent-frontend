import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import RecommendedCard from "components/common/molecules/RecommendedCard";
import styles from "./RecommendedSec.style";
import apiData from "./MockData";

const RecommendedSec = props => {
  const { className } = props;

  const listItems = apiData.map(cardData => (
    <RecommendedCard cardData={cardData} />
  ));
  return <div className={`${className} flex`}>{listItems}</div>;
};

RecommendedSec.propTypes = {
  className: PropTypes.string
};

RecommendedSec.defaultProps = {
  className: ""
};

export default styledHOC(RecommendedSec, styles);
