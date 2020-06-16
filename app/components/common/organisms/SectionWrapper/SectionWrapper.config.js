import theme from "styles/theme";

export const sectionWrapperNameConfig = {
  reviews: "Review",
  deals: "DealCard",
  incentives: "IncentiveCard",
  cities: "CityCard",
  fabbrands: "BrandCard",
  bookings: "BookingCard",
  recommended: "RecommendedCard",
  customerBenefit: "CustomerBenefit"
};

export const carouselCssConfig = {
  bookings: {
    desktopWidth: 384,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 12,
    noOfSlidesInView: 3
  },
  deals: {
    desktopWidth: 303,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 0,
    noOfSlidesInView: 4
  },
  incentives: {
    desktopWidth: 180,
    mobileWidth: 110,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 8,
    noOfSlidesInView: 6
  },
  fabbrands: {
    desktopWidth: 384,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 12,
    noOfSlidesInView: 3
  },
  cities: {
    desktopWidth: 180,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 12,
    noOfSlidesInView: 6
  },
  recommended: {
    desktopWidth: 384,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 8,
    noOfSlidesInView: 3
  },
  reviews: {
    desktopWidth: 1224,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 0,
    noOfSlidesInView: 1
  },
  customerBenefit: {
    desktopWidth: 282,
    mobileWidth: 224,
    desktopMarginTopBottom: 0,
    desktopMarginLeftRight: 12,
    mobileMarginTopBottom: 0,
    mobileMarginLeftRight: 8,
    noOfSlidesInView: 4
  }
};

export const sectionCssConfig = {
  default: `background: ${theme.color_White};`,
  deals: `.shell-loader:after {width: 285px; top: 10px; height: 203px; border-radius: 20px; left: 8px;}; .shell-loader {margin: 0;}`,
  bookings: ` .sliderWrapper {box-shadow: 0 3px 94px -8px rgba(30, 37, 74, 0.1); background: linear-gradient(#F6F6F8, #F5F5F7); border-radius: 8px;};.child-div {padding-top: 23px; padding-bottom: 23px; height: 200px; box-shadow: none;};`,
  fabbrands: `background: ${theme.color_BgGrey}; .parent-div {margin: 0 -10px};.slider-inner {padding: 0 10px;};.child-div {border-radius: 4px; vertical-align: top;}`,
  cities: `background: ${theme.color_BgGrey}; .slider-inner {margin: 0 -12px;};`,
  reviews: `padding-top: 47px; .child-div {padding-bottom: 0;};.sliderWrapper{padding-bottom: 0;};.parent-div { max-width: 600px; margin: 0 auto;}; 
  .arrowPrev {
    left: -100px;
    top: 70px;
  };.arrowNext {
    right: -100px;
    top: 70px;
  }
  `,
  customerBenefit: `background: ${theme.color_BgGrey}; h3, p {white-space: normal;}`
};
