import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "components/common/atoms/Input";
import Button from "components/common/atoms/Button";
import Span from "components/common/atoms/Span";
import { emailSubscribeAction } from "global/actions";
import ThanksModal from "components/common/molecules/ThanksModal";
import Paragraph from "components/common/atoms/Paragraph";
import { emailRegex } from "lib/utils/validation";
import styles from "./EmailSubscribe.style";

const EmailSubscribe = props => {
  // eslint-disable-next-line react/prop-types
  const {
    className,
    subscribe,
    getSVG,
    user,
    pageName,
    userProfile = {}
  } = props;
  const [email, setEmail] = useState(
    userProfile && userProfile.email
      ? userProfile && userProfile.email
      : user.email || ""
  );

  // eslint-disable-next-line no-undef
  useEffect(() => {
    setEmail(
      userProfile && userProfile.email
        ? userProfile && userProfile.email
        : user.email
    );
    // eslint-disable-next-line react/prop-types
  }, [
    userProfile && userProfile.email
      ? userProfile && userProfile.email
      : user.email
  ]);

  const [emailError, setEmailError] = useState(false);
  const [isThanksModal, setThanksModal] = useState(false);
  const [modalText, setModalText] = useState("");
  return (
    <div className={`${className} flex horizontal-center vertical-center`}>
      <Span tag="strong">Let the deals find you!</Span>

      <div
        className={`flex email-btn relative ${
          emailError ? "error" : " "
        } vertical-center`}
      >
        <Input
          value={email}
          onChange={({ target: { value } }) => {
            setEmail(value);
            setEmailError(false);
          }}
          placeholder="Enter your email"
          type="email"
          id="email"
        />
        <Button
          onClick={() => {
            if (emailRegex(email)) {
              subscribe(email, res => {
                if (!res.data.alreadySubscribed) {
                  setThanksModal(true);
                  pushToDataLayer(
                    `Deals (${pageName})`,
                    "Homepage Deals Subscribe Clicked"
                  );
                } else {
                  setEmailError(true);
                }
                setModalText(res);
              });
            } else {
              setEmailError(true);
            }
          }}
          type="button"
        >
          Subscribe
        </Button>

        {emailError && (
          <Paragraph className="error">
            {(modalText && modalText.message) || "Enter a valid email address"}
          </Paragraph>
        )}
        {isThanksModal &&
          ReactDOM.createPortal(
            <ThanksModal
              data={modalText}
              unSetThanksModal={() => {
                setThanksModal(false);
                setModalText("");
              }}
              getSVG={getSVG}
            />,
            document.getElementsByTagName("body")[0]
          )}
      </div>
    </div>
  );
};

EmailSubscribe.propTypes = {
  className: PropTypes.string,
  subscribe: PropTypes.func.isRequired,
  pageName: PropTypes.string.isRequired
};

EmailSubscribe.defaultProps = {
  className: ""
};

const mapDispatchToProps = dispatch => ({
  subscribe: (email, callback) =>
    dispatch(emailSubscribeAction({ email, callback }))
});

export default connect(
  null,
  mapDispatchToProps
)(styledHOC(EmailSubscribe, styles));
