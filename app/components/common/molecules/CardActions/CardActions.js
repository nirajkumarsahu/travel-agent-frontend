import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ActionButton from "components/common/atoms/ActionButton";
// import { BASE_URL } from "global/constants/urls";
import StyledCardActions from "./CardActions.style";

import { actionButtonClick } from "./CardActions.actions";

const CardActions = props => {
  const {
    actions,
    className,
    actionButtonClickFunc,
    getSVG,
    setSuccessModal
  } = props;
  return (
    <StyledCardActions className={`${className} flex vertical-center`}>
      {actions.map((action, index) => {
        const { name, type } = action;
        const buttonType = index > 0 ? "link" : "button";
        // if (type === MAP_LINK) {
        //   const { endpoint: url } = action;
        //   return (
        //     <NavigationLink
        //       handleCardAction={actionButtonClickFunc}
        //       name={name}
        //       url={url}
        //       getSVG={getSVG}
        //       actionType={type}
        //       styleType={buttonType}
        //     />
        //   );
        // }

        const { endpoint } = action;
        return (
          <ActionButton
            idx={index}
            getSVG={getSVG}
            type={type}
            name={name}
            endPoint={endpoint}
            handleCardAction={actionButtonClickFunc}
            setSuccessModal={setSuccessModal}
            styleType={buttonType}
          />
        );
      })}
    </StyledCardActions>
  );
};

CardActions.propTypes = {
  actions: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string,
  getSVG: PropTypes.func,
  actionButtonClickFunc: PropTypes.func,
  setSuccessModal: PropTypes.func
};

CardActions.defaultProps = {
  className: "",
  getSVG: () => {},
  actionButtonClickFunc: () => {},
  setSuccessModal: () => {}
};

const mapDispatchToProps = dispatch => ({
  actionButtonClickFunc: (actionType, endPoint, setSuccessModal) => {
    dispatch(actionButtonClick({ actionType, endPoint, setSuccessModal }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CardActions);
