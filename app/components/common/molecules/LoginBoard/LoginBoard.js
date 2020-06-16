/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import Anchor from "components/common/atoms/Anchor";
import styledHOC from "lib/styledHOC";
import styles from "./LoginBoard.style";

const LoginBoard = props => {
  const {
    className,
    getSVG,
    loginClick, // eslint-disable-next-line react/prop-types
    pageName
  } = props;
  const SvgAListWhite = getSVG("aListWhite");
  return (
    <div className={className} role="presentation">
      <Anchor to="/loyalty-program-a-list" className="vertical-center flex">
        <span className="alist-icon inline-block">
          <SvgAListWhite className="icon" />
        </span>
        <span
          className="program-wrap flex"
          onClick={() =>
            pushToDataLayer(`Header (${pageName})`, "Join A-List Clicked")
          }
        >
          <span className="program-title">Join the </span>
          <span className="program">A-List</span>
        </span>
      </Anchor>
      <span
        onClick={() => {
          loginClick("isLoginModal", true);
          pushToDataLayer(`Header (${pageName})`, "Login/Signup Clicked");
        }}
        className="login-btn flex vertical-center"
      >
        Login In / Sign up
      </span>
    </div>
  );
};

LoginBoard.propTypes = {
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  loginClick: PropTypes.func.isRequired
};

export default styledHOC(LoginBoard, styles);
