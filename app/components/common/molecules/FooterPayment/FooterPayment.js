import React from "react";
import PropTypes from "prop-types";
import Span from "components/common/atoms/Span";
import StyledPayment from "./FooterPayment.style";

const FooterPayment = props => {
  const { getSVG } = props;
  const SvgGeoTrust = getSVG("geoTrust");
  const SvgVisaCard = getSVG("visaCard");
  const SvgMasterCard = getSVG("masterCard");
  const SvgAmericanExpress = getSVG("americanExpress");
  const SvgPayTm = getSVG("payTm");

  return (
    <StyledPayment className="payment-wrap flex">
      <div className="payment-type flex vertical-center">
        <Span tag="span" footerPaymentTitle>
          SECURED BY
        </Span>
        <span className="inline-block trust-icon">
          <SvgGeoTrust />
        </span>
      </div>

      <div className="payment-type flex vertical-center">
        <Span tag="span" footerPaymentTitle>
          WE Accept
        </Span>

        <div className="image-wrap flex vertical-center">
          <span className="visa-icon">
            <SvgVisaCard />
          </span>
          <span className="master-icon">
            <SvgMasterCard />
          </span>
          <span className="express-icon">
            <SvgAmericanExpress />
          </span>
          <span className="paytm-icon">
            <SvgPayTm />
          </span>
        </div>
      </div>
    </StyledPayment>
  );
};

FooterPayment.propTypes = {
  getSVG: PropTypes.func.isRequired
};

export default FooterPayment;
