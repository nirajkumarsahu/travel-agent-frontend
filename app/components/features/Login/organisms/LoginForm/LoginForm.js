import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styledHOC from "lib/styledHOC";
import validationRegex from "lib/utils/validation";

import Input from "components/common/atoms/Input";
import Button from "components/common/atoms/Button";
import styles from "./LoginForm.style";
import { loginFormFields, loginValidateConfig } from "./LoginForm.constants";
// import { loginFormPhoneSubmit } from './LoginForm.actions';

class LoginForm extends PureComponent {
  state = {
    loginFormFields: {
      ...loginFormFields
    },
    otpField: false,
    passwordField: false
  };

  handleInputChange = (event, fieldName, validateFlag) => {
    const { loginFormFields } = this.state;
    this.setState({
      loginFormFields: {
        ...loginFormFields,
        [fieldName]: {
          ...loginFormFields[fieldName],
          value: event.target.value,
          isTouched: true,
          isError: !validateFlag
        }
      }
    });
  };

  validateField = (event, fieldName) => {
    const validationFunction = validationRegex[loginValidateConfig[fieldName]];
    const validateFlag = validationFunction(event.target.value);
    this.handleInputChange(event, fieldName, validateFlag);
  };

  handleOtpLogin = () => {
    this.setState({ otpField: true, passwordField: false });
  };

  handlePasswordLogin = () => {
    this.setState({ otpField: false, passwordField: true });
  };

  handleLoginClick = () => {
    // TODO - Login functionality will be written here
    // eslint-disable-next-line
    console.log("login functionality triggered");
  };

  renderPhoneNoField = () => {
    const {
      loginFormFields: { phoneCode, phoneNo }
    } = this.state;
    return (
      <div className="phone-no-field">
        <Input
          value={phoneCode.value}
          dynamicPlaceholderLabel
          onChange={e => this.validateField(e, "phoneCode")}
          onBlur={e => this.validateField(e, "phoneCode")}
          className="login-input phone-code"
          placeholder={phoneCode.placeholder}
          id="phoneCode"
          type="number"
          valid={phoneCode.isTouched && !phoneCode.isError}
          isError={phoneCode.isError}
        />
        <Input
          value={phoneNo.value}
          dynamicPlaceholderLabel
          onChange={e => this.validateField(e, "phoneNo")}
          onBlur={e => this.validateField(e, "phoneNo")}
          className="login-input phone-no"
          placeholder={phoneNo.placeholder}
          id="phoneNo"
          type="number"
          valid={phoneNo.isTouched && !phoneNo.isError}
          isError={phoneNo.isError}
        />
      </div>
    );
  };

  renderOtpField = () => {
    const {
      loginFormFields: { otp }
    } = this.state;
    return (
      <Input
        value={otp.value}
        dynamicPlaceholderLabel
        onChange={e => this.validateField(e, "otp")}
        onBlur={e => this.validateField(e, "otp")}
        className="login-input"
        placeholder={otp.placeholder}
        id="otp"
        type="number"
        valid={otp.isTouched && !otp.isError}
        isError={otp.isError}
      />
    );
  };

  renderPasswordField = () => {
    const {
      loginFormFields: { password }
    } = this.state;
    return (
      <Input
        value={password.value}
        dynamicPlaceholderLabel
        onChange={e => this.validateField(e, "password")}
        onBlur={e => this.validateField(e, "password")}
        className="login-input"
        placeholder={password.placeholder}
        id="password"
        type="password"
        valid={password.isTouched && !password.isError}
        isError={password.isError}
      />
    );
  };

  render() {
    const { className } = this.props;
    const { otpField, passwordField } = this.state;
    return (
      <div className={className}>
        {!otpField && !passwordField && this.renderPhoneNoField()}
        {otpField && this.renderOtpField()}
        {passwordField && this.renderPasswordField()}
        <Button onClick={() => this.handleOtpLogin()}>Login With OTP</Button>
        <Button onClick={() => this.handlePasswordLogin()}>
          Login With Password
        </Button>
      </div>
    );
  }
}
const loginFormPhoneSubmit = () => {};
const mapDispatchToProps = dispatch => ({
  phoneNoSubmit: data => {
    dispatch(loginFormPhoneSubmit(data));
  }
});

LoginForm.propTypes = {
  className: PropTypes.string.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(styledHOC(LoginForm, styles));
