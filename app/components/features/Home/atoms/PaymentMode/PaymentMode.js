import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import styles from "./PaymentMode.style";

const PaymentMode = props => {
  const { className, paymentMode } = props;
  return <span className={className}>{paymentMode}</span>;
};

PaymentMode.propTypes = {
  paymentMode: PropTypes.string.isRequired,
  className: PropTypes.string
};

PaymentMode.defaultProps = {
  className: ""
};

export default styledHOC(PaymentMode, styles);
