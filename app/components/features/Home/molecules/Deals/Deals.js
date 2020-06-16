import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import Heading from "components/common/atoms/Heading";
import DealCard from "../../atoms/DealCard";

import styles from "./Deals.style";

const Deals = props => {
  const { className, deals: { title, data = [] } = {} } = props;
  return (
    <div className={className}>
      <Heading tag="h3" type="h3">
        {title}
      </Heading>
      {data &&
        data.map(cardData => (
          <DealCard cardData={cardData} key={cardData.url} />
        ))}
    </div>
  );
};

Deals.propTypes = {
  deals: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired
};

export default styledHOC(Deals, styles);
