import {
  FETCH_COUNTRY_LIST_DATA,
  FETCH_COUNTRY_LIST_DATA_SUCCESS,
  SEND_SIGNUP_FORM,
  SIGNUP_FETCH_DATA_SUCCESS,
  FETCH_SIGNUP_DATA,
  SIGNUP_PAGE_LOAD_FAILURE
} from "./SignupPage.constants";

export const fetchCountryListData = () => ({
  type: FETCH_COUNTRY_LIST_DATA
});

export const fetchCountryListDataSuccess = data => ({
  type: FETCH_COUNTRY_LIST_DATA_SUCCESS,
  data
});

export const sendSignupForm = data => ({
  type: SEND_SIGNUP_FORM,
  data
});

export const signupPageLoadSuccess = data => ({
  type: SIGNUP_FETCH_DATA_SUCCESS,
  data
});

export const fetchSignupData = data => ({
  type: FETCH_SIGNUP_DATA,
  data
});

export const signupPageLoadFailure = () => ({
  type: SIGNUP_PAGE_LOAD_FAILURE
});
export default [fetchCountryListData, fetchSignupData];
