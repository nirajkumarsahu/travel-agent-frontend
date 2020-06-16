/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from "react";
import { connect } from "react-redux";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Span from "components/common/atoms/Span";
import Heading from "components/common/atoms/Heading";
import Paragraph from "components/common/atoms/Paragraph";
import Input from "components/common/atoms/Input";
import Button from "components/common/atoms/Button";
import { phone, otpRegex } from "lib/utils/validation";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import styles from "./LoginModal.style";
import Modal from "../Modal";
import {
  loginFormPhoneSubmit,
  loginFormOtpSubmit,
  resendOtpAction,
  getCountryCodes
} from "./LoginModal.actions";

class LoginModal extends React.Component {
  state = {
    mobile: "",
    otp: "",
    userName: "",
    referral: "",
    isCountryCodeDropdown: false,
    view: 0,
    otpError: false,
    resendOtpError: "",
    isReferral: false,
    mobileError: false,
    countryCode: {
      code: 91,
      iso: "IN",
      name: "India"
    },
    countryCodeSearch: ""
  };

  // eslint-disable-next-line react/sort-comp
  selectCoutryCode = countryCode => {
    this.setState({ countryCode, isCountryCodeDropdown: false });
  };

  constructor(props) {
    super(props);
    this.countryCodes = JSON.parse(
      localStorage.getItem("countryCodes") || "[]"
    );
    if (!this.countryCodes.length) {
      // eslint-disable-next-line react/prop-types
      props.getCountryCodes(codes => {
        this.countryCodes = codes;
        localStorage.setItem("countryCodes", JSON.stringify(codes));
        this.forceUpdate();
      });
    }
  }

  componentDidMount = () => {
    const phoneInput = document.getElementById("phone-number");
    phoneInput.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        this.phoneSubmit();
      }
    });
  };

  // eslint-disable-next-line consistent-return
  phoneSubmit = () => {
    const { phoneNoSubmit, signUpId, pageName } = this.props;
    const { mobile, userName, referral, countryCode } = this.state;
    return phoneNoSubmit({
      mobile: Number(mobile),
      countryCode: countryCode.code,
      isoCode: countryCode.iso,
      userName,
      referral,
      // eslint-disable-next-line consistent-return
      cb: res => {
        if (res.isError) {
          return this.setState({ mobileError: true }, () =>
            pushToDataLayer(
              signUpId
                ? `SignUp Banner (${pageName}`
                : `Login Process (${pageName})`,
              signUpId
                ? "SignUp Continue clicked - Error"
                : "Login Continue clicked - Error"
            )
          );
        }

        pushToDataLayer(
          signUpId
            ? `SignUp Banner (${pageName}`
            : `Login Process (${pageName})`,
          signUpId
            ? "SignUp Continue clicked - Success"
            : "Login Continue clicked - Success"
        );

        this.setState({ view: 1 }, () => {
          const otpInput = document.getElementById("otpInput");
          otpInput.addEventListener("keyup", event => {
            if (event.key === "Enter") {
              this.otpSubmit();
            }
          });
        });
      }
    });
  };

  resendOtp = () => {
    // eslint-disable-next-line react/prop-types
    const { resendOtp } = this.props;
    const { mobile, countryCode } = this.state;

    const sendOtpCallback = info => {
      this.setState({ resendOtpError: info.message });
      // setTimeout(() => {
      //   return this.setState({ resendOtpError: "" });
      // }, 3000);

      // this.setState({ timer: 30 });
      // // eslint-disable-next-line consistent-return
      // this.OtpInterval = setInterval(() => {
      //   if (!this.state.timer) return clearInterval(this.OtpInterval);
      //   this.setState({ timer: this.state.timer - 1 });
      // }, 1000);
    };

    if (phone(mobile))
      return resendOtp({
        mobile: Number(mobile),
        countryCode: countryCode.code,
        isoCode: countryCode.iso,
        cb: info => {
          sendOtpCallback(info);
        }
      });
    return this.setState({ mobileError: true });
  };

  otpSubmit = () => {
    const {
      loginOtpSubmit,
      updateHomePage,
      updateHomePageState,
      showCreditModal
    } = this.props;
    const { otp, mobile, countryCode } = this.state;
    if (otpRegex(otp))
      return loginOtpSubmit({
        otp,
        mobile: Number(mobile),
        countryCode: countryCode.code,
        isoCode: countryCode.iso,
        cb: res => {
          if (res.status === 500) {
            this.setState({ otpError: true });
          } else {
            updateHomePage();
            updateHomePageState("isLoginModal", false);
            showCreditModal();
          }
        }
      });
    return null;
  };

  inputChange = e => {
    const { name, value } = e.target;
    // eslint-disable-next-line no-restricted-globals
    if (name === "mobile" && isNaN(value)) return;
    this.setState({ [name]: value, [`${name}Error`]: false });
  };

  render() {
    const {
      className,
      updateHomePageState,
      getSVG,
      signUpId,
      checkButtonId,
      pageName
    } = this.props;
    const {
      view,
      isCountryCodeDropdown,
      mobile,
      mobileError,
      otpError,
      otp,
      isReferral,
      referral,
      userName,
      countryCode,
      countryCodeSearch
    } = this.state;
    const EarnCredit = getSVG("earnCredit");
    const JoinList = getSVG("joinList");
    const ManageBooking = getSVG("manageBooking");
    const SvgSearch = getSVG("searchIconCountry");
    const signUpText = signUpId
      ? `SignUp Banner (${pageName})`
      : `Login Process (${pageName})`;
    const signupTextCross = signUpId
      ? "SignUp CTA cross clicked"
      : "Login Cross Clicked";
    const resendGA = signUpId
      ? "SignUp MNumber OTP Resend clicked"
      : "Login MNumber OTP Resend clicked";
    const successGA = signUpId
      ? "SignUp MNumber OTP CTA clicked - Success"
      : "Login Successful";
    return (
      <Modal
        className={className}
        closePopup={() => {
          updateHomePageState("isLoginModal");
          checkButtonId("signUpId", false);
          console.log("signUpId", signUpId);
          pushToDataLayer(`${signUpText}`, `${signupTextCross}`);
        }}
        escClose={() => {
          updateHomePageState("isLoginModal");
        }}
      >
        <div className="login-modal">
          <Heading tag="h2" type="h2">
            Log In/Sign Up
          </Heading>
          <Span tag="span" className="sub-title">
            Sign-up to become a member, and get exclusive discounts.
          </Span>

          <div className="login-wrap flex">
            <ul className="account-info">
              <li className="list-items flex vertical-center">
                <div className="account-img">
                  <EarnCredit />
                </div>

                <div className="account-desc">
                  <Span tag="strong"> Earn Fab credits </Span>
                  <Paragraph>
                    {" "}
                    Earn credits for your subsequent bookings{" "}
                  </Paragraph>
                </div>
              </li>
              <li className="list-items flex vertical-center">
                <div className="account-img">
                  <JoinList />
                </div>

                <div className="account-desc">
                  <Span tag="strong"> Join the A-list </Span>
                  <Paragraph>
                    Become our club member for exclusive discounts
                  </Paragraph>
                </div>
              </li>
              <li className="list-items flex vertical-center">
                <div className="account-img">
                  <ManageBooking />
                </div>

                <div className="account-desc">
                  <Span tag="strong"> Easy cancellations &amp; refunds </Span>
                  <Paragraph>
                    Manage all bookings easily via one click
                  </Paragraph>
                </div>
              </li>
            </ul>

            <div className="login-form flex horizontal-center column">
              {view === 0 && (
                <div className="form-wrap">
                  <div className="flex display-country-code">
                    <div
                      onClick={() => {
                        this.setState({
                          isCountryCodeDropdown: !isCountryCodeDropdown
                        });
                      }}
                      className="country-code"
                      role="presentation"
                    >
                      <span className="user_country_code">
                        +{countryCode.code}
                      </span>
                    </div>
                    <Input
                      className="login-input"
                      placeholder="Enter Mobile Number"
                      type="text"
                      name="mobile"
                      id="phone-number"
                      maxLength="10"
                      value={mobile}
                      onChange={this.inputChange}
                    />
                    {isCountryCodeDropdown && (
                      <div className="country-flag-code">
                        <div className="country-search country_search clearfix">
                          <span className="search-icon">
                            <SvgSearch />
                          </span>
                          <input
                            className="country_search_input"
                            type="text"
                            value={countryCodeSearch}
                            name="countryCodeSearch"
                            placeholder="Search"
                            onChange={this.inputChange}
                          />
                          <button
                            className="close-search"
                            onClick={() => {
                              this.inputChange({
                                target: { name: "countryCodeSearch", value: "" }
                              });
                            }}
                            type="button"
                          >
                            <span className="icon bar1" />
                            <span className="icon bar2" />
                          </button>
                        </div>

                        <ul className="countries-list">
                          {this.countryCodes
                            .filter(
                              code =>
                                code.iso
                                  .toLowerCase()
                                  .indexOf(countryCodeSearch.toLowerCase()) !==
                                  -1 ||
                                code.name
                                  .toLowerCase()
                                  .indexOf(countryCodeSearch.toLowerCase()) !==
                                  -1 ||
                                String(code.code)
                                  .toLowerCase()
                                  .indexOf(countryCodeSearch.toLowerCase()) !==
                                  -1
                            )
                            .map(code => (
                              <li
                                onClick={() => this.selectCoutryCode(code)}
                                className="code-flag-item flex vertical-center"
                              >
                                <Span className="" tag="span">
                                  {code.name} (+{code.code})
                                </Span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap">
                    {isReferral && (
                      <Fragment>
                        <Input
                          className="login-input refer"
                          placeholder="Enter Referral Code (optional)"
                          type="text"
                          name="referral"
                          id="referral-id"
                          maxLength="6"
                          value={referral}
                          onChange={this.inputChange}
                        />
                        <Input
                          className="login-input refer"
                          placeholder="Enter Your Name"
                          type="text"
                          name="userName"
                          id="your-name"
                          value={userName}
                          onChange={this.inputChange}
                        />
                      </Fragment>
                    )}
                  </div>

                  {mobileError && (
                    <Span tag="span" className="error-message login_error_msg">
                      Please enter the valid number
                    </Span>
                  )}
                  <Button
                    onClick={() => {
                      this.phoneSubmit();
                    }}
                    className="login-btn"
                    type="button"
                  >
                    Continue
                  </Button>
                  {!isReferral && (
                    <span
                      className="referral"
                      onClick={() => this.setState({ isReferral: true })}
                    >
                      Have a referral code ?
                    </span>
                  )}
                </div>
              )}

              {view === 1 && (
                <div className="otp-section otp_form">
                  <Paragraph className="verified-number">
                    We have sent the verification code to your mobile number{" "}
                    <Span tag="span" className="mobile_otp">
                      +{countryCode.code}-{mobile}
                    </Span>
                    .
                    <Span
                      click={e => {
                        e.stopPropagation();
                        this.setState({ view: 0 });
                      }}
                      tag="span"
                      className="link change_otp"
                    >
                      Change?
                    </Span>
                  </Paragraph>
                  <div className="otp-form">
                    <span
                      className="link resend_otp"
                      onClick={() => {
                        this.resendOtp();
                        pushToDataLayer(`${signUpText}`, `${resendGA}`);
                      }}
                    >
                      Resend?
                    </span>
                    <Input
                      placeholder="Enter OTP"
                      className="otp"
                      name="otp"
                      id="otpInput"
                      value={otp}
                      autoComplete={false}
                      onChange={e => {
                        // eslint-disable-next-line no-restricted-globals
                        if (isNaN(e.target.value) || e.target.value.length > 6)
                          return;
                        this.inputChange(e);
                      }}
                    />
                  </div>

                  {(otpError || this.state.resendOtpError) && (
                    <Span
                      tag="span"
                      className="error-message otp-error-msg otp_error_msg hidden"
                    >
                      {this.state.resendOtpError || "Incorrect OTP.Try again"}
                    </Span>
                  )}

                  <Button
                    onClick={() => {
                      this.otpSubmit();
                      pushToDataLayer(`${signUpText}`, `${successGA}`);
                    }}
                    className={`login-btn ${
                      otp.length !== 6 ? " disabled-btn " : " "
                    } `}
                    type="button"
                  >
                    Get started
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  className: PropTypes.string,
  phoneNoSubmit: PropTypes.string,
  loginOtpSubmit: PropTypes.func,
  updateHomePage: PropTypes.func,
  showCreditModal: PropTypes.func,
  updateHomePageState: PropTypes.func,
  checkButtonId: PropTypes.func,
  getSVG: PropTypes.string,
  signUpId: PropTypes.bool,
  pageName: PropTypes.string.isRequired
};

LoginModal.defaultProps = {
  className: "",
  phoneNoSubmit: "",
  loginOtpSubmit: () => {},
  updateHomePage: () => {},
  showCreditModal: () => {},
  updateHomePageState: () => {},
  checkButtonId: () => {},
  getSVG: "",
  signUpId: false
};

const mapDispatchToProps = dispatch => ({
  phoneNoSubmit: data => {
    dispatch(loginFormPhoneSubmit(data));
  },
  loginOtpSubmit: data => {
    dispatch(loginFormOtpSubmit(data));
  },
  resendOtp: data => {
    dispatch(resendOtpAction(data));
  },
  getCountryCodes: cb => {
    dispatch(getCountryCodes(cb));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(styledHOC(LoginModal, styles));
