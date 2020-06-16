import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import PaymentMode from "components/features/Home/atoms/PaymentMode";
import styles from "./PayAtTerms.style";

const PayAtTerms = props => {
  const { className, paymentMode, payTerm } = props;
  return (
    <div className={className}>
      <PaymentMode paymentMode={paymentMode} />
      <span className="pay-terms">{payTerm}</span>
    </div>
  );
};

PayAtTerms.propTypes = {
  className: PropTypes.string.isRequired,
  paymentMode: PropTypes.string.isRequired,
  payTerm: PropTypes.string.isRequired
};

export default styledHOC(PayAtTerms, styles);
