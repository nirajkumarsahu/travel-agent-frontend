import React from "react";
import PropTypes from "prop-types";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import Paragraph from "../Paragraph";
import Button from "../Button";
import StyledBanner from "./SignUpBanner.style";

const SignUpBanner = props => {
  const {
    compData: {
      subTitle: { text: subTitle },
      title: { text: title },
      action: { text: btnText }
    },
    updateHomePageState,
    checkButtonId,
    pageName
  } = props;
  return (
    <StyledBanner className="sign-up-banner">
      <div className="sign-up-wrap">
        <Paragraph className="title">{title}</Paragraph>
        <Paragraph className="text" type="type9">
          {subTitle}
        </Paragraph>
        <Button
          className="tertiary"
          onClick={() => {
            updateHomePageState("isLoginModal", true);
            checkButtonId("signUpId", true);
            pushToDataLayer(
              `SignUp Banner  (${pageName})`,
              `SignUp CTA clicked`
            );
          }}
          role="presentation"
        >
          {btnText}
        </Button>
      </div>
    </StyledBanner>
  );
};

SignUpBanner.propTypes = {
  compData: PropTypes.instanceOf(Object).isRequired,
  updateHomePageState: PropTypes.func.isRequired,
  checkButtonId: PropTypes.func.isRequired,
  pageName: PropTypes.string.isRequired
};

export default SignUpBanner;
