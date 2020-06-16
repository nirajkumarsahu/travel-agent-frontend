import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import Router from "next/router";

import validationRegex from "lib/utils/validation";

import Input from "components/common/atoms/Input";
import Password from "components/common/atoms/Password";
import DropDown from "components/common/atoms/DropDown";
import Paragraph from "components/common/atoms/Paragraph";
import Button from "components/common/atoms/Button";
import { ButtonVanilla } from "components/common/atoms/Button/Button";
import Heading from "components/common/atoms/Heading";
import StyledLoginForm from "./LoginForm.style";
import { loginFormFields, loginValidateConfig } from "./LoginForm.constants";

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    const { countryList } = props;
    this.state = {
      loginFormFields: {
        ...loginFormFields,
        phoneCode: {
          ...loginFormFields.phoneCode,
          value: countryList[0].value,
          isoCode: countryList[0].text
        }
      },
      showOtpField: false,
      showPasswordField: false,
      formValid: false,
      forgotPasswordFlag: false,
      showPhoneOnForgotPassword: false,
      otpTimer: 0
    };
  }

  handleInputChange = (event, fieldName, validateFlag) => {
    const { loginFormFields } = this.state;
    this.setState(
      {
        loginFormFields: {
          ...loginFormFields,
          [fieldName]: {
            ...loginFormFields[fieldName],
            value: event.target.value,
            isTouched: true,
            isError: !validateFlag
          }
        }
      },
      () => {
        this.checkFormValidity();
      }
    );
  };

  onPhoneCodeSelect = phoneCodeObject => {
    const { loginFormFields } = this.state;
    this.setState({
      loginFormFields: {
        ...loginFormFields,
        phoneCode: {
          ...loginFormFields.phoneCode,
          value: phoneCodeObject.value,
          isoCode: phoneCodeObject.text
        }
      }
    });
  };

  checkFormValidity = () => {
    const { loginFormFields, showOtpField } = this.state;
    let formValidFlag = true;
    const optedOutField = showOtpField ? "password" : "otp";
    // eslint-disable-next-line
    for (const field in loginFormFields) {
      if (field !== optedOutField && field !== "phoneCode") {
        const { isTouched, isError } = loginFormFields[field];
        formValidFlag = formValidFlag && isTouched && !isError;
      }
    }
    this.setState({ formValid: formValidFlag });
  };

  validateField = (event, fieldName) => {
    const {
      target: { value }
    } = event;
    const validationFunction = validationRegex[loginValidateConfig[fieldName]];
    let validateFlag = validationFunction(value);
    if (!value) {
      validateFlag = false;
    }
    this.handleInputChange(event, fieldName, validateFlag);
  };

  checkFieldValidity = key => {
    const { loginFormFields } = this.state;
    const field = loginFormFields[key];
    const fieldValid = field.isTouched && !field.isError;
    if (!fieldValid) this.setFieldErrorState(key);

    return fieldValid;
  };

  setFieldErrorState = key => {
    const { loginFormFields } = this.state;
    this.setState({
      loginFormFields: {
        ...loginFormFields,
        [key]: {
          ...loginFormFields[key],
          isError: true
        }
      }
    });
  };

  startOtpTimer = () => {
    this.setState({ otpTimer: 30 }, () => {
      const timer = setInterval(() => {
        const { otpTimer } = this.state;
        if (otpTimer > 0) {
          this.setState({ otpTimer: otpTimer - 1 });
        } else {
          clearInterval(timer);
        }
      }, 1000);
    });
  };

  handleOtpOption = () => {
    const { sendOtp } = this.props;
    const isNumberValid = this.checkFieldValidity("phoneNo");
    if (isNumberValid) {
      const {
        loginFormFields: { phoneCode, phoneNo }
      } = this.state;
      const countryCode = phoneCode.value;
      const mobile = phoneNo.value;
      const { isoCode } = phoneCode;
      sendOtp({
        countryCode,
        mobile,
        isoCode,
        successCallback: () => {
          this.setState({ showOtpField: true, showPasswordField: false });
          this.startOtpTimer();
        },
        failureCallback: () => {
          this.setFieldErrorState("phoneNo");
          this.setState({ showOtpField: false, showPasswordField: false });
        }
      });
    }
  };

  handlePasswordOption = () => {
    const isNumberValid = this.checkFieldValidity("phoneNo");
    if (isNumberValid) {
      this.setState({ showOtpField: false, showPasswordField: true });
    }
  };

  handleLoginClick = () => {
    const { validateOtp, validatePassword } = this.props;
    const { loginFormFields, showOtpField, showPasswordField } = this.state;
    const { phoneCode, phoneNo, otp, password } = loginFormFields;
    const requestObject = {
      countryCode: phoneCode.value,
      mobile: phoneNo.value,
      isoCode: phoneCode.isoCode,
      cleverTapId: "__g2b971fb2732c46d1b24e0a363c28c5da",
      isPushProfile: true
    };
    if (showOtpField) {
      validateOtp({
        ...requestObject,
        otp: otp.value,
        successCallback: () => {
          Router.push("/home");
        },
        failureCallback: () => this.setFieldErrorState("otp")
      });
    }
    if (showPasswordField) {
      validatePassword({
        ...requestObject,
        password: password.value,
        failureCallback: () => this.setFieldErrorState("password")
      });
    }
  };

  handleForgotPassword = () => {
    const { sendOtp } = this.props;
    const isNumberValid = this.checkFieldValidity("phoneNo");
    if (isNumberValid) {
      const {
        loginFormFields: { phoneCode, phoneNo }
      } = this.state;
      const countryCode = phoneCode.value;
      const mobile = phoneNo.value;
      const { isoCode } = phoneCode;

      sendOtp({
        countryCode,
        mobile,
        isoCode,
        successCallback: () => {
          this.setState({ forgotPasswordFlag: true });
        },
        failureCallback: () => {
          this.setFieldErrorState("phoneNo");
        }
      });
    }
  };

  handleForgotPasswordLogin = () => {
    const { validateOtp, resetPassword } = this.props;
    const {
      loginFormFields: { phoneCode, phoneNo, otp, password }
    } = this.state;
    const requestObject = {
      countryCode: phoneCode.value,
      mobile: phoneNo.value,
      isoCode: phoneCode.isoCode,
      cleverTapId: "__g2b971fb2732c46d1b24e0a363c28c5da",
      isPushProfile: true,
      otp: otp.value
    };
    validateOtp({
      ...requestObject,
      successCallback: () => {
        resetPassword({
          ...requestObject,
          rePassword: password.value,
          password: password.value,
          successCallback: () => {
            Router.push("/home");
          }
        });
      },
      failureCallback: () => {
        this.setFieldErrorState("otp");
      }
    });
  };

  renderPhoneNoField = () => {
    const {
      loginFormFields: { phoneCode, phoneNo },
      showPhoneOnForgotPassword,
      otpTimer
    } = this.state;
    const { getSVG, countryList } = this.props;
    return (
      <div className="phone-no-field">
        <DropDown
          onSelect={this.onPhoneCodeSelect}
          getSVG={getSVG}
          options={countryList}
          selectedItem={{ text: phoneCode.isoCode, value: phoneCode.value }}
          className="country-code-dropdown"
          displayValue
        />
        <Input
          value={phoneNo.value}
          dynamicPlaceholderLabel
          onChange={e => this.handleInputChange(e, "phoneNo", true)}
          onBlur={e => this.validateField(e, "phoneNo")}
          className="login-input phone-no"
          placeholder={phoneNo.placeholder}
          id="phoneNo"
          type="number"
          valid={phoneNo.isTouched && !phoneNo.isError}
          isError={phoneNo.isError}
          maxLength={10}
          errorMessage="Please enter a valid mobile number"
        />
        {showPhoneOnForgotPassword &&
          (otpTimer === 0 ? (
            <ButtonVanilla
              onClick={() => this.handleOtpOption()}
              className="resend-otp-button"
            >
              Resend OTP
            </ButtonVanilla>
          ) : (
            <Paragraph className="otp-timer-info">
              Waiting for OTP {otpTimer}s
            </Paragraph>
          ))}
      </div>
    );
  };

  renderOtpField = () => {
    const {
      loginFormFields: { otp },
      showPhoneOnForgotPassword,
      otpTimer
    } = this.state;
    return (
      <div className="otp-wrapper">
        <Input
          value={otp.value}
          dynamicPlaceholderLabel
          onChange={e => this.handleInputChange(e, "otp", true)}
          onBlur={e => this.validateField(e, "otp")}
          className="login-input"
          placeholder={otp.placeholder}
          id="otp"
          type="number"
          valid={otp.isTouched && !otp.isError}
          isError={otp.isError}
          errorMessage="Please enter a valid OTP"
        />
        {!showPhoneOnForgotPassword &&
          (otpTimer === 0 ? (
            <ButtonVanilla onClick={() => this.handleOtpOption()}>
              Resend OTP
            </ButtonVanilla>
          ) : (
            <Paragraph className="otp-timer-info">
              Waiting for OTP {otpTimer}s
            </Paragraph>
          ))}
      </div>
    );
  };

  renderPasswordField = () => {
    const {
      loginFormFields: { password },
      forgotPasswordFlag
    } = this.state;
    const { getSVG } = this.props;
    return (
      <Password
        className="login-input"
        value={password.value}
        getSVG={getSVG}
        dynamicPlaceholderLabel
        onChange={e => this.handleInputChange(e, "password", true)}
        onBlur={e => this.validateField(e, "password")}
        placeholder={
          forgotPasswordFlag ? "Set new Password" : password.placeholder
        }
        id="loginPassword"
        valid={password.isTouched && !password.isError}
        isError={password.isError}
        errorMessage="Phone no or Password incorrect"
      />
    );
  };

  renderLoginForm = () => {
    const { showOtpField, showPasswordField, formValid } = this.state;
    return (
      <Fragment>
        {" "}
        <Heading tag="h2" type="h2">
          Hello Partner
        </Heading>
        {this.renderPhoneNoField()}
        {showOtpField && this.renderOtpField()}
        {showPasswordField && this.renderPasswordField()}
        {!showOtpField && !showPasswordField && (
          <Button
            onClick={() => this.handlePasswordOption()}
            className="password-button"
          >
            Login With Password
          </Button>
        )}
        {!showOtpField && !showPasswordField && (
          <Button
            onClick={() => this.handleOtpOption()}
            className="otp-button"
            secondary
          >
            Login With OTP
          </Button>
        )}
        {(showOtpField || showPasswordField) && (
          <Button
            onClick={() => this.handleLoginClick()}
            className="login-button"
            disabled={!formValid}
          >
            Login
          </Button>
        )}
        <div className="divider" />
        {showOtpField && (
          <ButtonVanilla onClick={() => this.handlePasswordOption()}>
            Login with password
          </ButtonVanilla>
        )}
        {showPasswordField && (
          <ButtonVanilla
            className="forgot-password"
            onClick={() => this.handleForgotPassword()}
          >
            Forgot Password?
          </ButtonVanilla>
        )}
      </Fragment>
    );
  };

  renderForgotPasswordForm = () => {
    const {
      loginFormFields: { phoneNo, phoneCode },
      formValid,
      showPhoneOnForgotPassword
    } = this.state;
    return (
      <div className="fp-form">
        {!showPhoneOnForgotPassword && (
          <Heading tag="h2" type="h2" className="fp-heading">
            Forgot Password?
          </Heading>
        )}
        {!showPhoneOnForgotPassword && (
          <Paragraph className="fp-verify-text">
            Verify OTP sent to{" "}
            <strong>
              {phoneCode.value} {phoneNo.value}
            </strong>
            <ButtonVanilla
              onClick={() => this.setState({ showPhoneOnForgotPassword: true })}
            >
              Edit
            </ButtonVanilla>
          </Paragraph>
        )}
        {showPhoneOnForgotPassword && this.renderPhoneNoField()}
        {this.renderOtpField()}
        {this.renderPasswordField()}

        <Button
          onClick={() => this.handleForgotPasswordLogin()}
          className="login-button"
          disabled={!formValid}
        >
          Login
        </Button>
        <ul>
          <li>The password should be atleast 8 characters long</li>
          <li>One lowercase, one uppercase and one numeric character </li>
          <li>Can include special characters: #, @, %, &</li>
        </ul>
      </div>
    );
  };

  render() {
    const { forgotPasswordFlag } = this.state;
    const { className } = this.props;
    return (
      <StyledLoginForm className={className}>
        {forgotPasswordFlag
          ? this.renderForgotPasswordForm()
          : this.renderLoginForm()}
      </StyledLoginForm>
    );
  }
}

LoginForm.propTypes = {
  sendOtp: PropTypes.func.isRequired,
  validateOtp: PropTypes.func.isRequired,
  validatePassword: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  getSVG: PropTypes.func,
  countryList: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string
};

LoginForm.defaultProps = {
  getSVG: () => {},
  className: ""
};

export default LoginForm;
