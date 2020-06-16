/* eslint-disable react/prop-types */
import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import Span from "components/common/atoms/Span";
// import { heading } from "components/common/organisms/SectionWrapper/SectionWrapper";
import styles from "./ThanksModal.style";
import Modal from "../Modal";

const ThanksModal = props => {
  // eslint-disable-next-line react/prop-types
  const { className, getSVG, unSetThanksModal, data } = props;

  const { alreadySubscribed } = data.data || {};
  const [hdng, sbHdng] =
    alreadySubscribed === false
      ? data.message.split("<br/>")
      : [data.message || "", null];

  const Background = getSVG("thanksModal");
  return (
    <Modal className="small-modal" closePopup={unSetThanksModal}>
      <div className={`${className} flex horizontal-center column`}>
        <Background />
        <div className="thanks-content">
          <div className="tick-icon" />
          <Heading tag="h3" type="h3">
            {hdng}
          </Heading>
          {!alreadySubscribed && <Span className="subtitle">{sbHdng}</Span>}
        </div>
      </div>
    </Modal>
  );
};

ThanksModal.propTypes = {
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired,
  unSetThanksModal: PropTypes.func.isRequired
};

ThanksModal.defaultProps = {
  className: ""
};

export default styledHOC(ThanksModal, styles);
