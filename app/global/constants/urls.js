import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { ENV } = publicRuntimeConfig;

const urlBase = ENV === "LOCAL" ? "https://home.fabmailers.in" : "";

export const GET_HOME_PAGE = `${urlBase}/consumer/v1/web/home/details`;

export const USER_LOGIN = `${urlBase}/consumer/v1/web/user/login`;

export const USER_LOGIN_OTP = `${urlBase}/consumer/v1/web/user/validateOtp`;

export const USER_LOG_OUT = `${urlBase}/consumer/v1/web/user/logout`;

export const EMAIL_SUBSCRIBE_URL = `${urlBase}/consumer/v1/web/subscription/subscribe`;

export const RESEND_OTP_URL = `${urlBase}/consumer/v1/web/user/resendOtp`;

export const GET_FABULOUS_INFO_URL = `${urlBase}/consumer/v1/web/staticprogram/faborfree`;

export const GET_COUNTRY_CODES_URL = `${urlBase}/consumer/v1/web/user/countries`;

export const GET_USER_PROFILE_URL = `${urlBase}/consumer/v1/web/user/profile`;

export const GET_CITIES_URL = `${urlBase}/consumer/v1/web/search/cities`;

export const GET_GUEST_REVIEW_URL = `${urlBase}/consumer/v1/web/reviews`;

export const GET_VIDEO_REVIEW_URL = `${urlBase}/consumer/v1/web/reviews/video`;

export const SEND_APPLINK_URL = `${urlBase}/consumer/v1/web/subscription/downloadlink`;

export const BASE_URL = `${urlBase}`;

// https://homepage.fabmailers.in/consumer/v1/web/subscription/downloadlink?mobile=9716601997&countryCode=+91&isoCode=IN

export const API_URLS = {
  cleverTapApi: "/consumer/v1/web/user/app/launch",
  domain: urlBase
};
