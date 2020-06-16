import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "static/styles/global.css";

import cisEnhancer from "lib/cisEnhancer";
import styledHOC from "lib/styledHOC";
import { REVIEW_KEY } from "global/constants";
import SvgService from "lib/utils/svgService";
import ResponsiveLayout from "components/common/templates/ResponsiveLayout";
import SearchBox from "components/common/organisms/SearchBox";
import LoginModal from "components/common/molecules/LoginModal";
import CreditModal from "components/common/molecules/CreditModal";
import ReviewSection from "components/features/Review/organisms/ReviewSection";
import { footer } from "./mockdata";

import initialActions, {
  fetchGuestReviewData,
  fetchVideoReviewData
} from "./Review.actions";
import reducer from "./Review.reducer";
import saga from "./Review.saga";

import styles from "./Review.style";

class Review extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      svgLoaded: false,
      isLoginModal: false,
      isShowCreditModal: false,
      creditScore: 0
    };
    const dynamicFileFetch = () =>
      import(/* webpackChunknName:"HomepageSvgs" */ "./Review.svgs");
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
    props.fetchGuestReviewDataFunc(1);
  }

  componentDidMount = () => {
    // eslint-disable-next-line func-names
    window.getCookie = function(name) {
      const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
      return match ? match[2] : null;
    };
    this.thisUpdate();
  };

  thisUpdate = () => {
    // eslint-disable-next-line no-undef
    this.isAuthenticated = getCookie("token");
    // eslint-disable-next-line no-unused-expressions
    !this.isAuthenticated && localStorage.removeItem("user");
    this.user = JSON.parse(localStorage.getItem("user") || "{}");
    this.forceUpdate();
  };

  updateHomePageState = (key, value) => {
    const { isLoginModal } = this.state;
    this.setState({ [key]: value });
    if (!isLoginModal) {
      document.body.classList.add("stop-scroll");
    } else {
      document.body.classList.remove("stop-scroll");
    }
  };

  showCreditModal = () => {
    const abc = JSON.parse(localStorage.getItem("user") || "{}");
    const { isNewUser, fabPoints } = abc;
    this.setState({
      isShowCreditModal: isNewUser,
      creditScore: fabPoints
    });
  };

  closePopup = () => {
    this.setState({
      isShowCreditModal: false
    });
  };

  render() {
    const {
      className,
      homePageData: { cities },
      guestReviews,
      videoReviews,
      fetchGuestReviewDataFunc,
      fetchVideoReviewDataFunc,
      isMobile,
      userProfile
    } = this.props;
    const {
      svgLoaded,
      isShowCreditModal,
      isLoginModal,
      creditScore
    } = this.state;
    return (
      <div className={className}>
        <ResponsiveLayout
          getSVG={this.svgService.getSVG}
          footerData={{ footer }}
          isMobile={isMobile}
          user={this.user}
          updatePage={this.thisUpdate}
          updateHomePageState={this.updateHomePageState}
          userProfile={userProfile}
          svgLoaded={svgLoaded}
          pageName="Review"
        >
          <SearchBox
            user={this.user}
            cities={cities && cities.data}
            getSVG={this.svgService.getSVG}
            svgLoaded={svgLoaded}
            className="review-search"
          />
          <ReviewSection
            guestReviewData={guestReviews}
            videoReviewData={videoReviews}
            fetchGuestReviewDataFunc={fetchGuestReviewDataFunc}
            fetchVideoReviewDataFunc={fetchVideoReviewDataFunc}
          />
          {isLoginModal && (
            <LoginModal
              updateHomePage={this.thisUpdate}
              updateHomePageState={this.updateHomePageState}
              getSVG={this.svgService.getSVG}
              className={isLoginModal ? "show" : "hide"}
              showCreditModal={this.showCreditModal}
              pageName="Review"
            />
          )}
          {isShowCreditModal && (
            <CreditModal
              getSVG={this.svgService.getSVG}
              creditScore={creditScore}
              closePopup={this.closePopup}
            />
          )}
        </ResponsiveLayout>
      </div>
    );
  }
}

Review.propTypes = {
  homePageData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
  guestReviews: PropTypes.instanceOf(Object).isRequired,
  videoReviews: PropTypes.instanceOf(Object),
  fetchGuestReviewDataFunc: PropTypes.func.isRequired,
  fetchVideoReviewDataFunc: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  userProfile: PropTypes.instanceOf(Object)
};

Review.defaultProps = {
  videoReviews: {},
  userProfile: {}
};

const mapStateToProps = state => {
  const {
    homePage: {
      guestReviews: { data = {} } = {},
      guestReviews = {},
      videoReviews = {}
    } = {}
  } = state;
  const {
    homePage: { userProfile: { data: userProfile = {} } = {} } = {},
    globalReducer: {
      globalData: { isMobile }
    }
  } = state;
  return {
    homePageData: data,
    userProfile,
    guestReviews: guestReviews.data,
    videoReviews: videoReviews.data,
    isMobile
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGuestReviewDataFunc: data => {
    dispatch(fetchGuestReviewData(data));
  },
  fetchVideoReviewDataFunc: data => {
    dispatch(fetchVideoReviewData(data));
  }
});

export default cisEnhancer(styledHOC(Review, styles), {
  mapStateToProps,
  mapDispatchToProps,
  key: REVIEW_KEY,
  reducer,
  saga,
  initialActions
});
