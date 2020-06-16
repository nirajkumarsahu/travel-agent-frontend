// Global Action Constants
import getConfig from "next/config";

export const GLOBAL_DATA_FAILURE = "GLOBAL_DATA_FAILURE";
export const SET_TIMEOUT_INFO = "SET_TIMEOUT_INFO";
export const LOGOUT_USER = "LOGOUT_USER";
export const EMAIL_SUBSCRIBE = "EMAIL_SUBSCRIBE";
export const SET_VIEWPORT_INFO = "SET_VIEWPORT_INFO";

// Page Key Constants
export const LOGINPAGE_KEY = "loginPage";
export const HOMEPAGE_KEY = "homePage";
export const ABOUTPAGE_KEY = "aboutPage";
export const PRODUCTPAGE_KEY = "productPage";
export const REVIEW_KEY = "homePage";
export const SIGNUPPAGE_KEY = "signupPage";

// TTL related config for the pages
export const ttlIntervalConfig = {
  [HOMEPAGE_KEY]: 20,
  [ABOUTPAGE_KEY]: 30,
  [PRODUCTPAGE_KEY]: 10
};

export const wrapperBackgroundMap = {
  // first index of array is for WrapInContainer, second one is for greyBackground
  bannerfabfree: [0, 1],
  bookings: [1, 0],
  deals: [1, 0],
  cities: [1, 1],
  bannerloyalty: [0, 1],
  reviews: [1, 0],
  fabbrands: [1, 1]
};
// Key Codes for Key Board
export const ENTER_KEY = 13;
export const ARROW_UP_KEY = 38;
export const ARROW_DOWN_KEY = 40;
export const ARROW_RIGHT_KEY = 39;
export const ARROW_LEFT_KEY = 37;
export const TAB_KEY = 9;

// Months for DatePicker
export const allMonths = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

const { publicRuntimeConfig } = getConfig();
const { ENV } = publicRuntimeConfig;

const urlBase = ENV === "LOCAL" ? "https://b2bhomepage.fabmailers.in" : "";

// API Constants
export const API_URLS = {
  domain: urlBase,
  sbtDomain: urlBase,
  home: "/company/v1/travelagent/home/details",
  countryList: "/company/v1/travelagent/user/countries",
  signupPage: "/consumer/v1/mweb/staticpage/enquiry",
  signup: "/consumer/v1/web/enquiry/create"
};
