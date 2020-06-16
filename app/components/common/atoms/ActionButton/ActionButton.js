import React from "react";
import PropTypes from "prop-types";
import { convertPriceToLocaleString } from "lib/utils";

import { StyledActionButton, StyledActionLink } from "./ActionButton.style";

const ActionButton = props => {
  const {
    type,
    name,
    endPoint,
    handleCardAction,
    styleType,
    getSVG,
    idx,
    setSuccessModal
  } = props;
  const ActionButtonType =
    styleType === "link" ? StyledActionLink : StyledActionButton;
  const Svg = getSVG(type === "MAP_LINK" ? "navPointer" : "");
  return (
    <ActionButtonType
      to={endPoint}
      onClick={e => {
        if (styleType === "link") {
          e.stopPropagation();
          e.preventDefault();
        }
        handleCardAction(type, endPoint, setSuccessModal);
      }}
      action
    >
      {idx > 0 && <Svg />}
      {convertPriceToLocaleString(name)}
    </ActionButtonType>
  );
};

ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  endPoint: PropTypes.string.isRequired,
  handleCardAction: PropTypes.func,
  type: PropTypes.string.isRequired,
  styleType: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
  setSuccessModal: PropTypes.func
};

ActionButton.defaultProps = {
  handleCardAction: () => {},
  setSuccessModal: () => {}
};

export default ActionButton;
