import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import cisEnhancer from "lib/cisEnhancer";
import { SIGNUPPAGE_KEY } from "global/constants";
import ResponsiveLayout from "components/common/templates/ResponsiveLayout";
import CompanyBenefitCard from "components/features/Signup/molecules/CompanyBenefitCard";
import SvgService from "lib/utils/svgService";
import Heading from "components/common/atoms/Heading";
import SectionWrapper from "components/common/organisms/SectionWrapper";
import { countryDropDownMapper } from "lib/utils";
import styledHOC from "lib/styledHOC";
import { companyBenefitsSvgMapper } from "./SignupPage.constants";
import SignupForm from "../organisms/SignupForm";
import styles from "./SignupPage.style";
import initialActions, { sendSignupForm } from "./SignupPage.actions";
import reducer from "./SignupPage.reducer";
import saga from "./SignupPage.saga";
import GrowBusiness from "../molecules/GrowBusiness";
import LoginBanner from "../molecules/LoginBanner";
import SignupSuccess from "../atoms/SignupSuccess";
import { footer } from "./mockdata";

class SignupPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      svgLoaded: false,
      isSignupSuccess: false
    };
    const dynamicFileFetch = () => import("./SignupPage.svg");
    const eventToRegister = "load";
    const rerenderParent = () => {
      this.setState({ svgLoaded: true });
    };
    const eventTarget = typeof window === "undefined" ? {} : window;
    this.svgService = new SvgService(
      dynamicFileFetch,
      eventToRegister,
      rerenderParent,
      eventTarget
    );
  }

  changeSignupSuccess = isSignupSuccess => {
    this.setState({ isSignupSuccess });
  };

  scrollToTop = () => {
    this.node.scrollIntoView();
  };

  render() {
    const { svgLoaded, isSignupSuccess } = this.state;
    const {
      isMobile,
      className,
      countryList,
      sendSignupForm,
      signupPageData: {
        customerFeatures,
        memberFeatures,
        incentives,
        agentNetwork
      }
    } = this.props;
    const { getSVG } = this.svgService;
    return (
      <div className={className}>
        <ResponsiveLayout
          getSVG={getSVG}
          isMobile={isMobile}
          footerData={{ footer }}
          signUpFooter
          signUpHeader
        >
          <div
            className="signup-section"
            ref={node => {
              this.node = node;
            }}
          >
            <div className="container flex vertical-center">
              {!isSignupSuccess ? (
                <SignupForm
                  sendSignupForm={sendSignupForm}
                  changeSignupSuccess={this.changeSignupSuccess}
                  className="signup-form-wrapper"
                  countryList={countryList}
                  getSVG={getSVG}
                  svgLoaded={svgLoaded}
                />
              ) : (
                <SignupSuccess
                  changeSignupSuccess={this.changeSignupSuccess}
                  className="signup-form-wrapper"
                  getSVG={getSVG}
                  svgLoaded={svgLoaded}
                />
              )}
              <LoginBanner
                agentNetwork={agentNetwork}
                getSVG={getSVG}
                className="banner-main-section"
              />
            </div>
          </div>

          <div className="company-benefit-wrap">
            <div className="company-benefits container">
              <Heading
                tag="h3"
                type="h3"
                className="align-center visible-phone"
              >
                Why choose FabHotels
              </Heading>

              {memberFeatures.map(({ title, subTitle, icon }) => {
                return (
                  <CompanyBenefitCard
                    heading={title}
                    para={subTitle}
                    getSVG={getSVG}
                    svgKey={companyBenefitsSvgMapper[icon]}
                  />
                );
              })}
            </div>
          </div>
          <SectionWrapper
            type="incentives"
            compData={incentives}
            key="IncentiveCard"
            getSVG={getSVG}
            svgLoaded={svgLoaded}
          />
          <SectionWrapper
            dotActive
            type="customerBenefit"
            compData={customerFeatures}
            key="CustomerBenefit"
            getSVG={getSVG}
            svgLoaded={svgLoaded}
          />
          <GrowBusiness
            getSVG={getSVG}
            agentNetwork={agentNetwork}
            scrollToTop={this.scrollToTop}
            svgLoaded={svgLoaded}
          />
        </ResponsiveLayout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendSignupForm: data => {
    dispatch(sendSignupForm(data));
  }
});

const mapStateToProps = state => {
  const {
    signupPage: { countryList, signupPageData = {} } = {},
    globalReducer: {
      globalData: { isMobile }
    }
  } = state;
  return {
    countryList: countryDropDownMapper(countryList),
    signupPageData,
    isMobile
  };
};

SignupPage.propTypes = {
  countryList: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
  sendSignupForm: PropTypes.func.isRequired,
  signupPageData: PropTypes.instanceOf(Object).isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default cisEnhancer(styledHOC(SignupPage, styles), {
  key: SIGNUPPAGE_KEY,
  mapDispatchToProps,
  mapStateToProps,
  saga,
  initialActions,
  reducer
});
