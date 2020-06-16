import React from "react";
import PropTypes from "prop-types";
import Anchor from "components/common/atoms/Anchor";
import Heading from "components/common/atoms/Heading";
import Paragraph from "components/common/atoms/Paragraph";
import StyledSignupSuccess from "./SignupSuccess.style";

const SignupSuccess = ({ changeSignupSuccess, className, getSVG }) => {
  const BackArrow = getSVG("arrowLeft");
  const ThankYouCheck = getSVG("greenCheck");
  return (
    <StyledSignupSuccess className={className}>
      <div className="thankyou-svg">
        <ThankYouCheck />
      </div>
      <Heading type="h1" tag="h3">
        Thank You
      </Heading>
      <Paragraph>We will get back to you shortly</Paragraph>
      <div className="back-signup">
        <Paragraph>
          <BackArrow />
          Go back to{" "}
          <Anchor
            handleLinkClick={() => {
              changeSignupSuccess(false);
            }}
          >
            Sign Up
          </Anchor>
        </Paragraph>
      </div>
    </StyledSignupSuccess>
  );
};

SignupSuccess.propTypes = {
  getSVG: PropTypes.func,
  className: PropTypes.string,
  changeSignupSuccess: PropTypes.func
};

SignupSuccess.defaultProps = {
  getSVG: () => {},
  className: "",
  changeSignupSuccess: () => {}
};

export default SignupSuccess;
