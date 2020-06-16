import React from "react";
import PropTypes from "prop-types";

import Anchor from "components/common/atoms/Anchor";

import styledHOC from "lib/styledHOC";
import styles from "./PayButton.style";

const PayButton = props => {
  const { className, paymentAmount } = props;
  return (
    <Anchor className={className} to="/">
      Pay {paymentAmount}
    </Anchor>
  );
};

PayButton.propTypes = {
  paymentAmount: PropTypes.string.isRequired,
  className: PropTypes.string
};

PayButton.defaultProps = {
  className: ""
};

export default styledHOC(PayButton, styles);
