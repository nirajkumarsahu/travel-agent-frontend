import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import PromotionWidget from "../../atoms/PromotionWidget";

import styles from "./Promotion.style";

const Promotion = props => {
  const {
    className,
    // eslint-disable-next-line react/prop-types
    compData
  } = props;
  return (
    <div className={className}>
      <div className="container flex promotion">
        {compData.map(data => {
          // eslint-disable-next-line no-unused-expressions
          return <PromotionWidget data={data || {}} />;
        })}
      </div>
    </div>
  );
};

Promotion.propTypes = {
  className: PropTypes.string.isRequired,
  compData: PropTypes.instanceOf(Array).isRequired
};

export default styledHOC(Promotion, styles);
