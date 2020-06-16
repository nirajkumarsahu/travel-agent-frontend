import {
  LOGIN_FORM_PHONE_SUBMIT,
  LOGIN_FAILURE,
  LOGIN_FORM_OTP_SUBMIT,
  RESEND_OTP,
  GET_COUNTRY_CODES
} from "./LoginModal.constants";

export const loginFormPhoneSubmit = data => ({
  type: LOGIN_FORM_PHONE_SUBMIT,
  data
});

export const loginFormOtpSubmit = data => ({
  type: LOGIN_FORM_OTP_SUBMIT,
  data
});

export const loginFailure = data => ({
  type: LOGIN_FAILURE,
  data
});

export const resendOtpAction = data => ({
  type: RESEND_OTP,
  data
});

export const getCountryCodes = data => ({
  type: GET_COUNTRY_CODES,
  data
});
