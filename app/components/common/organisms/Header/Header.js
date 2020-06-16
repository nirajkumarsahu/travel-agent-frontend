import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import HeaderLinks from "components/common/molecules/HeaderLinks";
import UserAccount from "components/common/molecules/UserAccount";
import LoginBoard from "components/common/molecules/LoginBoard";
import Logo from "components/common/molecules/Logo";
import Anchor from "components/common/atoms/Anchor";

import styles from "./Header.style";

const Header = props => {
  const {
    className,
    getSVG,
    updateHomePageState,
    user,
    updateComp,
    helpLineNumber,
    // eslint-disable-next-line react/prop-types
    pageName,
    userProfile,
    signUpHeader
  } = props;
  const Call = getSVG("call");
  let logo = null;
  if (signUpHeader) {
    logo = (
      <div className="flex container">
        <div className="logo-enquiry">
          <Logo getSVG={getSVG} pageName={pageName} />
          <span> Travel Agent Booking Tool </span>
        </div>
        <div className="header-right">
          <ul className="top-list">
            <li className="call">
              <Anchor to={`tel:${helpLineNumber}`}>
                <Call />
                <span className="helpline-number">24x7 Helpline</span>
                <span className="tool-tip">
                  Need Help? Give us a call! <br />
                  0124 434 1560
                </span>
              </Anchor>
            </li>
            <li>
              <Anchor to="https://agents.fabhotels.com">Login</Anchor>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    logo = (
      <div className="flex container">
        <Logo getSVG={getSVG} pageName={pageName} />
        <div className="flex header-right-top">
          <HeaderLinks
            getSVG={getSVG}
            helpLineNumber={helpLineNumber}
            pageName={pageName}
          />
          {Object.keys(userProfile || {})[0] || Object.keys(user || {})[0] ? (
            <UserAccount
              userDetails={user}
              pageName={pageName}
              updateComp={updateComp}
              getSVG={getSVG}
              userProfile={userProfile}
            >
              {(
                (userProfile && userProfile.firstName) ||
                (user && user.firstName) ||
                " "
              ).substring(0, 1)}
            </UserAccount>
          ) : (
            <LoginBoard
              loginClick={updateHomePageState}
              getSVG={getSVG}
              pageName={pageName}
            />
          )}
        </div>
      </div>
    );
  }
  return <header className={className}>{logo}</header>;
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  updateHomePageState: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  updateComp: PropTypes.string.isRequired,
  helpLineNumber: PropTypes.string.isRequired,
  userProfile: PropTypes.instanceOf(Object).isRequired,
  signUpHeader: PropTypes.bool
};

Header.defaultProps = {
  signUpHeader: false
};

export { Header as HeaderVanilla };
export default styledHOC(Header, styles);
