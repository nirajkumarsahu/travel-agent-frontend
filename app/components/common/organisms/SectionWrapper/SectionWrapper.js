import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";

import Carousel from "components/common/molecules/Carousel";
import Heading from "components/common/atoms/Heading";
import DealCard from "components/features/Home/atoms/DealCard";
import IncentiveCard from "components/features/Home/molecules/IncentiveCard";
import BookingCard from "components/features/Home/molecules/BookingCard";
import BrandCard from "components/features/Home/molecules/BrandCard";
import CityCard from "components/features/Home/molecules/CityCard";
import CitiesModal from "components/common/molecules/CitiesModal";
import Review from "components/features/Home/molecules/Review";
import RecommendedCard from "components/common/molecules/RecommendedCard";
import Anchor from "components/common/atoms/Anchor";
import PayAtTerms from "components/common/molecules/PayAtTerms";
import CounterSection from "components/features/Home/organisms/CounterSection";
import { getCityInfo } from "components/common/molecules/CitiesModal/CitiesModal.action";
import RightArrow from "components/features/Home/atoms/RightArrow";
import { connect } from "react-redux";
import CustomerBenefit from "components/features/Signup/molecules/CustomerBenefitCard";
import styles from "./SectionWrapper.style";
import {
  sectionWrapperNameConfig,
  carouselCssConfig
} from "./SectionWrapper.config";

const components = {
  DealCard,
  IncentiveCard,
  BookingCard,
  BrandCard,
  CityCard,
  RecommendedCard,
  Review,
  CustomerBenefit
};

export const heading = {
  bookings: ["h3", "h2"],
  deals: ["h3", "h2"],
  bankOffer: ["h3", "h2"],
  reviews: ["h2", "h2"],
  blogs: ["h2", "h2"],
  fabbrands: ["h2", "h2"],
  recommended: ["h2", "h2"],
  cities: ["h3", "h2"],
  incentives: ["h3", "h2"],
  customerBenefit: ["h3", "h2"]
};

class SectionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      secondPopup: false
    };
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.escFunction);
    setTimeout(() => {
      this.forceUpdate();
    }, 1000);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.escFunction);
  };

  componentDidupdate = () => {
    const { showPopup, secondPopup } = this.state;
    if (showPopup || secondPopup) {
      document.body.classList.add("stop-scroll");
    } else {
      document.body.classList.remove("stop-scroll");
    }
  };

  togglePopup = () => {
    const { showPopup } = this.state;
    if (!showPopup) this.getCityInfo();
    this.setState({ showPopup: !showPopup });

    if (!showPopup) {
      document.body.classList.add("stop-scroll");
    } else if (showPopup) {
      document.body.classList.remove("stop-scroll");
    }
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      this.setState(() => ({
        showPopup: false,
        secondPopup: false
      }));
      document.body.classList.remove("stop-scroll");
    }
  };

  getCityInfo = () => {
    const { getCityInfoFunc } = this.props;
    getCityInfoFunc({ cb: () => this.setState({ showPopup: true }) });
  };

  render() {
    const {
      className,
      type,
      compData,
      incrementSlides,
      // addTerm,
      addCounter,
      getSVG,
      allCities,
      dotActive,
      pageName
    } = this.props;

    const {
      title,
      data,
      link: readAllLink,
      linkText: readAllText,
      message,
      tag
    } = compData;
    // const { paymentMode } = data && data[0];
    const componentName = sectionWrapperNameConfig[type];
    const Component = componentName && components[componentName];
    if (!compData || !compData.data) return null;
    const { showPopup } = this.state;
    return (
      <Fragment>
        <div className={className}>
          <div className="container">
            <div className="wrapper-head vertical-center flex">
              <Heading tag={heading[type][0]} type={heading[type][1]}>
                {title}
              </Heading>

              {readAllText && type === "cities" && (
                <span
                  className="link-arrow"
                  to={readAllLink}
                  onClick={() => {
                    this.togglePopup();
                    pushToDataLayer(
                      `Homepage`,
                      `Homepage Quick Search All Cities Clicked`,
                      `${readAllLink}`
                    );
                  }}
                  role="presentation"
                >
                  {readAllText}
                  <RightArrow />
                </span>
              )}

              {(data || []).length > 1 && readAllText && type !== "cities" && (
                <Anchor className="link-arrow" to={readAllLink}>
                  {readAllText}
                  <RightArrow />
                </Anchor>
              )}

              {/* {readAllText && type === "cities" ? (
                <span
                  className="link-arrow"
                  to={readAllLink}
                  onClick={this.togglePopup}
                  role="presentation"
                >
                  {readAllText}
                </span>
              ) : (
                <Anchor className="link-arrow" to={readAllLink}>
                  {readAllText}
                </Anchor>
              )} */}
            </div>
            <Carousel
              totalSlides={(data || []).length}
              dimensions={carouselCssConfig[type]}
              incrementSlides={incrementSlides || 1}
              dotActive={dotActive}
            >
              {data &&
                data.map(
                  (data, index) =>
                    Component && (
                      <Component
                        id={index}
                        cardData={data}
                        className="child-div"
                        pageName={pageName}
                        getSVG={getSVG}
                      />
                    )
                )}
            </Carousel>
            {type === "bookings" && (
              <PayAtTerms paymentMode={tag} payTerm={message} />
            )}
          </div>
          {addCounter && <CounterSection getSVG={getSVG} />}
        </div>

        {showPopup ? (
          <CitiesModal
            data={allCities}
            className={showPopup ? "show" : "hide"}
            escClose={this.escFunction}
            closePopup={this.togglePopup}
          />
        ) : null}
      </Fragment>
    );
  }
}

SectionWrapper.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  compData: PropTypes.instanceOf(Object).isRequired,
  incrementSlides: PropTypes.number,
  getSVG: PropTypes.func.isRequired,
  getCityInfoFunc: PropTypes.func.isRequired,
  allCities: PropTypes.instanceOf(Object).isRequired,
  // addTerm: PropTypes.bool,
  addCounter: PropTypes.bool,
  dotActive: PropTypes.bool,
  pageName: PropTypes.string.isRequired
};

SectionWrapper.defaultProps = {
  className: "",
  incrementSlides: 1,
  // addTerm: false,
  addCounter: false,
  dotActive: false
};

const mapStateToProps = state => {
  const { homePage: { cities: { allCities } = {} } = {} } = state;
  return {
    allCities
  };
};

const mapDispatchToProps = dispatch => ({
  getCityInfoFunc: data => {
    return dispatch(getCityInfo(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledHOC(SectionWrapper, styles));
