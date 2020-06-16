/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import Image from "components/common/atoms/Image";
import StyledFabulousTerms from "./FabulousTerms.style";
import Modal from "../Modal";

const FabulousTerms = props => {
  const {
    escClose,
    secondPopupOpen,
    data: { title, subTitle, details, img } = {}
  } = props;
  return (
    <Modal escClose={escClose} closePopup={secondPopupOpen}>
      <StyledFabulousTerms>
        <Heading tag="h2" type="h2">
          {title}
        </Heading>
        <div className="fabulous-sub-title">{subTitle}</div>
        <Image className="header-bg" imgUrl={img} altText="modal background" />
        <div dangerouslySetInnerHTML={{ __html: details }} />
      </StyledFabulousTerms>
    </Modal>
  );
};

FabulousTerms.propTypes = {
  secondPopupOpen: PropTypes.func.isRequired,
  escClose: PropTypes.func.isRequired
};

export default FabulousTerms;
