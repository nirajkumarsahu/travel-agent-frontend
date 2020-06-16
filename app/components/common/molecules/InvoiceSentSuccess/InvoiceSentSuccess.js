import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import styles from "./InvoiceSentSuccess.style";
import Modal from "../Modal";

const ThanksModal = props => {
  const { className, getSVG, unsetModal, invoiceModalMsg } = props;
  const Background = getSVG("thanksModal");
  return (
    <Modal className="small-modal" closePopup={unsetModal}>
      <div className={`${className} flex horizontal-center column`}>
        <Background />
        <div className="thanks-content">
          <div className="tick-icon" />
          <Heading tag="h3" type="h3">
            {invoiceModalMsg}
          </Heading>
        </div>
      </div>
    </Modal>
  );
};

ThanksModal.propTypes = {
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired,
  unsetModal: PropTypes.func
};

ThanksModal.defaultProps = {
  className: "",
  unsetModal: () => {}
};

export default styledHOC(ThanksModal, styles);
