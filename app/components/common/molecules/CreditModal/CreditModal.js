import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import Span from "components/common/atoms/Span";
import styles from "./CreditModal.style";
import Modal from "../Modal";

const CreditModal = props => {
  const { className, getSVG, creditScore, closePopup } = props;
  const FabIcon = getSVG("fabIcon");
  const Background = getSVG("creditModal");
  return (
    <Modal getSVG={getSVG} className="small-modal" closePopup={closePopup}>
      <div className={`${className} flex horizontal-center column`}>
        <Background />
        <div className="thanks-content">
          <Heading tag="h3" type="h3">
            Congratulations!
          </Heading>
          <FabIcon />
          <Span className="credit flex vertical-center" tag="span">
            Fab credits worth{" "}
            <Span className="credit-score" tag="strong">
              &#x20B9;{creditScore}{" "}
            </Span>
            added to your account!
          </Span>
          <Span className="subtitle">Book now and start saving.</Span>
        </div>
      </div>
    </Modal>
  );
};

CreditModal.propTypes = {
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  creditScore: PropTypes.number.isRequired
};

CreditModal.defaultProps = {
  className: ""
};

export default styledHOC(CreditModal, styles);
