/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import Anchor from "components/common/atoms/Anchor";
import LogoutButton from "components/common/atoms/LogoutButton";
import styles from "./UserAccount.style";

const UserAccount = props => {
  const {
    className,
    userDetails,
    children,
    updateComp,
    getSVG,
    userProfile,
    pageName
  } = props;
  const SvgFabCredit = getSVG("fabCredit");
  return (
    <div className={className}>
      <Anchor to="/user/profile" className="user-account vertical-center flex">
        <span className="profile-icon">{children}</span>
        <span className="flex column user-info">
          <span className="guest-name">
            Hi,{" "}
            <span>
              {(
                (userProfile && userProfile.firstName) ||
                (userDetails && userDetails.firstName) ||
                "Guest "
              ).substring(0, 5)}
            </span>
            !
            <span className="caret" />
          </span>
          <span className="user-credits" type="type5">
            <span className="fab-credit">
              <SvgFabCredit className="icon" />
            </span>
            {(userProfile && userProfile.fabPoints) ||
              userDetails.fabPoints ||
              0}
          </span>
        </span>
      </Anchor>
      <ul className="link-list flex">
        <li>
          <Anchor
            to="/user/bookings"
            handleLinkClick={() =>
              pushToDataLayer(
                "My account",
                "Option selected",
                `${pageName} My Bookings`
              )
            }
          >
            My Bookings
          </Anchor>
        </li>
        <li>
          <Anchor
            to="/user/profile"
            handleLinkClick={() =>
              pushToDataLayer(
                "My account",
                "Option selected",
                `${pageName} Profile`
              )
            }
          >
            Profile
          </Anchor>
        </li>
        <li>
          <Anchor
            to="/user/fab-credits"
            handleLinkClick={() =>
              pushToDataLayer(
                "My account",
                "Option selected",
                `${pageName} My Fab Credits`
              )
            }
          >
            My Fab Credits
          </Anchor>
        </li>
        <li>
          <Anchor
            to="/user/a-list"
            handleLinkClick={() =>
              pushToDataLayer(
                "My account",
                "Option selected",
                `${pageName} A-List membership`
              )
            }
          >
            A-List membership
          </Anchor>
        </li>
        <li>
          <Anchor
            to="/user/scratch-cards"
            handleLinkClick={() =>
              pushToDataLayer(
                "My account",
                "Option selected",
                `${pageName} Scratch Cards`
              )
            }
          >
            Scratch Cards
          </Anchor>
        </li>
        <li>
          <LogoutButton updateComp={updateComp} pageName={pageName} />
        </li>
      </ul>
    </div>
  );
};

UserAccount.propTypes = {
  className: PropTypes.string.isRequired,
  userDetails: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.string.isRequired,
  updateComp: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  pageName: PropTypes.string.isRequired
};

export default styledHOC(UserAccount, styles);
