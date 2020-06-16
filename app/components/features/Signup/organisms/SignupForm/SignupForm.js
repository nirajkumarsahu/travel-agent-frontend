import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import validationRegex from "lib/utils/validation";

import Input from "components/common/atoms/Input";
import DropDown from "components/common/atoms/DropDown";
import Button from "components/common/atoms/Button";
import Heading from "components/common/atoms/Heading";
import { checkViewPort } from "lib/utils";
import StyledSignupForm from "./SignupForm.style";
import {
  loginFormFields,
  loginValidateConfig,
  secondFormFields,
  companyTypeList
} from "./SignupForm.constants";

const maxLength = 10;
class SignupForm extends PureComponent {
  constructor(props) {
    super(props);
    const { countryList } = props;
    this.state = {
      loginFormFields: {
        ...loginFormFields,
        phoneCode: {
          ...loginFormFields.phoneCode,
          value: countryList && countryList[0].value,
          isoCode: countryList && countryList[0].text
        }
      },
      secondFormFields: {
        ...secondFormFields,
        companyType: {
          ...secondFormFields.companyType,
          value: companyTypeList[0].value
        }
      },
      enquiryCheck: "contracting",
      captchaVerified: true,
      activeForm: "first"
    };
  }

  componentDidMount() {
    const { loginFormFields, secondFormFields } = this.state;
    const newLoginFormObj = { ...loginFormFields };
    const newSecondFormObj = { ...secondFormFields };
    // eslint-disable-next-line
    for (const field in loginFormFields) {
      if (field !== "phoneCode") {
        newLoginFormObj[field].isTouched = false;
        newLoginFormObj[field].isError = false;
      }
    }
    // eslint-disable-next-line
    for (const field in secondFormFields) {
      if (field !== "phoneCode") {
        newSecondFormObj[field].isTouched = false;
        newSecondFormObj[field].isError = false;
      }
    }
    this.setState({
      loginFormFields: newLoginFormObj,
      secondFormFields: newSecondFormObj
    });
  }

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

  onCompanyTypeSelect = item => {
    const { secondFormFields } = this.state;
    this.setState({
      secondFormFields: {
        ...secondFormFields,
        companyType: {
          ...secondFormFields.companyType,
          value: item.value
        }
      }
    });
  };

  checkFormValidity = () => {
    const { loginFormFields, activeForm, secondFormFields } = this.state;
    let formValidFlag = true;
    if (activeForm === "first") {
      // eslint-disable-next-line
      for (const field in loginFormFields) {
        if (field !== "phoneCode") {
          const { isTouched, isError } = loginFormFields[field];
          formValidFlag = formValidFlag && isTouched && !isError;
        }
      }
    }
    if (activeForm === "second") {
      // eslint-disable-next-line
      for (const field in secondFormFields) {
        if (field !== "companyType") {
          const { isTouched, isError } = secondFormFields[field];
          formValidFlag = formValidFlag && isTouched && !isError;
        }
      }
    }
    return formValidFlag;
  };

  handleInputChange = (event, fieldName, validateFlag) => {
    const { loginFormFields } = this.state;
    if (fieldName === "phoneNo") {
      // eslint-disable-next-line
      event.target.value = event.target.value.substr(0, maxLength);
    }
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

  handleInputChangeSecondForm = (event, fieldName, validateFlag) => {
    const { secondFormFields } = this.state;
    this.setState({
      secondFormFields: {
        ...secondFormFields,
        [fieldName]: {
          ...secondFormFields[fieldName],
          value: event.target.value,
          isTouched: true,
          isError: !validateFlag
        }
      }
    });
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

  renderPhoneNoField = () => {
    const {
      loginFormFields: { phoneCode, phoneNo }
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
          className="login-input phone-no"
          placeholder={phoneNo.placeholder}
          id="phoneNo"
          type="number"
          valid={phoneNo.isTouched && !phoneNo.isError}
          isError={phoneNo.isError}
          maxLength={maxLength}
          errorMessage="Please enter a valid mobile number"
        />
      </div>
    );
  };

  handleRadioInput = e => {
    this.setState({ enquiryCheck: e.target.value });
  };

  getStarted = () => {
    const { loginFormFields } = this.state;
    const newLoginFormObj = { ...loginFormFields };
    // eslint-disable-next-line
    for (const field in loginFormFields) {
      if (field !== "phoneCode") {
        newLoginFormObj[field].isTouched = true;
        const val = newLoginFormObj[field].value;
        const validationFunction = validationRegex[loginValidateConfig[field]];
        const validateFlag = validationFunction(val);
        if (!val || !validateFlag) {
          newLoginFormObj[field].isError = true;
        }
      }
    }
    this.setState(
      {
        loginFormFields: newLoginFormObj
      },
      () => {
        if (this.checkFormValidity()) {
          this.setState({
            activeForm: "second"
          });
        }
      }
    );
  };

  registerUser = () => {
    const { secondFormFields } = this.state;
    let newLoginFormObj = { ...secondFormFields };
    // eslint-disable-next-line
    for (const field in secondFormFields) {
      if (field !== "companyType") {
        newLoginFormObj[field].isTouched = true;
        const val = newLoginFormObj[field].value;
        const validationFunction = validationRegex[loginValidateConfig[field]];
        const validateFlag = validationFunction(val);
        if (!val || !validateFlag) {
          newLoginFormObj[field].isError = true;
        }
      }
    }
    this.setState(
      {
        secondFormFields: newLoginFormObj
      },
      () => {
        if (this.checkFormValidity()) {
          const {
            loginFormFields: {
              phoneCode: { value: phoneCode },
              phoneNo: { value: phoneNo },
              name: { value: name },
              email: { value: email }
            }
          } = this.state;
          const {
            companyName: { value: companyName },
            companyCity: { value: companyCity },
            companyType: { value: companyType }
          } = newLoginFormObj;
          const { enquiryCheck } = this.state;
          newLoginFormObj = {
            countryCode: `+${phoneCode}`,
            mobile: `${phoneNo}`,
            name: `${name}`,
            email: `${email}`,
            queryType: `${enquiryCheck}`,
            companyName: `${companyName}`,
            city: `${companyCity}`,
            companyType: `${companyType.split("I am a ")[1]}`,
            source: `${checkViewPort() ? "mobile" : "desktop"}`
          };
          try {
            // eslint-disable-next-line
            const response = grecaptcha.getResponse();
            if (response.length) {
              this.formSuccess(newLoginFormObj);
            } else {
              this.setState({ captchaVerified: false });
            }
          } catch (e) {
            this.formSuccess(newLoginFormObj);
          }
        }
      }
    );
  };

  formSuccess = newLoginFormObj => {
    const { changeSignupSuccess, sendSignupForm } = this.props;
    sendSignupForm({
      data: newLoginFormObj,
      callback: ({ error }) => {
        if (!error) {
          changeSignupSuccess(true);
        }
      }
    });
  };

  secondForm = () => {
    const {
      secondFormFields: { companyName, companyCity, companyType }
    } = this.state;
    const { getSVG } = this.props;
    return (
      <div>
        {/* eslint-disable */}
        <div
          onClick={() => this.setState({ activeForm: "first" })}
          className="go-back"
        >
          Go Back
        </div>
        {/* eslint-disable */}
        <Input
          value={companyName.value}
          dynamicPlaceholderLabel
          onChange={e =>
            this.handleInputChangeSecondForm(e, "companyName", true)
          }
          className="login-input"
          placeholder={companyName.placeholder}
          id="companyName"
          type="text"
          valid={companyName.isTouched && !companyName.isError}
          isError={companyName.isError}
          maxLength={20}
          errorMessage="Please enter company name"
        />
        <Input
          value={companyCity.value}
          dynamicPlaceholderLabel
          onChange={e =>
            this.handleInputChangeSecondForm(e, "companyCity", true)
          }
          className="login-input"
          placeholder={companyCity.placeholder}
          id="companyCity"
          type="text"
          valid={companyCity.isTouched && !companyCity.isError}
          isError={companyCity.isError}
          maxLength={20}
          errorMessage="Please enter company city"
        />
        <DropDown
          onSelect={this.onCompanyTypeSelect}
          getSVG={getSVG}
          options={companyTypeList}
          selectedItem={{ value: companyType.value }}
          className="category-dropdown login-input"
          displayValue
        />
      </div>
    );
  };

  render() {
    const { className } = this.props;
    const {
      loginFormFields: { name, email },
      enquiryCheck,
      captchaVerified,
      activeForm
    } = this.state;
    return (
      <StyledSignupForm className={className}>
        {activeForm === "first" && (
          <Heading tag="h2" type="h2">
            Grow Your Business!
          </Heading>
        )}
        {activeForm === "first" ? (
          <div>
            {this.renderPhoneNoField()}
            <Input
              value={name.value}
              dynamicPlaceholderLabel
              onChange={e => this.handleInputChange(e, "name", true)}
              className="login-input"
              placeholder={name.placeholder}
              id="name"
              type="text"
              valid={name.isTouched && !name.isError}
              isError={name.isError}
              errorMessage="Please enter name"
            />
            <Input
              value={email.value}
              dynamicPlaceholderLabel
              onChange={e => this.handleInputChange(e, "email", true)}
              className="login-input"
              placeholder={email.placeholder}
              id="email"
              type="text"
              valid={email.isTouched && !email.isError}
              isError={email.isError}
              errorMessage="Please enter valid email"
            />
          </div>
        ) : (
            this.secondForm()
          )}

        <div className="flex two-col">
          <Input
            checked={enquiryCheck === "contracting"}
            value="contracting"
            name="signupradio"
            onChange={this.handleRadioInput}
            dynamicPlaceholderLabel
            className="login-input"
            type="radio"
          >
            Contracting
          </Input>

          <Input
            checked={enquiryCheck === "onetimequery"}
            value="onetimequery"
            onChange={this.handleRadioInput}
            dynamicPlaceholderLabel
            name="signupradio"
            className="login-input"
            type="radio"
          >
            One-time query
          </Input>
        </div>

        <div className={activeForm === "first" ? "hideCaptcha" : ""}>
          <input
            type="hidden"
            id="g-recaptcha-response"
            name="g-recaptcha-response"
          />
          <input type="hidden" name="action" value="validate_captcha" />
          <div
            className="g-recaptcha"
            data-sitekey="6LfrFKQUAAAAAMzFobDZ7ZWy982lDxeps8cd1I2i"
          />

          <div className="err-msg">
            {" "}
            {!captchaVerified && <span>Please verify captcha</span>}
          </div>
        </div>

        {activeForm === "first" && (
          <Button className="full-width" onClick={this.getStarted}>
            Get Started
          </Button>
        )}
        {activeForm === "second" && (
          <Button className="full-width" onClick={this.registerUser}>
            Request a call back
          </Button>
        )}
      </StyledSignupForm>
    );
  }
}

SignupForm.propTypes = {
  getSVG: PropTypes.func,
  className: PropTypes.string,
  changeSignupSuccess: PropTypes.func,
  sendSignupForm: PropTypes.func,
  countryList: PropTypes.instanceOf(Array).isRequired
};

SignupForm.defaultProps = {
  getSVG: () => { },
  className: "",
  changeSignupSuccess: () => { },
  sendSignupForm: () => { }
};

export default SignupForm;
