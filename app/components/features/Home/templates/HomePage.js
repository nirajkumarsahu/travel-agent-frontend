/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import "static/styles/global.css";

import cisEnhancer from "lib/cisEnhancer";
import styledHOC from "lib/styledHOC";
import { HOMEPAGE_KEY, wrapperBackgroundMap } from "global/constants";
import SvgService from "lib/utils/svgService";

import Layout from "components/common/templates/Layout";
import SectionWrapper from "components/common/organisms/SectionWrapper";
import EmailSubscribe from "components/common/molecules/EmailSubscribe";
import SearchBox from "components/common/organisms/SearchBox";

import Promotion from "components/features/Home/molecules/Promotion";
import TravelBlogs from "components/features/Home/organisms/TravelBlogs";
import LoginModal from "components/common/molecules/LoginModal";
import CreditModal from "components/common/molecules/CreditModal";
import initialActions, { fetchHomePageData } from "./HomePage.actions";
import reducer from "./HomePage.reducer";
import saga from "./HomePage.saga";

import CounterSection from "../organisms/CounterSection";
import Fabulous from "../molecules/Fabulous";
import styles from "./HomePage.style";

const components = {
  fabulous: Fabulous,
  promotion: Promotion,
  CounterSection,
  blogs: TravelBlogs
};

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModal: false,
      svgLoaded: false,
      signUpId: false,
      isShowCreditModal: false,
      creditScore: 0
    };
    const dynamicFileFetch = () =>
      import(/* webpackChunknName:"HomepageSvgs" */ "./homepageSvgs");
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

  componentDidMount = () => {
    const { getHomePageData } = this.props;
    getHomePageData();
    // eslint-disable-next-line func-names
    window.getCookie = function(name) {
      let match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
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

  checkButtonId = (key, value) => {
    this.setState({ [key]: value });
    console.log("called", key);
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
    const { className, homePageData, userProfile } = this.props;

    // const homePageData = datta;
    const {
      isLoginModal,
      svgLoaded,
      isShowCreditModal,
      creditScore,
      signUpId
    } = this.state;
    // eslint-disable-next-line prefer-const
    let {
      helplinenumber,
      noOfHotels,
      noOfReviews,
      noOfCities,
      noOfRooms,
      footer,
      graceBookingHour,
      metaContent,
      bannerReferral,
      bannerloyalty,
      bannersignup,
      bannerfabfree,
      ...banners
    } = homePageData;

    // eslint-disable-next-line no-use-before-define
    // banners.bookings = bookings;
    banners.promotion = [];
    Object.keys(homePageData).map(key => {
      if (key === "bannerReferral")
        return banners.promotion.push(homePageData[key]);
      if (key === "bannerloyalty")
        return banners.promotion.push(homePageData[key]);
      return null;
    });

    banners.fabulous = [];
    Object.keys(homePageData).map(key => {
      if (key === "bannersignup" && homePageData[key]) {
        const object = { ...homePageData[key], keyName: "bannersignup" };
        return banners.fabulous.push(object);
      }
      if (key === "bannerfabfree" && homePageData[key]) {
        const object = { ...homePageData[key], keyName: "bannerfabfree" };
        return banners.fabulous.push(object);
      }
      return null;
    });

    const bannerkeys = Object.keys(banners);
    const sequentialBanners = {};
    Object.keys(homePageData).filter(key => {
      if (bannerkeys.indexOf(key) !== -1) {
        sequentialBanners[key] = banners[key];
      }
      if (key === "bannerReferral") {
        sequentialBanners.promotion = banners.promotion;
      }

      if (key === "bannerfabfree") {
        sequentialBanners.fabulous = banners.fabulous;
      }
      return null;
    });

    // sequentialBanners.cities = cities;
    const footerData = {
      helplinenumber,
      footer,
      graceBookingHour
    };
    sequentialBanners.CounterSection = {
      noOfCities,
      noOfHotels,
      noOfRooms,
      noOfReviews
    };

    // eslint-disable-next-line no-undef
    // banners = { bookings, ...banners };
    return (
      <div className={className}>
        <Layout
          helpLineNumber={helplinenumber}
          user={this.user}
          footerData={footerData}
          getSVG={this.svgService.getSVG}
          updatePage={this.thisUpdate}
          updateHomePageState={this.updateHomePageState}
          metaInfo={metaContent || {}}
          userProfile={userProfile}
          svgLoaded={svgLoaded}
          pageName="Home"
        >
          <SearchBox
            user={this.user}
            cities={sequentialBanners.cities && sequentialBanners.cities.data}
            getSVG={this.svgService.getSVG}
            svgLoaded={svgLoaded}
            noOfHotels={noOfHotels}
          />

          {Object.keys(sequentialBanners).map(key => {
            if (!sequentialBanners[key]) return null;
            if (wrapperBackgroundMap[key] && wrapperBackgroundMap[key][0]) {
              return (
                <Fragment>
                  <SectionWrapper
                    type={key}
                    compData={sequentialBanners[key]}
                    incrementSlides={1}
                    headingTag="h3"
                    headingType="h3"
                    pageName="Home"
                    wrapperStyle={
                      wrapperBackgroundMap[key][0] ? "greyBg" : "default"
                    }
                    getSVG={this.svgService.getSVG}
                  />
                  {key === "deals" && (
                    <EmailSubscribe
                      user={this.user}
                      pageName="Home"
                      getSVG={this.svgService.getSVG}
                      userProfile={userProfile}
                    />
                  )}
                </Fragment>
              );
            }
            const Component = components[key];
            return (
              <Component
                updateHomePageState={this.updateHomePageState}
                checkButtonId={this.checkButtonId}
                compData={sequentialBanners[key]}
                user={this.user}
                pageName="Home"
                getSVG={this.svgService.getSVG}
              />
            );
          })}

          {/*
          
          <SectionWrapper
            type="recommended"
            compData={recommended}
            headingTag="h3"
            headingType="h2" 
            getSVG={this.svgService.getSVG}
          /> 
          
          */}

          {isLoginModal && (
            <LoginModal
              updateHomePage={this.thisUpdate}
              updateHomePageState={this.updateHomePageState}
              signUpId={signUpId}
              checkButtonId={this.checkButtonId}
              getSVG={this.svgService.getSVG}
              className={isLoginModal ? "show" : "hide"}
              showCreditModal={this.showCreditModal}
              pageName="Home"
            />
          )}
          {isShowCreditModal && (
            <CreditModal
              getSVG={this.svgService.getSVG}
              creditScore={creditScore}
              closePopup={this.closePopup}
            />
          )}
        </Layout>
        <div className="search-overlay" />
      </div>
    );
  }
}

HomePage.propTypes = {
  homePageData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
  getHomePageData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { homePage: { homePageData: { data = {} } = {} } = {} } = state;
  const { homePage: { userProfile = {} } = {} } = state;
  return {
    homePageData: data,
    userProfile
  };
};

const mapDispatchToProps = dispatch => ({
  getHomePageData: () => dispatch(fetchHomePageData())
});

export default cisEnhancer(styledHOC(HomePage, styles), {
  mapStateToProps,
  mapDispatchToProps,
  key: HOMEPAGE_KEY,
  reducer,
  saga,
  initialActions
});

// const bookings = {
//   title: "Your Trips",
//   tag: "Pay @ Hotel",
//   message: "*Rooms subject to availability. Pay 25% to confirm.",
//   link: "/user/bookings/",
//   linkText: "See all bookings",
//   data: [
//     {
//       bookingId: "CMJCSG",
//       checkIn: "2019-09-19",
//       checkOut: "2019-09-20",
//       property: "FabHotel Tryfena",
//       city: "New Delhi",
//       paymentMode: "Pay @ Hotel",
//       actions: [
//         {
//           type: "PART_PAYMENT",
//           name: "Pay ₹505 *",
//           endpoint:
//             "consumer/v1/web/user/booking/payment/partial/link?bookingId=CMJCSG"
//         },
//         {
//           type: "MAP_LINK",
//           name: "Get Directions",
//           endpoint:
//             "consumer/v1/web/user/booking/property/mapurl?bookingId=CMJCSG"
//         }
//       ]
//     },
//     {
//       bookingId: "LAQEF5",
//       checkIn: "2020-01-01",
//       checkOut: "2020-01-05",
//       property: "FabHotel Raj Darbar",
//       city: "Gurgaon",
//       paymentMode: null,
//       actions: [
//         {
//           type: "MAP_LINK",
//           name: "Get Directions",
//           endpoint:
//             "consumer/v1/web/user/booking/property/mapurl?bookingId=LAQEF5"
//         }
//       ]
//     },
//     {
//       bookingId: "AFIRHM",
//       checkIn: "2019-10-17",
//       checkOut: "2019-10-23",
//       property: "FabExpress 1200",
//       city: "New Delhi",
//       paymentMode: null,
//       actions: [
//         {
//           type: "MAP_LINK",
//           name: "Get Directions",
//           endpoint:
//             "consumer/v1/web/user/booking/property/mapurl?bookingId=AFIRHM"
//         }
//       ]
//     },
//     {
//       bookingId: "HW5CMI",
//       checkIn: "2019-10-17",
//       checkOut: "2019-10-23",
//       property: "FabExpress 1200",
//       city: "New Delhi",
//       paymentMode: null,
//       actions: [
//         {
//           type: "MAP_LINK",
//           name: "Get Directions",
//           endpoint:
//             "consumer/v1/web/user/booking/property/mapurl?bookingId=HW5CMI"
//         }
//       ]
//     },
//     {
//       bookingId: "18CRYG",
//       checkIn: "2019-09-18",
//       checkOut: "2019-09-19",
//       property: "FabHotel Prime Emblem",
//       city: "New Delhi",
//       paymentMode: null,
//       actions: [
//         {
//           type: "SEND_INVOICE",
//           name: "Email Invoice",
//           endpoint: "consumer/v1/web/user/booking/send/invoice?bookingId=18CRYG"
//         },
//         {
//           type: "SUBMIT_REVIEW",
//           name: "Write a Review",
//           endpoint: "consumer/v1/web/user/booking/review/url?bookingId=18CRYG"
//         }
//       ]
//     }
//   ]
// };

// alistTierName: "BLUE"
// countryCode: "91"
// email: null
// fabPoints: 750
// firstName: ""
// isEmailVerified: false
// isMobileVerified: true
// isNewUser: false
// isProfileComplete: false
// isoCode: "IN"
// lastName: ""
// mobile: "9760970878"
// newUserBenefits: {welcomeScreen: false, welcomePoints: 750}
// profileCompletionPoints: 0
// profilePicture: null
// referralCode: "FAB878"
// referralError: ""
// showWelcomeScreen: false

// const datta = {
//   "bookings": {
//     "title": "Your Trips",
//     "tag": "Pay @ Hotel",
//     "message": "*Rooms subject to availability. Pay 25% to confirm.",
//     "link": "/user/bookings/",
//     "linkText": "See all bookings",
//     "data": [
//       {
//         "bookingId": "0JA16P",
//         "checkIn": "2019-10-30",
//         "checkOut": "2019-10-31",
//         "property": "FabHotel The Daffodils",
//         "city": "New Delhi",
//         "paymentMode": "Pay @ Hotel",
//         "actions": [
//           {
//             "type": "SUBMIT_REVIEW",
//             "name": "Write Review",
//             "endpoint": "consumer/v1/web/user/booking/review/url?bookingId=0JA16P"
//           },
//           {
//             "type": "SEND_INVOICE",
//             "name": "Email Invoice",
//             "endpoint": "consumer/v1/web/user/booking/send/invoice?bookingId=0JA16P"
//           }
//         ]
//       },
//       {
//         "bookingId": "DSNCAE",
//         "checkIn": "2019-11-12",
//         "checkOut": "2019-11-13",
//         "property": "FabHotel Prime Shervani",
//         "city": "New Delhi",
//         "paymentMode": "Pay @ Hotel",
//         "actions": [
//           {
//             "type": "PART_PAYMENT",
//             "name": "Pay ₹1148 *",
//             "endpoint": "consumer/v1/web/user/booking/payment/partial/link?bookingId=DSNCAE"
//           },
//           {
//             "type": "MAP_LINK",
//             "name": "Get Directions",
//             "endpoint": "consumer/v1/web/user/booking/property/mapurl?bookingId=DSNCAE"
//           }
//         ]
//       },
//       {
//         "bookingId": "DHYRF2",
//         "checkIn": "2019-10-30",
//         "checkOut": "2019-10-31",
//         "property": "FabHotel Prime Shervani",
//         "city": "New Delhi",
//         "paymentMode": "Pay @ Hotel",
//         "actions": [
//           {
//             "type": "SUBMIT_REVIEW",
//             "name": "Write Review",
//             "endpoint": "consumer/v1/web/user/booking/review/url?bookingId=DHYRF2"
//           },
//           {
//             "type": "SEND_INVOICE",
//             "name": "Email Invoice",
//             "endpoint": "consumer/v1/web/user/booking/send/invoice?bookingId=DHYRF2"
//           }
//         ]
//       }
//     ]
//   },
//   "bannerfabfree": {
//     "img": "https://static.fabhotels.com/homepage/app/fabfree_banner_bg_v1.png",
//     "title": {
//       "color": "#101217",
//       "text": "Fabulous, or Free"
//     },
//     "subTitle": {
//       "color": "#75767b",
//       "text": "Hassle free stay, else we pay"
//     },
//     "action": {
//       "buttonType": "link",
//       "actionType": "api",
//       "type": "anchor",
//       "buttonColor": null,
//       "text": "Know more",
//       "textColor": "#379aff",
//       "url": "/consumer/v1/web/staticprogram/faborfree"
//     }
//   },
//   "blogs": {
//     "title": "Get Inspired",
//     "link": "/blog/",
//     "data": [
//       {
//         "title": "Planning a 2-Day Trip to Delhi? Here’s the Perfect Itinerary",
//         "date": "October 22, 2019",
//         "img": "https://www.fabhotels.com/blog/wp-content/uploads/2019/10/2-day-trip-to-Delhi_490.jpg",
//         "url": "https://www.fabhotels.com/blog/2-days-delhi-itinerary/",
//         "tags": [
//           "New Delhi",
//           "Tours & Itineraries"
//         ]
//       },
//       {
//         "title": "Delhi Set to Welcome the ‘King of Fruits’ with the 31st Edition of Mango Festival",
//         "date": "June 10, 2019",
//         "img": "https://www.fabhotels.com/blog/wp-content/uploads/2019/06/Mango-Festivals_490.jpg",
//         "url": "https://www.fabhotels.com/blog/mango-festival-delhi/",
//         "tags": [
//           "New Delhi",
//           "Festival & Events"
//         ]
//       },
//       {
//         "title": "Top 15 Sports Bars in Delhi Screening Live ICC World Cup 2019",
//         "date": "May 27, 2019",
//         "img": "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Sports-Bars-in-Delhi_490.jpg",
//         "url": "https://www.fabhotels.com/blog/sports-bars-in-delhi/",
//         "tags": [
//           "New Delhi",
//           "Pubs"
//         ]
//       },
//       {
//         "title": "3 Must-Visit Lakes in New Delhi",
//         "date": "April 30, 2019",
//         "img": "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Lakes-in-New-Delhi_490x260.jpg",
//         "url": "https://www.fabhotels.com/blog/lakes-in-delhi/",
//         "tags": [
//           "New Delhi",
//           "Rivers & Lakes"
//         ]
//       }
//     ],
//     "details": [
//       {
//         "title": "Popular Tags",
//         "data": [
//           {
//             "name": "Places to Visit",
//             "url": "https://www.fabhotels.com/blog/places-to-visit/"
//           },
//           {
//             "name": "Things to do",
//             "url": "https://www.fabhotels.com/blog/things-to-do/"
//           },
//           {
//             "name": "Food & Restaurants",
//             "url": "https://www.fabhotels.com/blog/food-restaurants/"
//           },
//           {
//             "name": "Top Attraction",
//             "url": "https://www.fabhotels.com/blog/top-attraction/"
//           },
//           {
//             "name": "Travel Tips & Hacks",
//             "url": "https://www.fabhotels.com/blog/travel-tips/"
//           }
//         ]
//       },
//       {
//         "title": "Popular Cities",
//         "data": [
//           {
//             "name": "Mumbai",
//             "url": "https://www.fabhotels.com/blog/destinations/mumbai/"
//           },
//           {
//             "name": "New Delhi",
//             "url": "https://www.fabhotels.com/blog/destinations/new-delhi/"
//           },
//           {
//             "name": "Goa",
//             "url": "https://www.fabhotels.com/blog/destinations/goa/"
//           },
//           {
//             "name": "Bangalore",
//             "url": "https://www.fabhotels.com/blog/destinations/bangalore/"
//           },
//           {
//             "name": "Pune",
//             "url": "https://www.fabhotels.com/blog/destinations/pune/"
//           },
//           {
//             "name": "Jaipur",
//             "url": "https://www.fabhotels.com/blog/destinations/jaipur/"
//           },
//           {
//             "name": "Hyderabad",
//             "url": "https://www.fabhotels.com/blog/destinations/hyderabad/"
//           },
//           {
//             "name": "Chennai",
//             "url": "https://www.fabhotels.com/blog/destinations/chennai/"
//           }
//         ]
//       }
//     ]
//   },
//   "deals": null,
//   "cities": {
//     "title": "Quick Search",
//     "link": null,
//     "linkText": "All Cities",
//     "data": [
//       {
//         "name": "Bangalore",
//         "img": "https://static.fabhotels.com/cities/android/bangalore_v3.jpg",
//         "url": "/hotels-in-bangalore/",
//         "avgPrice": 1199,
//         "availableHotels": 91
//       },
//       {
//         "name": "New Delhi",
//         "img": "https://static.fabhotels.com/cities/android/new-delhi_v3.jpg",
//         "url": "/hotels-in-new-delhi/",
//         "avgPrice": 1499,
//         "availableHotels": 87
//       },
//       {
//         "name": "Mumbai",
//         "img": "https://static.fabhotels.com/cities/android/mumbai_v3.jpg",
//         "url": "/hotels-in-mumbai/",
//         "avgPrice": 1899,
//         "availableHotels": 85
//       },
//       {
//         "name": "Pune",
//         "img": "https://static.fabhotels.com/cities/android/pune_v3.jpg",
//         "url": "/hotels-in-pune/",
//         "avgPrice": 999,
//         "availableHotels": 60
//       },
//       {
//         "name": "Chennai",
//         "img": "https://static.fabhotels.com/cities/android/chennai_v3.jpg",
//         "url": "/hotels-in-chennai/",
//         "avgPrice": 1199,
//         "availableHotels": 36
//       },
//       {
//         "name": "Goa",
//         "img": "https://static.fabhotels.com/cities/android/goa_v3.jpg",
//         "url": "/hotels-in-goa/",
//         "avgPrice": 3199,
//         "availableHotels": 39
//       },
//       {
//         "name": "Hyderabad",
//         "img": "https://static.fabhotels.com/cities/android/hyderabad_v3.jpg",
//         "url": "/hotels-in-hyderabad/",
//         "avgPrice": 1199,
//         "availableHotels": 60
//       },
//       {
//         "name": "Jaipur",
//         "img": "https://static.fabhotels.com/cities/android/jaipur_v3.jpg",
//         "url": "/hotels-in-jaipur/",
//         "avgPrice": 1199,
//         "availableHotels": 41
//       },
//       {
//         "name": "Gurgaon",
//         "img": "https://static.fabhotels.com/cities/android/gurgaon_v3.jpg",
//         "url": "/hotels-in-gurgaon/",
//         "avgPrice": 1099,
//         "availableHotels": 61
//       }
//     ]
//   },
//   "bannerReferral": {
//     "img": "https://static.fabhotels.com/homepage/web/referral_banner_bg_web_v3.jpg",
//     "title": null,
//     "subTitle": null,
//     "action": {
//       "buttonType": null,
//       "actionType": "deeplink",
//       "type": null,
//       "buttonColor": null,
//       "text": null,
//       "textColor": null,
//       "url": "/refer-and-earn"
//     }
//   },
//   "bannerloyalty": {
//     "img": "https://static.fabhotels.com/homepage/app/loyalty_banner_bg_v2.png",
//     "title": {
//       "color": "#ffffff",
//       "text": "Welcome to the Loyalty Program: A-List"
//     },
//     "subTitle": {
//       "color": "#75767b",
//       "text": "Book now and earn rewards"
//     },
//     "action": {
//       "buttonType": "button",
//       "actionType": "deeplink",
//       "type": null,
//       "buttonColor": null,
//       "text": "Know more",
//       "textColor": "#fddc2c",
//       "url": "/loyalty-program-a-list"
//     }
//   },
//   "reviews": {
//     "title": "Our Guest Reviews",
//     "link": "/customer-reviews",
//     "linkText": "Read all Hotel Reviews",
//     "data": [
//       {
//         "body": "What was good :\r\nStaff was very helpful\r\n\r\nWhat was bad :\r\nLocation of property",
//         "userImg": "https://static.fabhotels.com/usericon/icon_6.jpg",
//         "userName": "Devdgaw from United Kingdom",
//         "reviewedOn": "2019-07-31",
//         "propertyName": "FabExpress Orange Suites",
//         "propertyUrl": "/hotels-in-mumbai/fabhotel-orange-suites.html",
//         "propertyReviews": 0.62,
//         "propertyCity": "Mumbai",
//         "cityUrl": "/hotels-in-mumbai/"
//       },
//       {
//         "body": "I was very much impressed by the services offered by the hotel Really liked the interiors of the room",
//         "userImg": "https://static.fabhotels.com/usericon/icon_8.jpg",
//         "userName": "Sujay Sharma",
//         "reviewedOn": "2019-07-31",
//         "propertyName": "FabHotel Magnus Calypso",
//         "propertyUrl": "/hotels-in-pune/fabhotel-magnus-calypso-viman-nagar.html",
//         "propertyReviews": 0.4,
//         "propertyCity": "Pune",
//         "cityUrl": "/hotels-in-pune/"
//       },
//       {
//         "body": "What was good :\r\nRooms were neat and well maintained. The staff was always available for any need. The morning breakfast was simple and good. The coffee was excellent.\r\n\r\nWhat was bad :\r\nThe location is directly in front of a slum area. Might not be very safe for girls to stay alone.",
//         "userImg": "https://static.fabhotels.com/usericon/icon_8.jpg",
//         "userName": "Steffi from India",
//         "reviewedOn": "2019-07-31",
//         "propertyName": "FabHotel Lotus Grand",
//         "propertyUrl": "/hotels-in-mumbai/fabhotel-lotus-grand-andheri.html",
//         "propertyReviews": 0.4,
//         "propertyCity": "Mumbai",
//         "cityUrl": "/hotels-in-mumbai/"
//       }
//     ]
//   },
//   "fabbrands": {
//     "title": "Our Hotel Brands",
//     "data": [
//       {
//         "img": "https://static.fabhotels.com/brands/desktop/FabHotels.jpg",
//         "name": "fabhotel",
//         "properties": [
//           {
//             "iconKey": "fabhotel-best-review-icon",
//             "data": "Top reviewed hotels"
//           },
//           {
//             "iconKey": "fabhotel-prime-location-icon",
//             "data": "Centrally located"
//           },
//           {
//             "iconKey": "fabhotel-wifi-fab",
//             "data": "Free Wi-Fi"
//           }
//         ],
//         "roomTitle": "Comfortable, economical hotels"
//       },
//       {
//         "img": "https://static.fabhotels.com/brands/desktop/FabExpress.jpg",
//         "name": "fabexpress",
//         "properties": [
//           {
//             "iconKey": "fabexpress-low-price",
//             "data": "Super low prices"
//           },
//           {
//             "iconKey": "fabexpress-bed-icon",
//             "data": "Compact, hygienic rooms"
//           },
//           {
//             "iconKey": "fabexpress-wifi-fab",
//             "data": "Free Wi-Fi"
//           }
//         ],
//         "roomTitle": "Basics for travellers on a budget"
//       },
//       {
//         "img": "https://static.fabhotels.com/brands/desktop/FabPrime.jpg",
//         "name": "fabhotelprime",
//         "properties": [
//           {
//             "iconKey": "fabhotelprime-interior-icon",
//             "data": "Contemporary, rich interiors"
//           },
//           {
//             "iconKey": "fabhotelprime-equipped-icon",
//             "data": "Well-equipped rooms"
//           },
//           {
//             "iconKey": "fabhotelprime-trained-staff",
//             "data": "Courteous, highly trained staff"
//           }
//         ],
//         "roomTitle": "Premium amenities, top quality service"
//       },
//       {
//         "img": "https://static.fabhotels.com/brands/desktop/FabEscape.jpg",
//         "name": "fabescape",
//         "properties": [
//           {
//             "iconKey": "fabescape-umbrella-icon",
//             "data": "Spacious rooms with a view"
//           },
//           {
//             "iconKey": "fabescape-food-icon",
//             "data": "24x7 Dine-in restaurant"
//           },
//           {
//             "iconKey": "fabescape-hospitality-icon",
//             "data": "Hospitable staff"
//           }
//         ],
//         "roomTitle": "Affordable getaways for millennials"
//       }
//     ]
//   },
//   "footer": {
//     "seo": [
//       {
//         "title": "Book our hotels in all these cities",
//         "type": null,
//         "data": [
//           {
//             "url": "/hotels-near-me",
//             "subTitle": "Hotels Near me"
//           },
//           {
//             "url": "/hotels-in-agra/",
//             "subTitle": "Agra"
//           },
//           {
//             "url": "/hotels-in-ahmedabad/",
//             "subTitle": "Ahmedabad"
//           },
//           {
//             "url": "/hotels-in-amritsar/",
//             "subTitle": "Amritsar"
//           },
//           {
//             "url": "/hotels-in-chandigarh/",
//             "subTitle": "Chandigarh"
//           },
//           {
//             "url": "/hotels-in-chennai/",
//             "subTitle": "Chennai"
//           },
//           {
//             "url": "/hotels-in-goa/",
//             "subTitle": "Goa"
//           },
//           {
//             "url": "/hotels-in-gurgaon/",
//             "subTitle": "Gurgaon"
//           },
//           {
//             "url": "/hotels-in-hyderabad/",
//             "subTitle": "Hyderabad"
//           },
//           {
//             "url": "/hotels-in-jaipur/",
//             "subTitle": "Jaipur"
//           },
//           {
//             "url": "/hotels-in-mumbai/",
//             "subTitle": "Mumbai"
//           },
//           {
//             "url": "/hotels-in-new-delhi/",
//             "subTitle": "New Delhi"
//           },
//           {
//             "url": "/hotels-in-noida/",
//             "subTitle": "Noida"
//           },
//           {
//             "url": "/hotels-in-pune/",
//             "subTitle": "Pune"
//           },
//           {
//             "url": "/hotels-in-rishikesh/",
//             "subTitle": "Rishikesh"
//           },
//           {
//             "url": "/hotels-in-bangalore/",
//             "subTitle": "Bangalore"
//           },
//           {
//             "url": "/hotels-in-haridwar/",
//             "subTitle": "Haridwar"
//           },
//           {
//             "url": "/hotels-in-mahabaleshwar/",
//             "subTitle": "Mahabaleshwar"
//           },
//           {
//             "url": "/hotels-in-mathura/",
//             "subTitle": "Mathura"
//           },
//           {
//             "url": "/hotels-in-udaipur/",
//             "subTitle": "Udaipur"
//           },
//           {
//             "url": "/hotels-in-varanasi/",
//             "subTitle": "Varanasi"
//           },
//           {
//             "url": "/hotels-in-manali/",
//             "subTitle": "Manali"
//           },
//           {
//             "url": "/hotels-in-tirupati/",
//             "subTitle": "Tirupati"
//           },
//           {
//             "url": "/hotels-in-lonavala/",
//             "subTitle": "Lonavala"
//           },
//           {
//             "url": "/hotels-in-visakhapatnam/",
//             "subTitle": "Visakhapatnam"
//           },
//           {
//             "url": "/hotels-in-bhubaneswar/",
//             "subTitle": "Bhubaneswar"
//           },
//           {
//             "url": "/hotels-in-coimbatore/",
//             "subTitle": "Coimbatore"
//           },
//           {
//             "url": "/hotels-in-kochi/",
//             "subTitle": "Kochi"
//           }
//         ]
//       }
//     ],
//     "msg": "“We wander for distraction, but we travel for fulfilment.”",
//     "caption": "#stayfab",
//     "title": "FabHotels is Best Reviewed Hotel Chain in India",
//     "description": "We are the fastest growing budget hotel brand in India with over 10,000+ rooms in 400+ hotels across 40+ cities in India. All our rooms and hotel properties are spacious, stylish, and contemporary, and are fitted with all modern amenities so that you have a relaxed and consistent travel experience. Because we believe in going the extra mile to ensure you have a delightful stay at the best-price, wherever you go. Most of our hotel properties are located close to business hubs or popular tourist sites and easily accessible by public transport, so you don’t have to waste time or money in traveling to your place of business. But what makes us so Fab? Our team of highly enthusiastic and experienced professionals who work around the clock to ensure you get the best sleep after a long day on the road. You don’t have to take our word for it. Just read what over 200,000+ happy customers have to say. Or better yet, book a stay with us and experience our services and hospitality for yourself. Doesn’t matter where you travel to - Whether it’s New Delhi or Ooty. With FabHotels, you will #StayFab, always!"
//   },
//   "redirect": null,
//   "metaContent": {
//     "title": "FabHotels: India's Best Budget Hotels | Online Hotel Booking",
//     "meta": [
//       {
//         "name": "description",
//         "content": "Book budget hotels online in India starting @ ₹1349. 500+ Cheap hotels across 40+ cities, 10,000+ AC rooms with free breakfast, Wi-fi & toiletries, etc. ✓ Pay at hotel ✓ Lowest price guaranteed ✓ Zero cancellation charges ✓ 200,000+ Verified Hotel Reviews."
//       },
//       {
//         "name": "keywords",
//         "content": "Budget hotels, Cheap hotels, Budget hotels in India, Cheap hotels in india, Hotels with free breakfast, Hotels with Wi-fi"
//       }
//     ],
//     "links": [
//       {
//         "rel": "canonical",
//         "isActive": true,
//         "href": "http://localhost"
//       }
//     ],
//     "ogMeta": [
//       {
//         "property": "og:title",
//         "content": "FabHotels: India's Best Budget Hotels | Online Hotel Booking"
//       },
//       {
//         "property": "og:site_name",
//         "content": "FabHotels.com"
//       },
//       {
//         "property": "og:url",
//         "content": "http://localhost"
//       },
//       {
//         "property": "og:image",
//         "content": "https://static.fabhotels.com/icons/logo_blue_220px.png"
//       },
//       {
//         "property": "og:image:secure_url",
//         "content": "https://static.fabhotels.com/icons/logo_blue_220px.png"
//       },
//       {
//         "property": "og:image:type",
//         "content": "image/png"
//       },
//       {
//         "property": "og:description",
//         "content": "Book budget hotels online in India starting @ ₹1349. 500+ Cheap hotels across 40+ cities, 10,000+ AC rooms with free breakfast, Wi-fi & toiletries, etc. ✓ Pay at hotel ✓ Lowest price guaranteed ✓ Zero cancellation charges ✓ 200,000+ Verified Hotel Reviews."
//       },
//       {
//         "property": "fb:app_id",
//         "content": "test123"
//       },
//       {
//         "property": "og:type",
//         "content": "website"
//       }
//     ]
//   },
//   "helplinenumber": "01244341560",
//   "noOfHotels": "500+",
//   "noOfCities": "40+",
//   "noOfReviews": "2M+",
//   "noOfRooms": "10K+",
//   "graceBookingHour": 4,
//   "bannersignup": null
// }
