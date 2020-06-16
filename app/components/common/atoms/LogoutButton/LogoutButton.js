import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import { logoutAction } from "global/actions";
import StyledLogoutButton from "./LogoutButton.style";

const LogoutButton = props => {
  const { logoutFunc, updateComp, pageName } = props;
  return (
    <StyledLogoutButton
      onClick={() => {
        logoutFunc(updateComp);

        pushToDataLayer("My account", "Option selected", `${pageName} Logout`);
      }}
    >
      Logout
    </StyledLogoutButton>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutFunc: updateComp => {
    dispatch(logoutAction({ callback: updateComp }));
  }
});

LogoutButton.propTypes = {
  logoutFunc: PropTypes.func,
  updateComp: PropTypes.func,
  pageName: PropTypes.string.isRequired
};

LogoutButton.defaultProps = {
  logoutFunc: () => {},
  updateComp: () => {}
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);
