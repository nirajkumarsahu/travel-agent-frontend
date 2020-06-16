/* eslint-disable no-useless-escape */
export const phone = value =>
  /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(
    value
  );
export const phoneCode = value => !/^[0-9+]{3,}$/.test(value);
export const otpRegex = value => /^[0-9]{6}$/.test(value);
export const httpRegex = value => /\b(http|https)/.test(value);
export const numberRegex = value => /^\d+$/.test(value);
export const emailRegex = value =>
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(
    value
  );
/* eslint-disable no-useless-escape */
export default {
  phone: value =>
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(
      value
    ),
  phoneCode: value => !/^[0-9+]{3,}$/.test(value),
  otp: value => /^[0-9]{6}$/.test(value),
  /* eslint-disable */
  name: value => true,
  password: value => true,
  /* eslint-disable */
  email: value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
  companyName: value => true,
  companyCity: value => true,
};