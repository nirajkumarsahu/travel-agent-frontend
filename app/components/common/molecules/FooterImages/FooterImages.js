import React from "react";
import styledHOC from "lib/styledHOC";
import { connect } from "react-redux";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import PropTypes from "prop-types";
import Anchor from "components/common/atoms/Anchor";
import Heading from "components/common/atoms/Heading";
import Span from "components/common/atoms/Span";
import Image from "components/common/atoms/Image";
import styles from "./FooterImages.style";
import { sendAppLink } from "./FooterImages.actions";

class FooterImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSmsLink: false,
      mobileNo: "",
      isFocused: false,
      isSmsSend: false,
      isError: ""
    };
  }

  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

  setFocus = () => {
    this.setState({
      isFocused: true
    });
  };

  onInputChange = e => {
    const { name, value } = e.target;
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(value)) return null;
    this.setState({
      isError: false,
      [name]: value
    });
    return null;
  };

  onSendSms = () => {
    const { mobileNo: mobile } = this.state;
    // eslint-disable-next-line react/prop-types
    const { sendLink, isoCode = "IN", countryCode = "+91" } = this.props;

    if (mobile.length === 10) {
      sendLink({
        isoCode,
        countryCode,
        mobile,
        cb: res => {
          if (res) {
            this.setState({
              isSmsSend: true
            });
          } else
            this.setState({
              isError: true
            });
        }
      });
    } else {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        isError: true
      });
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleSmsLink = () => {
    const { showSmsLink } = this.state;
    this.setState({
      showSmsLink: !showSmsLink
    });
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isFocused: false,
        isSmsSend: false,
        mobileNo: ""
      });
    }
  };

  render() {
    const { className, getSVG, pageName } = this.props;
    const { isFocused, mobileNo, isSmsSend, isError } = this.state;
    // const { showSmsLink } = this.state;
    const SvgGooglePlay = getSVG("googlePlay");
    const SvgAppStore = getSVG("appStore");
    const Svgerror = getSVG("warning");
    let cls = "get-sms first-state";
    if (isFocused) {
      cls += " focus";
    }
    return (
      <div className={className}>
        <Heading tag="h3" type="h1">
          Download our free app
        </Heading>
        <div className="app-store-wrap flex">
          <div className="app-store flex flex-wrap">
            <Span tag="span" totalDownloads>
              (1M+ Downloads)
            </Span>
            <div
              ref={this.setWrapperRef}
              className={
                isSmsSend ? "message-wrap success-state" : "message-wrap"
              }
            >
              <div className={cls}>
                <span className="country-code"> +91 </span>
                <input
                  className="mobile_no"
                  type="text"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={e => this.onInputChange(e)}
                  onFocus={() => this.setFocus()}
                  pattern="^-?[0-9]\d*\.?\d*$"
                  placeholder="Enter Mobile number"
                  maxLength="10"
                  autoComplete="new-password"
                />
                <span className="success-text">Link Sent</span>
                {isError && (
                  <span className="error">
                    <span className="inline-block error-icon">
                      <Svgerror className="icon" />
                    </span>
                    Invalid
                  </span>
                )}
                <button
                  type="button"
                  className="inline-block send-btn"
                  onClick={() => {
                    this.onSendSms();
                    pushToDataLayer(
                      `Footer (${pageName})`,
                      "Get Link Via SMS Clicked"
                    );
                  }}
                />

                {/* <span className="inline-block success" /> */}
              </div>

              <div className="get-sms message-sent">
                <span className="success-text">Link Sent</span>
                <span className="inline-block send-btn" />
                {/* <span className="inline-block success" /> */}
              </div>
            </div>

            {/* <button
              type="button"
              className="sms-link"
              onClick={this.handleSmsLink}
            >
              Get link via SMS
            </button> */}

            {/* <div
              ref={this.setWrapperRef}
              className={`${
                showSmsLink ? "animateIt" : null
              } contact-info-container show_get_link_form`}
            >
              <div className="contact-code">
                <span className="number-code country_code"> +91 </span>
              </div>
              <input
                className="mobile_no"
                type="text"
                name=""
                placeholder="Enter mobile number"
                maxLength="10"
              />
              <input className="iso_code" type="hidden" name="" value="IN" />
              <button
                type="button"
                className="btn send_link"
                value="Send link via SMS"
                data-event-label="Homepage_App_Install_CTA_Clicked"
              >
                Send link
              </button>
            </div> */}

            <Anchor
              className="gplay"
              target="_blank"
              rel="noreferrer"
              to="https://play.google.com/store/apps/details?id=com.fabhotels.guests&hl=en_IN&referrer=fabhotels.com"
              handleLinkClick={() =>
                pushToDataLayer(
                  `Footer (${pageName})`,
                  "App Install App Store Clicked",
                  "https://play.google.com/store/apps/details"
                )
              }
            >
              <SvgGooglePlay />
            </Anchor>
            <Anchor
              className="store"
              target="_blank"
              rel="noreferrer"
              to="https://itunes.apple.com/app/fabhotels/id1434875063?mt=8&amp;referrer=fabhotels.com"
              handleLinkClick={() =>
                pushToDataLayer(
                  `Footer (${pageName})`,
                  "App Install App Store Clicked",
                  "https://itunes.apple.com/app/fabhotels"
                )
              }
            >
              <SvgAppStore />
            </Anchor>
          </div>

          <div className="qr-code">
            <Span tag="span" className="totalDownloads scan">
              Scan to get the link
            </Span>
            <Image
              imgUrl="static/images/Qrcode.jpg"
              altText="qr-code for app download"
            />
          </div>
        </div>
      </div>
    );
  }
}

FooterImages.propTypes = {
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired
};

FooterImages.defaultProps = {
  className: ""
};
const mapDispatchToProps = dispatch => {
  return {
    sendLink: data => {
      dispatch(sendAppLink(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(styledHOC(FooterImages, styles));
